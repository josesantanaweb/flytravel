import React, { useEffect, useState, useRef } from "react";
import {
  AutoCompleteContainer,
  AutoCompleteOptions,
  AutoCompleteInput,
  AutoCompleteOption,
  AutoCompleteCountry,
  AutoCompleteAirport,
  AutoCompleteCity,
  AutoCompleteIata,
} from "./styles";
import {
  getAirports,
  setAirports,
  setCities,
} from "../../../store/availability/actions";
import { useDispatch } from "react-redux";

const BookerAutoComplete = ({
  focused,
  onFocus,
  onBlur,
  setAirport,
  setFocus,
  type,
  preSelected,
}) => {
  const dispatch = useDispatch();
  const initialData = [];
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState(initialData);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateCity = (value) => {
    setSearch(value.city);
    setDisplay(false);
    dispatch(setAirports({ type, data: value.iata }));
    dispatch(setCities({ type, data: value.city }));
  };

  React.useEffect(() => {
    if (preSelected) {
      makeSearch(preSelected, true);
    }
  }, [preSelected]);

  const makeSearch = (value, preselect = false) => {
    if (value.length === 0) {
      setSearch("");
      setAirport("");
      setFocus(false);
      setDisplay(false);
      setOptions([]);

      return;
    }
    if (value.length > 2) {
      getAirports(value)
        .then((response) => {
          if (response.success) {
            // console.log(response.data);
            setOptions(response.data);
            if (preselect) {
              updateCity(response.data[0]);
              setAirport(response.data[0].name);
              setDisplay(false);
            }
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    }

    setSearch(value);
    setDisplay(true);
    setFocus(true);
  };

  return (
    <div ref={wrapperRef}>
      <AutoCompleteContainer>
        <AutoCompleteInput
          focused={focused}
          onFocus={onFocus}
          // onClick={() => setDisplay(!display)}
          value={search}
          onChange={(event) => makeSearch(event.target.value)}
        />
        {display && (
          <AutoCompleteOptions>
            {options.map((value, i) => {
              return (
                <AutoCompleteOption
                  onClick={() => {
                    updateCity(value);
                    setAirport(value.name);
                  }}
                  key={i}
                  tabIndex="0"
                >
                  <i className="fa fa-plane" />
                  <AutoCompleteAirport>{value.name}</AutoCompleteAirport>
                  <AutoCompleteIata>({value.iata}),</AutoCompleteIata>
                  <div>
                    <AutoCompleteCity>{value.city},</AutoCompleteCity>
                    <AutoCompleteCountry>{value.country}</AutoCompleteCountry>
                  </div>
                </AutoCompleteOption>
              );
            })}
          </AutoCompleteOptions>
        )}
      </AutoCompleteContainer>
    </div>
  );
};

export default BookerAutoComplete;
