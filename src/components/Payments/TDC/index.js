import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button/Button";
import { CardElement } from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      color: "#000041",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#7e7b7b",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const ErrorMessage = ({ children }) => (
  <div style={{ textAlign: "justify" }} role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);

const TDC = ({
  stripe,
  elements,
  price,
  makePayment,
  setStripe,
  urlInfo,
  openPopUp,
  tdcData,
}) => {
  const { nameTdc, emailTdc, phoneTdc } = tdcData;
  // const [ number, setNumber ] = useState('');
  const [name, setName] = useState(nameTdc);
  const [email, setEmail] = useState(emailTdc);
  const [phone, setPhone] = useState(phoneTdc);
  // const [ expiry, setExpiry ] = useState('');
  // const [ cvc, setCvc ] = useState('');
  const [focus, setFocus] = useState("");

  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);

  React.useEffect(() => {
    if (stripe) {
      console.log("get Stripe");
      setStripe(stripe);
    }
  }, [stripe]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || name.length === 0) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement("card").focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    let billing_details = {
      name,
      email,
      phone,
    };

    if (billing_details.email.length === 0) {
      delete billing_details.email;
    }

    if (billing_details.phone.length === 0) {
      delete billing_details.phone;
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details,
    });

    setProcessing(false);
    stripePaymentMethodHandler(result);
  };

  const stripePaymentMethodHandler = (result) => {
    if (result.error) {
      setError(result.error);
    } else {
      let dataTdc = {
        nameTdc: name,
        emailTdc: email,
        phoneTdc: phone,
      };
      makePayment(result.paymentMethod, "tdc", dataTdc);
    }
    return;
  };

  const reset = () => {
    setError(null);
    setProcessing(false);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="tdc">
      <p className="text mb-4">Ingresa los datos de tu tardeja de credito</p>

      <div className="tdc-card">
        {/* <Cards cvc={cvc} expiry={expiry} focused={focus} name={name} number={number} /> */}
        {/* <div className='tdc-form'> */}
        <form id="stripeForm" onSubmit={handleSubmit} style={{ width: "100%" }}>
          {/* <div className='tdc-input'>
							<Input
								placeholder='Numero de Tarjeta'
								name='number'
								value={number}
								onChange={(e) => setNumber(e.target.value)}
								onFocus={(e) => setFocus(e.target.name)}
							/>
						</div> */}
          <div className="tdc-input">
            <Input
              placeholder="Ingrese el nombre impreso en la tarjeta"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="tdc-input">
            <Input
              placeholder="Ingrese su correo electronico"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="tdc-input">
            <Input
              placeholder="Ingrese su número de telefono"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          {/* <div className='tdc-input'>
							<Input
								placeholder='Fecha de Vencimiento'
								name='expiry'
								value={expiry}
								onChange={(e) => setExpiry(e.target.value)}
							/>
							<Input placeholder='CVC' name='cvc' value={cvc} onFocus={(e) => setCvc(e.target.name)} />
						</div> */}
          <div
            className="tdc-input"
            style={{ marginBottom: 30, marginTop: 30 }}
          >
            <CardElement
              options={CARD_OPTIONS}
              onChange={(e) => {
                setError(e.error);
                setCardComplete(e.complete);
              }}
            />
          </div>
          {price > 0 && (
            <div
              className="tdc-input"
              style={{
                marginBottom: 30,
                marginTop: 30,
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                justifyItems: "center",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div style={{ width: "40%" }}>
                <Button
                  type="sumbit"
                  label={`Pagar $${price}`}
                  disabled={!stripe}
                  className="button-primary button-block"
                />
              </div>
              {error && (
                <div style={{ width: "40%" }}>
                  <Button
                    onClick={() => reset()}
                    label="Reiniciar Formulario"
                    disabled={!stripe}
                    className="button-primary button-block"
                  />
                </div>
              )}

              {urlInfo.length > 0 && (
                <div style={{ width: "40%" }}>
                  <Button
                    onClick={() => openPopUp(urlInfo)}
                    label="Abrir ventana emergente nuevamente"
                    disabled={!stripe}
                    className="button-primary button-block"
                  />
                </div>
              )}
            </div>
          )}

          {error && (
            <React.Fragment>
              <div
                className="tdc-input"
                style={{
                  marginBottom: 20,
                  marginTop: 20,
                  display: "flex",
                  flexDirection: "row",
                  justifyItems: "center",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <ErrorMessage>{error.message}</ErrorMessage>
              </div>
            </React.Fragment>
          )}
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default TDC;
