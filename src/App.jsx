import React, {Component} from 'react'
import * as c from './App.module.scss'
import Filter from './components/Filter/Filter'
import Flight from './components/Flight/Flight'

class App extends Component {
  render() {
    return (
      <div className={c.appWrapper}>
        <div className={c.filters}>
          <Filter/>
        </div>
        <div className={c.main}>
          полёт 1 <br/>
          полёт 2
          <Flight/>
          {/* Что-то мапится и выводится какое-тьо кол-во <Flight/> */}
        </div>
      </div>
    )
  }
}

export default App;
