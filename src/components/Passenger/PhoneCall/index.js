import React from "react";
import Card from "components/Card/Card";
import Input from "components/Input";
import Select from "components/Select/Select";
import { countryPhoneCodes } from "utils";

const PhoneCall = ({
  phones,
  setPhones,
  errors,
  countryPreselected,
  setErrors,
}) => {
  const onChange = (value, type, index) => {
    let old = phones;
    old[index] = {
      ...old[index],
      [type]: value,
    };

    setPhones(old);
    if (value.length > 0) {
      setErrors([]);
    }
  };

  const addNewPhone = (e) => {
    e.preventDefault();
    let old = [
      ...phones,
      { code: countryPreselected ? countryPreselected : "", phone: "" },
    ];
    setPhones(old);
  };

  const getErrorStyle = (index) => {
    let exists = errors.map((e) => e.index).indexOf(index);
    if (exists >= 0) {
      return { borderColor: "red", borderWidth: 1 };
    }
    return {};
  };

  const phonesCallback = React.useCallback(() => {
    return phones.map((_, index) => (
      <div key={index} className="row mb-4 align-items-center">
        <div className={index === 0 ? "col-md-6" : "col-md-4"}>
          <Select
            style={getErrorStyle(index)}
            options={countryPhoneCodes}
            defaultValue={countryPreselected}
            label="Codigo"
            onChange={(e) => onChange(e.currentTarget.value, "code", index)}
          />
        </div>
        <div className="col-md-6">
          <Input
            style={getErrorStyle(index)}
            label="Telefono"
            placeholder="Ingrese su Telefono"
            onChange={(e) => onChange(e.currentTarget.value, "phone", index)}
          />
        </div>
        {index !== 0 && (
          <div className="col-md-2">
            <span
              className="phonecall-add"
              onClick={() => setPhones(phones.filter((_, i) => index !== i))}
            >
              <i className="fa fa-plus mr-2" />
              Eliminar
            </span>
          </div>
        )}
      </div>
    ));
  }, [phones, countryPreselected, errors]);

  return (
    <Card>
      <div className="phonecall">
        <h3 className="title mb-3">¿A qué número podemos llamarte?</h3>
        <p className="text mb-4">
          Podemos Mantenerte informado vía WhatsApp y SMS sobre detalles de tu
          compra, estado del vuelo y posibles cambios en tu viaje.
        </p>
        {phonesCallback()}
        <span className="phonecall-add" onClick={addNewPhone}>
          <i className="fa fa-plus mr-2" />
          Agregar otro Telefono
        </span>
      </div>
    </Card>
  );
};

export default PhoneCall;
