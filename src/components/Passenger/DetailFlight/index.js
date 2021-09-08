// import React from 'react';
// import Card from 'components/Card/Card';
// import moment from 'moment';
// import { useSelector } from 'react-redux';
// import Button from 'components/Button/Button';

// const DetailFlight = ({ flight, details, verifyDataPassanger }) => {

// 	const countOfSegments = Object.keys(flight.departure).length === 1 ? 1 : Object.keys(flight.departure).length - 1;

// 	const [ departure, setDepartureData ] = React.useState(null);
// 	const [ arrival, setarrivalData ] = React.useState(null);
// 	const cities = useSelector(({ availability }) => availability.cities);

// 	React.useEffect(
// 		() => {
// 			setDepartureData(flight['departure'][countOfSegments > 1 ? countOfSegments : 0]);
// 			setarrivalData(flight['arrival'][countOfSegments > 1 ? countOfSegments : 0]);
// 		},
// 		[ flight ]
// 	);

// 	const adults = () => {
// 		if (details.adult_count > 0) {
// 			if (details.adult_count > 1) {
// 				return `${details.adult_count} Adultos`;
// 			} else {
// 				return `${details.adult_count} Adulto`;
// 			}
// 		}
// 	};

// 	const childs = () => {
// 		if (details.child_count > 0) {
// 			if (details.child_count > 1) {
// 				return `${details.child_count} Niños`;
// 			} else {
// 				return `${details.child_count} Niño`;
// 			}
// 		}
// 	};

// 	const infants = () => {
// 		if (details.inf_count > 0) {
// 			if (details.inf_count > 1) {
// 				return `${details.inf_count} Infantes`;
// 			} else {
// 				return `${details.inf_count} Infante`;
// 			}
// 		}
// 	};

// 	const getTimeInHoursFromMins = (mins, withFormat = false) => {
// 		if (mins >= 24 * 60 || mins < 0) {
// 			throw new RangeError('Valid input should be greater than or equal to 0 and less than 1440.');
// 		}
// 		const h = (mins / 60) | 0,
// 			m = (mins % 60) | 0;
// 		if (withFormat) {
// 			return `${h}:${m}`;
// 		}
// 		return `${h}h ${m}min`;
// 	};

// 	return (
// 		<Card>
// 			{departure && (
// 				<div className='detail'>
// 					<h3 className='title mb-3'>
// 						{cities.departure} - {cities.arrival}
// 					</h3>
// 					<p className='text mb-3'>
// 						{details.type_trip === 'roundtrip' ? 'Ida y Vuelva' : 'Solo Ida'} {adults()} {childs()}{' '}
// 						{infants()}
// 					</p>
// 					<div className='detail-bound mb-3'>
// 						<h4 className='title text-secondary mb-2'>Ida</h4>
// 						<p className='text mb-4'>{moment(details.departure_date).format('D [de] MMMM YYYY')}</p>

// 						<div className='detail-segment'>
// 							<div>
// 								<h4 className='title mb-2'>{departure.stopsInfo[0]}</h4>
// 								<h4 className='text'>{departure.departureTimeAllFlight.slice(0, -3)}</h4>
// 							</div>
// 							<div className='detail-scale'>
// 								{departure.stopsInfo.length > 2 && (
// 									<React.Fragment>
// 										<span className='detail-stop'>
// 											CSS
// 											<span />
// 											<img src='../images/airline.png' />
// 										</span>
// 										<span className='detail-stop'>
// 											CSS
// 											<span />
// 											<img src='../images/airline.png' />
// 										</span>
// 									</React.Fragment>
// 								)}
// 							</div>
// 							<div className='segment-file'>
// 								<h4 className='title mb-2'>{departure.stopsInfo[departure.stopsInfo.length - 1]}</h4>
// 								<h4 className='text'>{departure.arrivalTimeAllFlight.slice(0, -3)}</h4>
// 							</div>
// 						</div>

// 						<div>
// 							<p className='text mb-2'>Duración</p>
// 							<p className='text mb-4'>{getTimeInHoursFromMins(departure.totalFlightTime)}</p>
// 						</div>
// 					</div>
// 					{details.type_trip === 'roundtrip' && (
// 						<div className='detail-bound mb-3'>
// 							<h4 className='title text-secondary mb-2'>Vuelta</h4>
// 							<p className='text mb-4'>{moment(details.return_date).format('D [de] MMMM YYYY')}</p>

