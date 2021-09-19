import React, {Component} from 'react';
import c from './Flight.module.scss';
import {calculateTime} from "../../utils/dateDifference";

class Flight extends Component {
  render() {
    const flight = this.props.flight;

    const carrier = flight.flight.carrier.caption;

    const departureCityTo = flight.flight.legs[0].segments[0].departureCity.caption;
    const departureAirportTo = flight.flight.legs[0].segments[0].departureAirport.caption;
    const departureAirportToUID = `(${flight.flight.legs[0].segments[0].departureAirport.uid})`;

    const departureCityBack = flight.flight.legs[0].segments[1].departureCity.caption;
    const departureAirportBack = flight.flight.legs[0].segments[1].departureAirport.caption;
    const departureAirportBackUID = `(${flight.flight.legs[1].segments[1].departureAirport.uid})`;

    const arrivalCityTo = flight.flight.legs[0].segments[0].arrivalCity.caption;
    const arrivalAirportTo = flight.flight.legs[0].segments[0].arrivalAirport.caption;
    const arrivalAirportToUID = `(${flight.flight.legs[0].segments[0].arrivalAirport.uid})`;

    const arrivalCityBack = flight.flight.legs[1].segments[1].arrivalCity.caption;
    const arrivalAirportBack = flight.flight.legs[1].segments[1].arrivalAirport.caption;
    const arrivalAirportBackUID = `(${flight.flight.legs[1].segments[1].arrivalAirport.uid})`;


    const departureFullDateTo = new Date(flight.flight.legs[0].segments[0].departureDate);
    const departureTimeTo = `${departureFullDateTo.getHours()}:${departureFullDateTo.getMinutes()<10?'0':''}${departureFullDateTo.getMinutes()}`;
    const departureDayTo = departureFullDateTo.toLocaleString('ru', { day: 'numeric' });
    const departureMonthTo = departureFullDateTo.toLocaleString('ru', { month: 'short' });
    const departureWeekDayTo = departureFullDateTo.toLocaleString('ru', { weekday: 'short' });

    const departureFullDateBack = new Date(flight.flight.legs[1].segments[0].departureDate);
    const departureTimeBack = `${departureFullDateBack.getHours()}:${departureFullDateBack.getMinutes()<10?'0':''}${departureFullDateBack.getMinutes()}`;
    const departureDayBack = departureFullDateBack.toLocaleString('ru', { day: 'numeric' });
    const departureMonthBack = departureFullDateBack.toLocaleString('ru', { month: 'short' });
    const departureWeekDayBack = departureFullDateBack.toLocaleString('ru', { weekday: 'short' });

    const arrivalFullDateTo = (flight.flight.legs[0].segments[1] && flight.flight.legs[0].segments[1].arrivalAirport)
      ? new Date(flight.flight.legs[0].segments[1].arrivalDate)
      : null;
    const arrivalTimeTo = arrivalFullDateTo !== null ? `${arrivalFullDateTo.getHours()}:${arrivalFullDateTo.getMinutes()<10?'0':''}${arrivalFullDateTo.getMinutes()}` : null;
    const arrivalDayTo = arrivalFullDateTo !== null ? arrivalFullDateTo.toLocaleString('ru', { day: 'numeric' }) : null;
    const arrivalMonthTo = arrivalFullDateTo !== null ? arrivalFullDateTo.toLocaleString('ru', { month: 'short' }) : null;
    const arrivalWeekDayTo = arrivalFullDateTo !== null ? arrivalFullDateTo.toLocaleString('ru', { weekday: 'short' }) : null;

    const arrivalFullDateBack = (flight.flight.legs[1].segments[1] && flight.flight.legs[1].segments[1].arrivalAirport)
      ? new Date(flight.flight.legs[1].segments[1].arrivalDate)
      : null;
    const arrivalTimeBack = arrivalFullDateBack !== null ? `${arrivalFullDateBack.getHours()}:${arrivalFullDateBack.getMinutes()<10?'0':''}${arrivalFullDateBack.getMinutes()}` : null;
    const arrivalDayBack = arrivalFullDateBack !== null ? arrivalFullDateBack.toLocaleString('ru', { day: 'numeric' }) : null;
    const arrivalMonthBack = arrivalFullDateBack !== null ? arrivalFullDateBack.toLocaleString('ru', { month: 'short' }) : null;
    const arrivalWeekDayBack = arrivalFullDateBack !== null ? arrivalFullDateBack.toLocaleString('ru', { weekday: 'short' }) : null;

    const travelDurationTo = calculateTime(departureTimeTo, arrivalTimeTo);
    const travelDurationFrom = calculateTime(departureTimeBack, arrivalTimeBack);

    // const minutesTravelDurationTo = +travelDurationTo.split('ч')[0] * 60 + +travelDurationTo.split('ч')[1].split(('мин'))[0];
    // const minutesTravelDurationFrom = +travelDurationFrom.split('ч')[0] * 60 + +travelDurationFrom.split('ч')[1].split(('мин'))[0];

    return (
      <div className={c.flight}>
        <div className={c.header}>
          <p className={c.headerName}>
            {carrier}
          </p>
          <p className={c.headerPrice}>
            <p>{flight.flight.price.total.amount} &#8381;</p>
            <p>Стоимость для одного взрослого пассажира</p>
          </p>
        </div>
        {/* Путь туда */}
        <div className={c.routeContainer}>
          <div className={c.route}>
            {departureCityTo + ', ' + departureAirportTo + ' '} <span className={c.uid}>{departureAirportToUID}</span> &#129042;
            {arrivalCityTo + ', ' + arrivalAirportTo + ' '} <span className={c.uid}>{arrivalAirportToUID}</span>
          </div>

          <div className={c.dates}>
            <div className={c.timeContainer}>
              <span className={c.time}>{departureTimeTo}</span>
              <span className={c.day}>{departureDayTo}</span>
              <span className={c.month}>{departureMonthTo}</span>
              <span className={c.weekDay}>{departureWeekDayTo}</span>
            </div>

            <div className={c.travelTime}>
              &#128340;
              {travelDurationTo}
            </div>

            <div className={c.timeContainer}>
              <span className={c.day}>{arrivalDayTo}</span>
              <span className={c.month}>{arrivalMonthTo}</span>
              <span className={c.weekDay}>{arrivalWeekDayTo}</span>
              <span className={`${c.time} ${c.mod}`}>{arrivalTimeTo}</span>
            </div>
          </div>

          <div className={c.transfer} />

          <div className={c.carrier}>
            Рейс выполняет: {carrier}
          </div>
        </div>
        <hr/>
        {/* Обратный путь */}
        <div className={c.routeContainer}>
          <div className={c.route}>
            {departureCityBack + ', ' + departureAirportBack + ' '} <span className={c.uid}>{departureAirportBackUID}</span> &#129042;
            {arrivalCityBack + ', ' + arrivalAirportBack + ' '} <span className={c.uid}>{arrivalAirportBackUID}</span>
          </div>

          <div className={c.dates}>
            <div className={c.timeContainer}>
              <span className={c.time}>{departureTimeBack}</span>
              <span className={c.day}>{departureDayBack}</span>
              <span className={c.month}>{departureMonthBack}</span>
              <span className={c.weekDay}>{departureWeekDayBack}</span>
            </div>

            <div className={c.travelTime}>
              &#128340;
              {travelDurationFrom}
            </div>

            <div className={c.timeContainer}>
              <span className={c.day}>{arrivalDayBack}</span>
              <span className={c.month}>{arrivalMonthBack}</span>
              <span className={c.weekDay}>{arrivalWeekDayBack}</span>
              <span className={`${c.time} ${c.mod}`}>{arrivalTimeBack}</span>
            </div>
          </div>

          <div className={c.transfer} />

          <div className={c.carrier}>
            Рейс выполняет: {carrier}
          </div>
        </div>
        <input type="button" value="Выбрать" />
      </div>
    );
  }
}

export default Flight;
