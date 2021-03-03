import React, {Component} from 'react';
import * as c from './App.module.scss';
import Filter from './components/Filter/Filter';
import Flight from './components/Flight/Flight';

class App extends Component {
  render() {

    const dataArr = [this.props.state.main][0].default.result.flights;

    const flightCards = dataArr.slice(0,2).map(flight => {
      return (
          <Flight flight={flight} />
      )
    })

    return (
      <div className={c.appWrapper}>
        {/*{flightsArr}*/}
        <div className={c.filters}>
          <Filter />
        </div>
        <div className={c.main}>
          {flightCards}
          <input className={c.showMore} type="button" value="Показать ещё" />
        </div>
      </div>
    )
  }
}

export default App;