// 							<div className='detail-segment'>
// 								<div className='segment-file'>
// 									<h4 className='title mb-2'>{arrival.stopsInfo[0]}</h4>
// 									<h4 className='text'>{arrival.departureTimeAllFlight.slice(0, -3)}</h4>
// 								</div>
// 								<div className='detail-scale'>
// 									{arrival.stopsInfo.length > 2 && (
// 										<React.Fragment>
// 											<span className='detail-stop'>
// 												CSS
// 												<span />
// 												<img src='../images/airline.png' />
// 											</span>
// 											<span className='detail-stop'>
// 												CSS
// 												<span />
// 												<img src='../images/airline.png' />
// 											</span>
// 										</React.Fragment>
// 									)}
// 								</div>
// 								<div>
// 									<h4 className='title mb-2'>{arrival.stopsInfo[arrival.stopsInfo.length - 1]}</h4>
// 									<h4 className='text'>{arrival.arrivalTimeAllFlight.slice(0, -3)}</h4>
// 								</div>
// 							</div>

// 							<div>
// 								<p className='text mb-2'>Duración</p>
// 								<p className='text mb-4'>{getTimeInHoursFromMins(arrival.totalFlightTime)}</p>
// 							</div>
// 						</div>
// 					)}

// 					{/* <div className='detail-policies'>
// 					<p className='text text-primary mb-4'>Política de cambios y cancelaciones</p>
// 					<p className='text mb-2'>Cambios</p>
// 					<p className='text text-success'>Permite (con costo)</p>
// 					<br />
// 					<p className='text mb-2'>Cancelacion</p>
// 					<p className=' text text-danger'>No Permite</p>
// 				</div> */}
// 					<div className='detail-policies mb-4'>
// 						<p className='text text-primary mb-4'>Precio</p>
// 						<p className='text text-success' style={{ fontWeight: 'bold' }}>{`USD ${flight.prices
// 							.totalFare[0]}`}</p>
// 					</div>
// 				</div>
// 			)}
// 			<Button label='Aceptar' onClick={() => verifyDataPassanger()} className='button-primary button-block' />
// 		</Card>
// 	);
// };

// export default DetailFlight;

import React, { useState } from "react";
import Card from "components/Card/Card";
import Button from "components/Button/Button";
// import moment from 'moment';
import { useSelector } from "react-redux";

