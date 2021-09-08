import React from "react";
import Radio from "components/Radio/Radio";
import Button from "components/Button/Button";
import { Segment } from "./styles";

const PriceSegment = ({
  total,
  typeTrip,
  indexFlightSelected,
  type,
  index,
  selectFlight,
}) => {
  return (
    <Segment>
      <div className="container" style={{ flexDirection: "row" }}>
        <Radio
          label="Economica"
          labelPrimary
          checked
          onChange={() => console.log("asd")}
        />
        {/* <div className='container-price'>
					<div>
						<p className='person'>Total</p>
						<span className='price'>{`USD ${total}`}</span>
					</div>
				</div> */}

        <div className="container-buttons">
          {/* <Button
						label='Ver precios'
						className='button-three mr-3'
						onClick={() => {
							console.log('sadfasd');
						}}
					/> */}

          <div className="container-price">
            {type === "departure" && (
              <div>
                <p className="person">Total</p>
                <span className="price">{`USD ${total}`}</span>
              </div>
            )}
          </div>

          {type === "departure" && !indexFlightSelected && (
            <Button
              label="Seleccionar"
              className="button-primary"
              onClick={() => {
                selectFlight(index);
              }}
            />
          )}
        </div>
      </div>
    </Segment>
  );
};

export default PriceSegment;
