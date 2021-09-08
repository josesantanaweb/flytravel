import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Card from "components/Card/Card";
import Transfer from "../Transfer";
import TDC from "../TDC";
import Zelle from "../Zelle";
import Paypal from "../Paypal";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const SelectPayment = ({
  price,
  makePayment,
  setStripe,
  urlInfo,
  openPopUp,
  tdcData,
}) => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
  return (
    <Card>
      <h3 className="title mb-4">¿Cómo deseas pagar?</h3>
      <p className="text">Selecciona el método de pago</p>
      <Tabs>
        <TabList>
          <Tab>Tarjeta de Credito</Tab>
          {/* <Tab>Transferencia</Tab>
          <Tab>
            <img src="images/zelle.svg" width="40" />
          </Tab>
          <Tab>
            <img src="images/paypal-logo.png" width="80" />
          </Tab> */}
        </TabList>

        <TabPanel>
          <Elements stripe={stripePromise}>
            <TDCInjected
              makePayment={makePayment}
              urlInfo={urlInfo}
              setStripe={setStripe}
              price={price}
              openPopUp={openPopUp}
              tdcData={tdcData}
            />
          </Elements>
        </TabPanel>
        {/* <TabPanel>
          <Transfer />
        </TabPanel>
        <TabPanel>
          <Zelle />
        </TabPanel>
        <TabPanel>
          <Paypal />
        </TabPanel> */}
      </Tabs>
    </Card>
  );
};

const TDCInjected = ({
  price,
  makePayment,
  setStripe,
  urlInfo,
  openPopUp,
  tdcData,
}) => {
  return (
    <ElementsConsumer>
      {({ elements, stripe }) => (
        <TDC
          price={price}
          makePayment={makePayment}
          setStripe={setStripe}
          elements={elements}
          stripe={stripe}
          urlInfo={urlInfo}
          openPopUp={openPopUp}
          tdcData={tdcData}
        />
      )}
    </ElementsConsumer>
  );
};

export default SelectPayment;
