import React from "react";
import Input from "components/Input";
import Radio from "components/Radio/Radio";
import Card from "components/Card/Card";
import Select from "components/Select/Select";
import DatePicker from "react-datepicker";
import moment from "moment-timezone";

const PassengersData = ({
  countries,
  passengers,
  setPassengers,
  setVoucher,
  errors,
  setErrors,
  countryPreselected,
}) => {
  const [passengersData, setData] = React.useState([]);
  const [birthDates, setBirthDates] = React.useState(null);

  console.log("passengers", passengers);

  React.useEffect(() => {
    if (passengers.length > 0) {
      setData(passengers);
      let info = {};
      passengers.forEach((passenger) => {
        let minYears =
          passenger.PassengerTypeCode === "ADT"
            ? 12
            : passenger.PassengerTypeCode === "CNN"
            ? 2
            : 0;

        let nameBdp = `${passenger["PassengerTypeCode"].toLowerCase()}-${
          passenger["NumShow"]
        }-BirthDatePicker`;
        let nameDedp = `${passenger["PassengerTypeCode"].toLowerCase()}-${
          passenger["NumShow"]
        }-DocExpireDatePicker`;

        info[nameBdp] =
          minYears > 0
            ? moment().subtract(minYears, "years").toDate()
            : moment().subtract(6, "month").toDate();

        info[nameDedp] = moment().add(6, "month").format("YYYY-MM-DD");
      });

      setBirthDates(info);
    }
  }, [passengers]);

  const documents = [{ value: "PP", name: "Pasaporte" }];

  const onChange = (value, index, keyData, partName) => {
    let editable = passengersData;
    let passenger = editable[index];
    let keys = keyData.split(".");

    if (keys.length > 1) {
      passenger[keys[0]][keys[1]] = value;
      if (
        keyData === "TSAInfo.Gender" &&
        passenger["PassengerTypeCode"] === "ADT" &&
        value === "M"
      ) {
        passenger["PersonName"]["NamePrefix"] = "MR";
      } else if (
        keyData === "TSAInfo.Gender" &&
        passenger["PassengerTypeCode"] === "ADT" &&
        value === "F"
      ) {
        passenger["PersonName"]["NamePrefix"] = "MRS";
      }

      if (keys[1] === "DocID") {
        passenger["TSAInfo"]["TSADocID"] = value;
      } else if (keys[1] === "DocType") {
        passenger["TSAInfo"]["TSADocType"] = value;
      }
    } else {
      passenger[keys[0]] = value;
      if (keyData === "BirthDate") {
        passenger["TSAInfo"]["BirthDate"] = value;
      } else if (keyData === "Email") {
        if (index === 0) {
          setVoucher((oldData) => {
            return {
              ...oldData,
              email: value,
            };
          });
        }
      }
    }
    setErrors(errors.filter((e) => e !== partName));
    editable[index] = passenger;

    setData(editable);
    setPassengers((old) => {
      let data = old;
      data[index] = passenger;
      return data;
    });
  };

  // const fixCalendar = () => {
  // 	setTimeout(() => {
  // 		if (window.document.getElementsByClassName('react-datepicker-popper').length > 0) {
  // 			let calendar = window.document.getElementsByClassName('react-datepicker-popper')[0];
  // 			let placement = calendar.getAttribute('data-placement');
  // 			let style = calendar.style;
  // 			let transform = 'translate3d(';
  // 			style.transform
  // 				.replaceAll('px', '')
  // 				.replace('translate3d(', '')
  // 				.replace(')', '')
  // 				.split(',')
  // 				.forEach((a, index) => {
  // 					let s = parseInt(a.trim());
  // 					if (index === 0) {
  // 						if (placement.includes('top')) {
  // 							s += 6;
  // 						} else {
  // 							s += 9;
  // 						}

  // 						transform += `${s}px,`;
  // 					} else if (index === 1) {
  // 						if (placement.includes('top')) {
  // 							s -= 57;
  // 						} else {
  // 							s -= 6;
  // 						}
  // 						transform += `${s}px,`;
  // 					} else {
  // 						transform += `${s}px)`;
  // 					}
  // 				});
  // 			calendar.style.transform = transform;
  // 		}
  // 	}, 1);
  // };

  const getErrorStyle = React.useCallback(
    (id) => {
      let exists = errors.indexOf(id);
      if (exists >= 0) {
        return { borderColor: "red", borderWidth: 1 };
      }
      return {};
    },
    [errors]
  );

  const isChecked = (type, value, genderValue) => {
    if (type === "INF") {
      if (value.length > 0 && value === `${genderValue}I`) {
        return true;
      }
    } else {
      if (value.length > 0 && value === genderValue) {
        return true;
      }
    }

    return false;
  };

  const divInfo = (passenger, type, key) => {
    let partName = `${type.toLowerCase()}-${passenger["NumShow"]}`;
    let nameShow = `${
      type === "ADT" ? "Adulto" : type === "CNN" ? "Nino" : "Infante"
    } #${passenger["NumShow"]}`;
    let minYears = type === "ADT" ? 12 : type === "CNN" ? 2 : 0;
    let maxYears = type === "ADT" ? 90 : type === "CNN" ? 11 : 1;
    let countryPassenger = countries.find((value) =>
      value.name.includes(countryPreselected)
    );
    let gender = passenger.TSAInfo.Gender;

    return (
      <div className="row mb-5" key={key}>
        <h3 className="title mb-4">{nameShow}</h3>
        <div className="row mb-3">
          <div className="col-md-6">
            <Input
              id={`${partName}-PersonName.GivenName`}
              style={getErrorStyle(`${partName}-PersonName.GivenName`)}
              label="Nombres *"
              placeholder="Ingrese sus Nombres"
              onChange={(e) =>
                onChange(
                  e.currentTarget.value,
                  key,
                  "PersonName.GivenName",
                  `${partName}-PersonName.GivenName`
                )
              }
            />
          </div>
          <div className="col-md-6">
            <Input
              id={`${partName}-PersonName.Surname`}
              style={getErrorStyle(`${partName}-PersonName.Surname`)}
              label="Apellidos *"
              placeholder="Ingrese sus Apellidos"
              onChange={(e) =>
                onChange(
                  e.currentTarget.value,
                  key,
                  "PersonName.Surname",
                  `${partName}-PersonName.Surname`
                )
              }
            />
          </div>
        </div>
        <div className="row mb-3 fix-datepicker">
          <div className="col-md-6">
            <Input
              id={`${partName}-BirthDate`}
              style={getErrorStyle(`${partName}-BirthDate`)}
              label="Fecha de Nacimiento *"
              placeholder="Ingrese su fecha de nacimiento"
              autoComplete="off"
              onFocus={(e) => {
                let varName = `${partName}-BirthdayPicker`;
                let datePicker = document.getElementById(varName);
                datePicker.click();
              }}
            />
            <DatePicker
              id={`${partName}-BirthdayPicker`}
              className="hidden"
              locale="es"
              dropdownMode="select"
              dateFormat="MM/dd/yyyy"
              // onCalendarOpen={() => {
              // 	fixCalendar();
              // }}
              popperPlacement="auto"
              selected={moment(
                birthDates[`${partName}-BirthDatePicker`]
              ).toDate()}
              onChange={(date) => {
                let inputName = `${partName}-BirthDate`;
                let input = document.getElementById(inputName);
                let dateInput = moment(date).format("YYYY-MM-DD");

                input.setAttribute("value", dateInput);
                onChange(dateInput, key, "BirthDate", inputName);

                setBirthDates((old) => {
                  return {
                    ...old,
                    [`${partName}-BirthDatePicker`]: dateInput,
                  };
                });
              }}
              minDate={moment()
                .subtract(maxYears, "years")
                .startOf("year")
                .toDate()}
              maxDate={
                minYears > 0
                  ? moment().subtract(minYears, "years").toDate()
                  : moment().subtract(6, "month").toDate()
              }
              showYearDropdown
              yearDropdownItemNumber={80}
              scrollableYearDropdown
            />
          </div>
          <div className="col-md-6">
            <Select
              id={`${partName}-TSAInfo.BirthCountry`}
              boxStyle={getErrorStyle(`${partName}-TSAInfo.BirthCountry`)}
              options={countries}
              defaultValue={countryPassenger.value}
              label="Nacionalidad *"
              onChange={(e) =>
                onChange(
                  e.currentTarget.value,
                  key,
                  "TSAInfo.BirthCountry",
                  `${partName}-TSAInfo.BirthCountry`
                )
              }
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <Select
              selected="PP"
              id={`${partName}-Document.DocType`}
              boxStyle={getErrorStyle(`${partName}-Document.DocType`)}
              options={documents}
              label="Tipo de documento *"
              onChange={(e) =>
                onChange(
                  e.currentTarget.value,
                  key,
                  "Document.DocType",
                  `${partName}-Document.DocType`
                )
              }
            />
          </div>
          <div className="col-md-6">
            <Input
              id={`${partName}-Document.DocID`}
              style={getErrorStyle(`${partName}-Document.DocID`)}
              label="Numero de Documento*"
              placeholder="Ingrese su Numero de Documento"
              onChange={(e) =>
                onChange(
                  e.currentTarget.value,
                  key,
                  "Document.DocID",
                  `${partName}-Document.DocID`
                )
              }
            />
          </div>
        </div>

        <div className="row mb-3 fix-datepicker">
          <div className="col-md-6">
            <Select
              id={`${partName}-TSAInfo.DocIssueCountry`}
              boxStyle={getErrorStyle(`${partName}-TSAInfo.DocIssueCountry`)}
              options={countries}
              selected={countryPassenger.value}
              label="Pais de expedicion del documento *"
              onChange={(e) =>
                onChange(
                  e.currentTarget.value,
                  key,
                  "TSAInfo.DocIssueCountry",
                  `${partName}-TSAInfo.DocIssueCountry`
                )
              }
            />
          </div>

          <div className="col-md-6">
            <Input
              id={`${partName}-DocExpireDate`}
              style={getErrorStyle(`${partName}-DocExpireDate`)}
              label="Fecha de Vencimiento de Documento *"
              placeholder="Ingrese su Fecha de Vencimiento de Documento "
              onFocus={(e) => {
                let varName = `${partName}-DocExpireDatePicker`;
                let datePicker = document.getElementById(varName);
                datePicker.click();
              }}
            />
            <DatePicker
              id={`${partName}-DocExpireDatePicker`}
              className="hidden"
              locale="es"
              dropdownMode="select"
              dateFormat="MM/dd/yyyy"
              // onCalendarOpen={() => {
              // 	fixCalendar();
              // }}
              popperPlacement="auto"
              selected={moment(
                birthDates[`${partName}-DocExpireDatePicker`]
              ).toDate()}
              onChange={(date) => {
                let inputName = `${partName}-DocExpireDate`;
                let input = document.getElementById(inputName);
                let dateInput = moment(date).format("YYYY-MM-DD");

                input.setAttribute("value", dateInput);
                onChange(dateInput, key, "TSAInfo.DocExpireDate", inputName);

                setBirthDates((old) => {
                  return {
                    ...old,
                    [`${partName}-DocExpireDatePicker`]: dateInput,
                  };
                });
              }}
              minDate={moment().add(6, "month").toDate()}
              showYearDropdown
              yearDropdownItemNumber={80}
              scrollableYearDropdown
            />
          </div>
        </div>

        {type !== "INF" && (
          <div className="row">
            <div className="col-md-12">
              <Input
                id={`${partName}-Email`}
                style={getErrorStyle(`${partName}-Email`)}
                label={`Correo electronico ${type === "ADT" ? "*" : ""}`}
                placeholder="Ingrese su correo electronico "
                onChange={(e) =>
                  onChange(
                    e.currentTarget.value,
                    key,
                    "Email",
                    `${partName}-Email`
                  )
                }
              />
            </div>
          </div>
        )}

        <div className="row mt-2 mb-2">
          <div className="col-md-6 genre mt-2">
            <p className="text mb-3">Sexo *</p>
            <div className="row">
              <div className="col-md-4">
                <Radio
                  id={`${partName}-Gender-Male`}
                  style={getErrorStyle(`${partName}-Gender`)}
                  forLabel={`${partName}-Gender`}
                  label="Masculino"
                  radioGroup
                  value={type === "INF" ? "MI" : "M"}
                  name={`${partName}-Gender`}
                  defaultChecked={isChecked(type, gender, "M")}
                  checked={isChecked(type, gender, "M")}
                  onClick={() =>
                    onChange(
                      type === "INF" ? "MI" : "M",
                      key,
                      "TSAInfo.Gender",
                      `${partName}-TSAInfo.Gender`
                    )
                  }
                />
              </div>
              <div className="col-md-4">
                <Radio
                  id={`${partName}-Gender-Female`}
                  style={getErrorStyle(`${partName}-Gender`)}
                  forLabel={`${partName}-Gender`}
                  label="Femenino"
                  value={type === "INF" ? "FI" : "F"}
                  defaultChecked={isChecked(type, gender, "F")}
                  checked={isChecked(type, gender, "F")}
                  name={`${partName}-Gender`}
                  onClick={(e) =>
                    onChange(
                      type === "INF" ? "FI" : "F",
                      key,
                      "TSAInfo.Gender",
                      `${partName}-TSAInfo.Gender`
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const passengersDiv = React.useCallback(() => {
    return (
      <React.Fragment>
        {passengersData.map((passenger, key) =>
          divInfo(passenger, passenger["PassengerTypeCode"], key)
        )}
      </React.Fragment>
    );
  }, [passengersData, birthDates, countryPreselected, errors]);

  return (
    <Card>
      <div className="passengerdata">
        <h3 className="title mb-3">¿Quiénes viajan?</h3>
        <div className="alert alert-secondary mb-4">
          <p className="alert-title mb-3">Documentacion Requerida</p>
          <p className="alert-text">
            Para poder hacer este viaje los pasajeros pequeños necesitan contar
            con cierta documentacion
          </p>
        </div>
        {passengersData.length > 0 && passengersDiv()}
      </div>
    </Card>
  );
};

export default PassengersData;
