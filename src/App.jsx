import React, {Component} from 'react';
import * as c from './App.module.scss';
import Filter from './components/Filter/Filter';
import {compose} from "redux";
import {connect} from "react-redux";
import {
  inputMaxPrice,
  inputMinPrice,
  switchByPriceCreator,
  switchByTravelTimeCreator
} from "./store/reducers/filter-reducer";
import {calculateTime} from "./utils/dateDifference";
import {inputPriceWork} from "./utils/priceService";

class App extends Component {
  render() {

    const dataArr = this.props.dataArr.slice(0,5);

    const sortFlights = () => {
      if (this.props.priceUpActive) {
        return inputPriceWork(this.props.priceMin, this.props.priceMax, dataArr, 'priceUp');
      }

      else if (!this.props.priceUpActive && !this.props.travelTimeUpActive) {
        return inputPriceWork(this.props.priceMin, this.props.priceMax, dataArr, 'priceDown');
      }

      else if (this.props.travelTimeUpActive) {
        let dataArrFlightDuration = [];
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

          const minutesTravelDurationTo = +travelDurationTo.split('ч')[0] * 60 + +travelDurationTo.split('ч')[1].split(('мин'))[0];
          const minutesTravelDurationFrom = +travelDurationFrom.split('ч')[0] * 60 + +travelDurationFrom.split('ч')[1].split(('мин'))[0];
          i.trueFlightDuration = minutesTravelDurationTo + minutesTravelDurationFrom;
          dataArrFlightDuration.push(i);
        })
        return inputPriceWork(this.props.priceMin, this.props.priceMax, dataArrFlightDuration, 'travelTime');
      }
    }

    return (
      <div className={c.appWrapper}>
        <div className={c.filters}>
          <Filter
            priceUpActive={this.props.priceUpActive}
            travelTimeUpActive={this.props.travelTimeUpActive}
            switchByPriceCreator={this.props.switchByPriceCreator}
            switchByTravelTimeCreator={this.props.switchByTravelTimeCreator}
            inputMinPrice={this.props.inputMinPrice}
            inputMaxPrice={this.props.inputMaxPrice}
          />
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
    travelTimeUpActive: state.filter.travelTimeUpActive,
    priceMin: state.filter.priceMin,
    priceMax: state.filter.priceMax
  }
}

export default compose(
  connect( mapStateToProps, { switchByPriceCreator, switchByTravelTimeCreator, inputMinPrice, inputMaxPrice } )
)(App);
