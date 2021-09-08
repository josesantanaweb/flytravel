import React from "react";
import moment from "moment";
import { DaySelectedContainer } from "./styles";

const DaySelected = ({ date, changeDate, limit, limitType, typeTrip }) => {
  const [dates, setDates] = React.useState([]);

  const convertStringDate = (d) => {
    let formated = d.format("ddd D MMM").replace(/\./g, "").split(" ");
    formated[0] = jsUcfirst(formated[0]);
    formated[2] = jsUcfirst(formated[2]);

    return formated.join(" ");
  };

  const jsUcfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  React.useEffect(() => {
    const stringDates = [];
    let firstDate = moment(date).subtract(4, "day");

    for (let i = 1; i < 8; i++) {
      const newDate = firstDate.add(1, "day");
      stringDates.push({
        stringDate: convertStringDate(newDate),
        momentDate: newDate.format("YYYY-MM-DD"),
        selected: newDate.format("YYYY-MM-DD") === date,
      });
    }
    setDates(stringDates);
  }, [date]);

  const addDay = () => {
    const newDate = moment(dates[6].momentDate).add(1, "day");
    const objectDate = {
      stringDate: convertStringDate(newDate),
      momentDate: newDate.format("YYYY-MM-DD"),
      selected: newDate.format("YYYY-MM-DD") === date,
    };
    let newDates = [...dates.slice(1, 7), objectDate];

    setDates(newDates);
  };

  const substractDay = () => {
    const newDate = moment(dates[0].momentDate).subtract(1, "day");
    const objectDate = {
      stringDate: convertStringDate(newDate),
      momentDate: newDate.format("YYYY-MM-DD"),
      selected: newDate.format("YYYY-MM-DD") === date,
    };
    let newDates = [objectDate, ...dates.slice(0, 6)];

    setDates(newDates);
  };

  const validChangeDate = (selected) => {
    let momentDateLimit = moment(limit);
    const momentDateSelected = moment(selected);
    if (typeTrip === "one-way") {
      changeDate(selected);
    } else {
      if (limitType === "max" && momentDateSelected < momentDateLimit) {
        changeDate(selected);
        return;
      } else if (limitType === "max" && momentDateSelected > momentDateLimit) {
        console.log("error");
        return;
      }
    }

    if (limitType === "min" && momentDateSelected > momentDateLimit) {
      changeDate(selected);
      return;
    } else if (limitType === "max" && momentDateSelected < momentDateLimit) {
      console.log(momentDateSelected, momentDateLimit);
      console.log("error");
      return;
    }
  };

  return (
    <DaySelectedContainer>
      <button className="prev-day" onClick={() => substractDay()}>
        <i className="fa fa-angle-left" />
      </button>
      {dates.map((day, key) => (
        <span
          className={day.selected ? "day selected" : "day"}
          onClick={() => {
            validChangeDate(day.momentDate);
          }}
          key={key}
        >
          {day.stringDate}
        </span>
      ))}
      <button className="next-day" onClick={() => addDay()}>
        <i className="fa fa-angle-right" />
      </button>
    </DaySelectedContainer>
  );
};

export default DaySelected;
