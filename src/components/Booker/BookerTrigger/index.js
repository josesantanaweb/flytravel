import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import {
  BookerTriggerContainer,
  BookerTriggerRow,
  BookerTriggerLabel,
  BookerTriggerDate,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { setDates } from "../../../store/availability/actions";

registerLocale("es", es);

const BookerTrigger = ({ typeTrip }) => {
  const dispatch = useDispatch();
  const pickerRef = React.useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  // const [startDate, setStartDate] = useState(new Date("2020-10-25"));
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 7))
    // new Date("2020-10-30")
  );

  const dates = useSelector(({ availability }) => availability.dates);

  // const handleCalendarClose = () => console.log("Calendar closed");
  // const handleCalendarOpen = () => console.log("Calendar opened");

  React.useEffect(() => {
    const datePickerContainer = window.document.querySelector(
      ".react-datepicker__input-container"
    );
    const inputDatePicker = datePickerContainer.childNodes[0];
    if (
      typeTrip === "one-way" &&
      !inputDatePicker.classList.contains("center-text-date-picker")
    ) {
      inputDatePicker.classList.add("center-text-date-picker");
    } else {
      inputDatePicker.classList.remove("center-text-date-picker");
    }
  }, [typeTrip]);

  React.useEffect(() => {
    if (dates && dates.hasOwnProperty("departure")) {
      const dateDeparture = moment(dates.departure)
        .add(1, "day")
        .format("YYYY-MM-DD");

      setStartDate(new Date(dateDeparture));
    }

    if (dates && dates.hasOwnProperty("arrival") && typeTrip === "roundtrip") {
      const dateArrival = moment(dates.arrival)
        .add(1, "day")
        .format("YYYY-MM-DD");

      setEndDate(new Date(dateArrival));
    }
  }, [dates]);

  return (
    <BookerTriggerContainer typeTrip={typeTrip}>
      <BookerTriggerRow>
        {/* <BookerTriggerRow onCalendarOpen={handleCalendarOpen}> */}
        <BookerTriggerLabel typeTrip={typeTrip}>Salida</BookerTriggerLabel>
        <DatePicker
          locale="es"
          selected={startDate}
          dateFormat="d MMM"
          onCalendarOpen={() => {
            let calendar = window.document.getElementsByClassName(
              "react-datepicker-popper"
            )[0];
            calendar.classList.add("react-datepicker-popper-transform");
          }}
          onChange={(date) => {
            setStartDate(date);
            dispatch(
              setDates({
                type: "departure",
                data: moment(date).format("Y-MM-DD"),
              })
            );
            if (typeTrip === "roundtrip") {
              const arrivalDate = moment(date).add(7, "days");
              setEndDate(arrivalDate.toDate());
              dispatch(
                setDates({
                  type: "arrival",
                  data: arrivalDate.format("Y-MM-DD"),
                })
              );
              if (pickerRef.current) {
                pickerRef.current.setFocus();
              }
            }
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </BookerTriggerRow>
      {typeTrip === "roundtrip" && (
        <BookerTriggerRow>
          <BookerTriggerLabel>Vuelta</BookerTriggerLabel>
          <DatePicker
            ref={pickerRef}
            locale="es"
            selected={endDate}
            dateFormat="d MMM"
            onCalendarOpen={() => {
              let calendar = window.document.getElementsByClassName(
                "react-datepicker-popper"
              )[0];
              calendar.classList.add("react-datepicker-popper-transform");
            }}
            onChange={(date) => {
              setEndDate(date);
              dispatch(
                setDates({
                  type: "arrival",
                  data: moment(date).format("Y-MM-DD"),
                })
              );
            }}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </BookerTriggerRow>
      )}
    </BookerTriggerContainer>
  );
};

export default BookerTrigger;
