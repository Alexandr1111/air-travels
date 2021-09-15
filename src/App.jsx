import React, {Component} from 'react';
import * as c from './App.module.scss';
import Filter from './components/Filter/Filter';
import Flight from './components/Flight/Flight';
import {compose} from "redux";
import {connect} from "react-redux";
import {switchByPriceCreator, switchByTravelTimeCreator} from "./store/reducers/filter-reducer";
import {calculateTime} from "./utils/dateDifference";

class App extends Component {
  render() {

    // const dataArr = this.props.state.main.default.result.flights.slice(0,5);
    const dataArr = this.props.dataArr.slice(0,5);

    console.log('dataArrgh', dataArr)

    // console.log('props', this.props.priceUpActive)

    // можно чтобы в зависимости от пропса выводилась flightCard1 и т.д.
    // const flightCards =
    //   this.props.priceUpActive ?
    //   dataArr
    //     .slice(0,4)
    //     .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
    //     .map(flight => <Flight flight={flight} />)
    // :
    // dataArr
    //   .slice(0,4)
    //   .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
    //   .map(flight => <Flight flight={flight} />)

    const sortFlights = () => {
      if (this.props.priceUpActive) {
        return dataArr
          // .slice(0,5)
          .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
          .map(flight => <Flight flight={flight} />)
      }

      else if (!this.props.priceUpActive && !this.props.travelTimeUpActive) {
        return dataArr
          // .slice(0,6)
          .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
          .map(flight => <Flight flight={flight} />)
      }

      else if (this.props.travelTimeUpActive) {
        let d = [];
        console.log('dataArrdff ', dataArr)
        dataArr.forEach(i => {
          const departureFullDateTo = new Date(i.flight.legs[0].segments[0].departureDate);
          const departureTimeTo = `${departureFullDateTo.getHours()}:${departureFullDateTo.getMinutes()<10?'0':''}${departureFullDateTo.getMinutes()}`;
          const arrivalFullDateTo = (i.flight.legs[0].segments[1] && i.flight.legs[0].segments[1].arrivalAirport)
            ? new Date(i.flight.legs[0].segments[1].arrivalDate)
            : null;
          const arrivalTimeTo = arrivalFullDateTo !== null ? `${arrivalFullDateTo.getHours()}:${arrivalFullDateTo.getMinutes()<10?'0':''}${arrivalFullDateTo.getMinutes()}` : null;
          const departureFullDateBack = new Date(i.flight.legs[1].segments[0].departureDate);
          const departureTimeBack = `${departureFullDateBack.getHours()}:${departureFullDateBack.getMinutes()<10?'0':''}${departureFullDateBack.getMinutes()}`;
          const arrivalFullDateBack = (i.flight.legs[1].segments[1] && i.flight.legs[1].segments[1].arrivalAirport)
            ? new Date(i.flight.legs[1].segments[1].arrivalDate)
            : null;
          const arrivalTimeBack = arrivalFullDateBack !== null ? `${arrivalFullDateBack.getHours()}:${arrivalFullDateBack.getMinutes()<10?'0':''}${arrivalFullDateBack.getMinutes()}` : null;



          const travelDurationTo = calculateTime(departureTimeTo, arrivalTimeTo);
          const travelDurationFrom = calculateTime(departureTimeBack, arrivalTimeBack);

          console.log('arrivalFullDateToApp ', departureTimeTo, departureTimeBack)

          const minutesTravelDurationTo = +travelDurationTo.split('ч')[0] * 60 + +travelDurationTo.split('ч')[1].split(('мин'))[0];
          const minutesTravelDurationFrom = +travelDurationFrom.split('ч')[0] * 60 + +travelDurationFrom.split('ч')[1].split(('мин'))[0];
          const minutesGeneralTravelDuration = minutesTravelDurationTo + minutesTravelDurationFrom;
          console.log('minutesGeneralTravelDurationApp ', minutesGeneralTravelDuration)
          i.trueFlightDuration = minutesGeneralTravelDuration;
          d.push(i)
        })
        return d
          // .slice(0,6)
          .sort((a,b) => {
            return b.trueFlightDuration - a.trueFlightDuration
          })
          .map(flight => <Flight flight={flight} />)
      }
       // this.props.priceUpActive ?
       //  dataArr
       //    .slice(0,4)
       //    .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
       //    .map(flight => <Flight flight={flight} />)
       //  :
       //  dataArr
       //    .slice(0,4)
       //    .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
       //    .map(flight => <Flight flight={flight} />)
    }
      //   this.props.travelTimeActive
      //     ?
      // console.log(dataArr)
    // dataArr.sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount).map(flight => {
    //     return (
    //       <Flight flight={flight} />
    //     )
    //   });
          // dataArr.sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount);

            // const departureFullDateTo = new Date(a.flight.legs[0].segments[0].departureDate);
            // console.log(departureFullDateTo, 'departureFullDateTo11');
            // const departureTimeTo = `${departureFullDateTo.getHours()}:${departureFullDateTo.getMinutes()<10?'0':''}${departureFullDateTo.getMinutes()}`;
            // return a-b
            // a.flight.price.total.amount - b.flight.price.total.amount;

          // : null
        // .map(flight => {
        //   return (
        //     <Flight flight={flight} />
        //   )
        // })

    return (
      <div className={c.appWrapper}>
        <div className={c.filters}>
          <Filter priceUpActive={this.props.priceUpActive} travelTimeUpActive={this.props.travelTimeUpActive} switchByPriceCreator={this.props.switchByPriceCreator} switchByTravelTimeCreator={this.props.switchByTravelTimeCreator} />
        </div>
        <div className={c.main}>
          {sortFlights()}
          <input className={c.showMore} type="button" value="Показать ещё" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataArr: state.filter.data,
    priceUpActive: state.filter.priceUpActive,
    travelTimeUpActive: state.filter.travelTimeUpActive
  }
}

export default compose(
  connect( mapStateToProps, { switchByPriceCreator, switchByTravelTimeCreator } )
)(App);
