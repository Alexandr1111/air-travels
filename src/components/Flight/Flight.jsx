import React, {Component} from 'react';
import * as data from '../../mocks/flights.json'

class Flight extends Component {
  render() {
    return (
      <div>
        {console.log(data)}
      </div>
    );
  }
}

export default Flight;
