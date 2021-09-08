import React, { useContext } from "react";
import Logo from "components/Logo/Logo";
import Input from "components/Input";
import { GoogleLogin } from "react-google-login";
import Button from "components/Button/Button";
import RegisterComponent from "components/Register/Register";
import Footer from "components/Footer";
import PageContext from "components/PageContext";

const Register = () => {
  const { setPath } = useContext(PageContext);
  const [formData, setFormData] = React.useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const { full_name, email, password, password_confirmation } = formData;

  React.useEffect(() => {
    setPath("/register");
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        if (validForm(formData)) {
          console.log("formData", formData);
        }
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [full_name, email, password, password_confirmation]);

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

  const onClick = () => {
    if (validForm(formData)) {
      console.log("formData", formData);
    }
  };

  const validForm = (form) => {
    let isValid = true;
    if (form["password"] !== form["password_confirmation"]) {
      isValid = false;
      const field = document.getElementsByName("password")[0];
      if (!field.classList.contains("is-danger")) {
        field.classList.add("is-danger");
        const newParagraph = document.createElement("p");
        const textError = document.createTextNode(
          `Las contraseñas no coinciden`
        );
        newParagraph.classList.add("help", "is-danger");
        newParagraph.appendChild(textError);
        field.parentNode.appendChild(newParagraph);
      }

      const field2 = document.getElementsByName("password_confirmation")[0];
      if (!field2.classList.contains("is-danger")) {
        field2.classList.add("is-danger");
        const newParagraph = document.createElement("p");
        const textError = document.createTextNode(
          `Las contraseñas no coinciden`
        );
        newParagraph.classList.add("help", "is-danger");
        newParagraph.appendChild(textError);
        field2.parentNode.appendChild(newParagraph);
      }
    }

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

    if (form["full_name"].length === 0) {
      const field = document.getElementsByName("full_name")[0];

      if (!field.classList.contains("is-danger")) {
        field.classList.add("is-danger");
        const newParagraph = document.createElement("p");
        const textError = document.createTextNode(`Debe insertar su nombre`);

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

  return (
    <RegisterComponent>
      <div className="auth">
        <div className="auth-form">
          <Logo className="mb-4" />
          <p className="caption mb-2">Comienza Ya</p>
          <p className="text text-primary mb-4">Crea una cuenta</p>
          <div className="mb-3">
            <Input
              name="full_name"
              value={full_name}
              onChange={(e) => onChange(e)}
              placeholder="Nombres y Apellidos"
            />
          </div>
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
          <div className="mb-3">
            <Input
              name="password_confirmation"
              value={password_confirmation}
              onChange={(e) => onChange(e)}
              type="password"
              placeholder="Verificar Contraseña"
            />
          </div>
          <Button
            onClick={onClick}
            className="button-primary button-block button-default mb-3"
            label="Registrate"
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
                Registrate con Google
              </a>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div className="auth-illustration">
          <img src="images/globo.svg" alt="globo" className="animation-globo" />
          <img src="images/avion.svg" alt="auth" className="animation-avion" />
          <img
            src="images/stars1.svg"
            alt="auth"
            className="animation-stars1"
          />
          <img src="images/auth.png" alt="auth" className="animation-base" />
          <img src="images/ave.png" alt="auth" className="ave" />
          <p>
            El lugar donde alcanzarás todos
            <br /> tus destinos...
          </p>
        </div>
      </div>
      <Footer />
    </RegisterComponent>
  );
};

export default Register;
