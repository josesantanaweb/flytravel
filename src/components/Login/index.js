import React from "react";
import Logo from "components/Logo/Logo";
import Input from "components/Input";
import { GoogleLogin } from "react-google-login";
import Button from "components/Button/Button";

export const Menu = ({ isActive }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const responseGoogle = (response) => {
    if (response.profileObj) {
      const tokenId = response.tokenId;
      let body = {
        tokenId,
        full_name: response.profileObj.name,
        email: response.profileObj.email,
        accessToken: response.accessToken,
        googleId: response.googleId,
      };

      console.log(body);
    }
  };

  const onChange = (e) => {
    const field = document.getElementsByName(e.target.name)[0];
    if (field.classList.contains("is-danger")) {
      field.classList.remove("is-danger");

      [...field.parentNode.childNodes].map((item, index) => {
        if (item.localName === "p") {
          field.parentNode.removeChild(field.parentNode.childNodes[index]);
        }
        return false;
      });
    }

    if (e.target.name === "password_confirmation") {
      const passwordField = document.getElementsByName("password")[0];
      if (passwordField.classList.contains("is-danger")) {
        field.classList.remove("is-danger");
      }
    }

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const validForm = (form) => {
    let isValid = true;

    if (!validateEmail(form["email"])) {
      const field = document.getElementsByName("email")[0];

      if (!field.classList.contains("is-danger")) {
        field.classList.add("is-danger");
        const newParagraph = document.createElement("p");
        const textError = document.createTextNode("El email es inválido");

        newParagraph.classList.add("help", "is-danger");
        newParagraph.appendChild(textError);
        field.parentNode.appendChild(newParagraph);
      }
      isValid = false;
    }

    if (!validatePass(form["password"])) {
      const field = document.getElementsByName("password")[0];

      if (!field.classList.contains("is-danger")) {
        field.classList.add("is-danger");
        const newParagraph = document.createElement("p");
        const textError = document.createTextNode(
          `La contraseña debe contener un mínimo de 6 caracteres, mínimo una letra mayúscula y un número`
        );

        newParagraph.classList.add("help", "is-danger");
        newParagraph.appendChild(textError);
        field.parentNode.appendChild(newParagraph);
      }
      isValid = false;
    }

    return isValid;
  };

  const validateEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };
  const validatePass = (pass) => {
    // eslint-disable-next-line no-useless-escape
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,15}$/gm;

    return re.test(pass);
  };

  const onClick = () => {
    if (validForm(formData)) {
      console.log("formData", formData);
    }
  };

  return (
    <div className={`login ${isActive ? "is-active" : ""}`}>
      <div className="auth-form">
        <Logo className="mb-4" />
        <p className="caption mb-3">Ingresa Ya</p>
        <div className="mb-3">
          <Input
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            placeholder="Correo Electronico"
          />
        </div>
        <div className="mb-3">
          <Input
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <Button
          onClick={onClick}
          className="button-primary button-block button-default mb-3"
          label="Ingresar"
        />
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          autoLoad={false}
          render={(renderProps) => (
            <a
              href="#!"
              className="auth-google mb-4"
              onClick={(e) => {
                e.preventDefault();
                renderProps.onClick();
              }}
            >
              <img src="../images/google.svg" />
              Iniciar con Google
            </a>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default Menu;
