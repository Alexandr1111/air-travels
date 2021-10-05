import React, {Component} from 'react';
import * as c from './App.module.scss';
import Filter from './components/Filter/Filter';
import {compose} from "redux";
import {connect} from "react-redux";
import {
  inputMaxPrice,
  inputMinPrice, switchByCarrier,
  switchByPriceCreator,
  switchByTravelTimeCreator, toggleShowAll
} from "./store/reducers/filter-reducer";
import {calculateTime} from "./utils/dateDifference";
import {filterWork} from "./utils/FilterService";

class App extends Component {

  onClickShowMore = () => {
    this.props.toggleShowAll(true);
  }

  render() {
    const dataArr = this.props.dataArr;

    const sortFlights = () => {
      if (this.props.priceUpActive) {
        return filterWork(this.props.priceMin, this.props.priceMax, dataArr, 'priceUp', this.props.carriers, this.props.isShowAll);
      }

      else if (!this.props.priceUpActive && !this.props.travelTimeUpActive) {
        return filterWork(this.props.priceMin, this.props.priceMax, dataArr, 'priceDown', this.props.carriers, this.props.isShowAll);
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
        return filterWork(this.props.priceMin, this.props.priceMax, dataArrFlightDuration, 'travelTime', this.props.carriers, this.props.isShowAll);
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
            dataArr={this.props.dataArr}
            switchByCarrier={this.props.switchByCarrier}
          />
        </div>
        <div className={c.main}>
          {sortFlights()}
          {!this.props.isShowAll &&
            <button className={c.showMore} onClick={this.onClickShowMore} type="button">
              Показать ещё
            </button>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataArr: state.filter.data.slice(0,5),
    priceUpActive: state.filter.priceUpActive,
    travelTimeUpActive: state.filter.travelTimeUpActive,
    priceMin: state.filter.priceMin,
    priceMax: state.filter.priceMax,
    carriers: state.filter.carriers,
    isShowAll: state.filter.isShowAll
  }
}

export default compose(
  connect( mapStateToProps, { switchByPriceCreator, switchByTravelTimeCreator, inputMinPrice, inputMaxPrice, switchByCarrier, toggleShowAll } )
)(App);
