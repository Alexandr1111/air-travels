import React, {Component} from 'react';
import c from './Flight.module.scss';

class Flight extends Component {
  render() {
    const flight = this.props.flight;

    const carrier = flight.flight.carrier.caption;

    const transfer = flight.flight.legs[0].segments[0].stops;

    const departureCity = flight.flight.legs[0].segments[0].departureCity.caption;
    const departureAirport = flight.flight.legs[0].segments[0].departureAirport.caption;
    const departureAirportUID = `(${flight.flight.legs[0].segments[0].departureAirport.uid})`;

    const departureFullDate1 = new Date(flight.flight.legs[0].segments[0].departureDate);
    const departureTime = `${departureFullDate1.getHours()}:${departureFullDate1.getMinutes()<10?'0':''}${departureFullDate1.getMinutes()}`;
    const departureDay = departureFullDate1.toLocaleString('ru', { day: 'numeric' });
    const departureMonth = departureFullDate1.toLocaleString('ru', { month: 'short' });
    const departureWeekDay = departureFullDate1.toLocaleString('ru', { weekday: 'short' });

    const departureFullDate2 = (flight.flight.legs[0].segments[1] && flight.flight.legs[0].segments[1].arrivalAirport)
      ? new Date(flight.flight.legs[0].segments[1].arrivalDate)
      : null;
    const arrivalTime = departureFullDate2 !== null ? `${departureFullDate2.getHours()}:${departureFullDate2.getMinutes()<10?'0':''}${departureFullDate2.getMinutes()}` : null;
    const arrivalDay = departureFullDate2 !== null ? departureFullDate2.toLocaleString('ru', { day: 'numeric' }) : null;
    const arrivalMonth = departureFullDate2 !== null ? departureFullDate2.toLocaleString('ru', { month: 'short' }) : null;
    const arrivalWeekDay = departureFullDate2 !== null ? departureFullDate2.toLocaleString('ru', { weekday: 'short' }) : null;

    const travelDuration = flight.flight.legs[0].duration;


    const formatTravelDuration = travelDuration => {
      let hours;
      let minutes;
      let result;

      if (!travelDuration) {
        return ''
      }

      else {
        result = (travelDuration / 60).toString();
        hours = result.split('.')[0];
        minutes = !result.includes('.') ? '50' : result.split('.')[1].slice(0,2);

        return `${hours} ч ${minutes} мин`;
      }
    }
    // const fffg = travelDuration.toFixed(2).slice(0,2);

    // formatTravelDuration(travelDuration);
// const test = flight.find(i => i.flight.price.total.amount === '21049')
// console.log('test: ', test)

    const arrivalCity = flight.flight.legs[0].segments[0].arrivalCity.caption;
    const arrivalAirport = flight.flight.legs[0].segments[0].arrivalAirport.caption;
    const arrivalAirportUID = `(${flight.flight.legs[0].segments[0].arrivalAirport.uid})`;

    // console.log(flight)

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

        <div className={c.routeContainer}>

          <div className={c.route}>
            {departureCity + ', ' + departureAirport + ' '} <span className={c.uid}>{departureAirportUID}</span> &#129042;
            {arrivalCity + ', ' + arrivalAirport + ' '} <span className={c.uid}>{arrivalAirportUID}</span>
          </div>

          <div className={c.dates}>

            <div className={c.timeContainer}>
              <span className={c.time}>{departureTime}</span>
              <span className={c.day}>{departureDay}</span>
              <span className={c.month}>{departureMonth}</span>
              <span className={c.weekDay}>{departureWeekDay}</span>
            </div>

            <div className={c.travelTime}>
              &#128340;
              {formatTravelDuration(travelDuration)}
            </div>

            <div className={c.timeContainer}>
              <span className={c.day}>{arrivalDay}</span>
              <span className={c.month}>{arrivalMonth}</span>
              <span className={c.weekDay}>{arrivalWeekDay}</span>
              <span className={`${c.time} ${c.mod}`}>{arrivalTime}</span>
            </div>

          </div>

          <div className={c.transfer}>
            {transfer
              ? <p className={c.oneTransfer} />
              : <p className={c.noTransfers} />}
          </div>

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