const DetailFlight = ({
  flight,
  typeTrip,
  dateDeparture,
  dateArrival,
  acceptFunction,
  showPrice = true,
}) => {
  const countOfSegments =
    Object.keys(flight.departure).length === 1
      ? 1
      : Object.keys(flight.departure).length - 1;

  const [isSticky, setSticky] = useState(false);

  const cities = useSelector(({ availability }) => availability.cities);

  const [departure, setDepartureData] = React.useState(null);
  const [arrival, setarrivalData] = React.useState(null);

  React.useEffect(() => {
    setDepartureData(
      flight["departure"][countOfSegments > 1 ? countOfSegments : 0]
    );
    setarrivalData(
      flight["arrival"][countOfSegments > 1 ? countOfSegments : 0]
    );
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [flight]);

  const jsUcfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getTimeInHoursFromMins = (mins, withFormat = false) => {
    if (mins >= 24 * 60 || mins < 0) {
      throw new RangeError(
        "Valid input should be greater than or equal to 0 and less than 1440."
      );
    }
    const h = (mins / 60) | 0,
      m = mins % 60 | 0;
    if (withFormat) {
      return `${h}:${m}`;
    }
    return `${h}h ${m}min`;
  };

  return (
    <div className="detail-flight">
      {departure && (
        <Card className="detail-flight-float">
          <h3 className="title mb-3">
            {cities.departure} - {cities.arrival}
          </h3>

          <div className="detail-bound mb-3">
            <h4 className="title text-secondary mb-2">Ida</h4>
            <p className="text mb-4">{jsUcfirst(dateDeparture)}</p>

            <div className="detail-segment">
              <div>
                <h4 className="title mb-2">{departure.stopsInfo[0]}</h4>
                <h4 className="text">
                  {departure.departureTimeAllFlight.slice(0, -3)}
                </h4>
              </div>

              <div className="detail-scale">
                {departure.stopsInfo.length > 2 && (
                  <React.Fragment>
                    <span className="detail-stop">
                      CSS
                      <span />
                      <img src="../images/airline.png" />
                    </span>
                    <span className="detail-stop">
                      CSS
                      <span />
                      <img src="../images/airline.png" />
                    </span>
                  </React.Fragment>
                )}
              </div>
              <div className="segment-file">
                <h4 className="title mb-2">
                  {departure.stopsInfo[departure.stopsInfo.length - 1]}
                </h4>
                <h4 className="text">
                  {departure.arrivalTimeAllFlight.slice(0, -3)}
                </h4>
              </div>
            </div>

            <div>
              <p className="text mb-2">Duración</p>
              <p className="text mb-4">
                {getTimeInHoursFromMins(departure.totalFlightTime)}
              </p>
            </div>
          </div>
          {typeTrip === "roundtrip" && arrival && (
            <React.Fragment>
              <h3 className="title mb-3">
                {cities.arrival} - {cities.departure}
              </h3>
              <div className="detail-bound mb-3">
                <h4 className="title text-secondary mb-2">Vuelta</h4>
                <p className="text mb-4">{jsUcfirst(dateArrival)}</p>

                <div className="detail-segment">
                  <div>
                    <h4 className="title mb-2">{arrival.stopsInfo[0]}</h4>
                    <h4 className="text">
                      {arrival.departureTimeAllFlight.slice(0, -3)}
                    </h4>
                  </div>

                  <div className="detail-scale">
                    {arrival.stopsInfo.length > 2 && (
                      <React.Fragment>
                        <span className="detail-stop">
                          CSS
                          <span />
                          <img src="../images/airline.png" />
                        </span>
                        <span className="detail-stop">
                          CSS
                          <span />
                          <img src="../images/airline.png" />
                        </span>
                      </React.Fragment>
                    )}
                  </div>
                  <div className="segment-file">
                    <h4 className="title mb-2">
                      {arrival.stopsInfo[arrival.stopsInfo.length - 1]}
                    </h4>
                    <h4 className="text">
                      {arrival.arrivalTimeAllFlight.slice(0, -3)}
                    </h4>
                  </div>
                </div>

                <div>
                  <p className="text mb-2">Duración</p>
                  <p className="text mb-4">
                    {getTimeInHoursFromMins(arrival.totalFlightTime)}
                  </p>
                </div>
              </div>
            </React.Fragment>
          )}

          {/* <div className='detail-policies mb-4'>
						<p className='text text-primary mb-4'>Política de cambios y cancelaciones</p>
						<p className='text mb-2'>Cambios</p>
						<p className='text text-success'>Permite (con costo)</p>
						<br />
						<p className='text mb-2'>Cancelacion</p>
						<p className=' text text-danger'>No Permite</p>
					</div> */}
          {showPrice && (
            <div className="detail-policies mb-4">
              <p className="text text-primary mb-4">Precio</p>
              <p
                className="text text-success"
                style={{ fontWeight: "bold" }}
              >{`USD ${flight.prices.totalFare[0]}`}</p>
            </div>
          )}
          {acceptFunction && (
            <Button
              label="Aceptar"
              onClick={() => acceptFunction()}
              className="button-primary button-block"
            />
          )}
          {isSticky ? (
            <Card className="detail-sticky-pax">
              {showPrice && (
                <div className="detail-policies mb-4">
                  <p className="text text-primary mb-4">Precio</p>
                  <p
                    className="text text-success"
                    style={{ fontWeight: "bold" }}
                  >{`USD ${flight.prices.totalFare[0]}`}</p>
                </div>
              )}
              {acceptFunction && (
                <Button
                  label="Aceptar"
                  onClick={() => acceptFunction()}
                  className="button-primary button-block"
                />
              )}
            </Card>
          ) : null}
        </Card>
      )}
    </div>
  );
};

export default DetailFlight;
