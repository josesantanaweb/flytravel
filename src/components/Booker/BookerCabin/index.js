import React, { useState } from "react";
import Radio from "components/Radio/Radio";
import {
  BookerCabinContainer,
  BookerCabinRow,
  BookerCabinLabel,
  BookerCabinClass,
  BookerCabinPersons,
  BookerCabinPaxes,
  BookerCabinPersonsQty,
  BookerCabinPaxesTitle,
  BookerCabinPaxesPerson,
  BookerCabinPaxesRow,
  BookerCabinPaxesAge,
  BookerCabinPaxesItems,
  BookerCabinPaxesItem,
  BookerCabinPaxesControl,
  BookerCabinPaxesRemove,
  BookerCabinPaxesAdd,
  BookerCabinPaxesQty,
  BookerCabinPaxesMore,
  BookerCabinPaxesClass,
} from "./styles";
import { useDispatch } from "react-redux";
import { setPassangers } from "../../../store/availability/actions";

const BookerCabin = () => {
  const dispatch = useDispatch();
  const [showcabin, setShowcabin] = useState(false);
  const [adults, setAdults] = useState(1);
  const [childs, setChilds] = useState(0);
  const [infants, setInfants] = useState(0);
  const [persons, setPersons] = useState([{}, {}, {}]);

  React.useEffect(() => {
    dispatch(setPassangers({ type: "adult", data: adults }));
  }, [adults]);
  React.useEffect(() => {
    dispatch(setPassangers({ type: "child", data: childs }));
  }, [childs]);
  React.useEffect(() => {
    dispatch(setPassangers({ type: "inf", data: infants }));
  }, [infants]);

  const onChangeClass = (e) => {
    e.preventDefault();
    // console.log("hola");
  };

  return (
    <BookerCabinContainer>
      <BookerCabinRow onClick={() => setShowcabin(!showcabin)}>
        <BookerCabinLabel>Cabina</BookerCabinLabel>
        <BookerCabinClass>
          Eco<span>Clase</span>
        </BookerCabinClass>
      </BookerCabinRow>
      <BookerCabinRow>
        <BookerCabinPersonsQty />
        <BookerCabinPersons>
          {persons.map((person, key) => (
            <img
              key={key}
              src={`${window.location.origin}/images/persons.png`}
            />
          ))}
        </BookerCabinPersons>
      </BookerCabinRow>

      {/* Selector */}
      <BookerCabinPaxes showcabin={showcabin}>
        <BookerCabinPaxesTitle>
          Selección de cabina y pasajero
        </BookerCabinPaxesTitle>

        <BookerCabinPaxesClass>
          <Radio
            id="1"
            forLabel="1"
            label="Clase Economy"
            checked
            value="economy"
            name="class"
            onChange={onChangeClass}
          />

          {/* <Radio id='2' forLabel='2' label='Clase Business' name='class' value='2' /> */}
        </BookerCabinPaxesClass>
        <BookerCabinPaxesItems>
          <BookerCabinPaxesItem>
            <BookerCabinPaxesRow>
              <BookerCabinPaxesPerson>Adulto</BookerCabinPaxesPerson>
              <BookerCabinPaxesAge>12 +</BookerCabinPaxesAge>
            </BookerCabinPaxesRow>
            <BookerCabinPaxesControl>
              <BookerCabinPaxesRemove
                disabled={adults < 1}
                onClick={() =>
                  setAdults((adults) => (adults > 1 ? adults - 1 : 0))
                }
              >
                <i className="fa fa-minus" />
              </BookerCabinPaxesRemove>
              <BookerCabinPaxesQty>{adults}</BookerCabinPaxesQty>
              <BookerCabinPaxesAdd
                onClick={() => setAdults((adults) => adults + 1)}
              >
                <i className="fa fa-plus" />
              </BookerCabinPaxesAdd>
            </BookerCabinPaxesControl>
          </BookerCabinPaxesItem>

          <BookerCabinPaxesItem>
            <BookerCabinPaxesRow>
              <BookerCabinPaxesPerson>Niños</BookerCabinPaxesPerson>
              <BookerCabinPaxesAge>2 - 11</BookerCabinPaxesAge>
            </BookerCabinPaxesRow>
            <BookerCabinPaxesControl>
              <BookerCabinPaxesRemove
                disabled={adults < 1 && childs < 1}
                onClick={() =>
                  setChilds((childs) => (childs > 1 ? childs - 1 : 0))
                }
              >
                <i className="fa fa-minus" />
              </BookerCabinPaxesRemove>
              <BookerCabinPaxesQty>{childs}</BookerCabinPaxesQty>
              <BookerCabinPaxesAdd
                onClick={() => setChilds((childs) => childs + 1)}
              >
                <i className="fa fa-plus" />
              </BookerCabinPaxesAdd>
            </BookerCabinPaxesControl>
          </BookerCabinPaxesItem>

          <BookerCabinPaxesItem>
            <BookerCabinPaxesRow>
              <BookerCabinPaxesPerson>Bebés</BookerCabinPaxesPerson>
              <BookerCabinPaxesAge>debajo de 2</BookerCabinPaxesAge>
            </BookerCabinPaxesRow>
            <BookerCabinPaxesControl>
              <BookerCabinPaxesRemove
                disabled={adults < 1 && infants < 1}
                onClick={() =>
                  setInfants((infants) => (infants > 1 ? infants - 1 : 0))
                }
              >
                <i className="fa fa-minus" />
              </BookerCabinPaxesRemove>
              <BookerCabinPaxesQty>{infants}</BookerCabinPaxesQty>
              <BookerCabinPaxesAdd
                onClick={() => setInfants((infants) => infants + 1)}
              >
                <i className="fa fa-plus" />
              </BookerCabinPaxesAdd>
            </BookerCabinPaxesControl>
          </BookerCabinPaxesItem>
        </BookerCabinPaxesItems>
        <BookerCabinPaxesMore>
          Mas Opciones <i className="fa fa-chevron-down" />
        </BookerCabinPaxesMore>
      </BookerCabinPaxes>
    </BookerCabinContainer>
  );
};

export default BookerCabin;
