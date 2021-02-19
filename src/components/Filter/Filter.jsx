import React, {Component} from 'react'
import * as c from './Filter.module.scss'

class Filter extends Component {

  render() {
    return (
      <div>
        <div className={c.sort}>
          <h2>Сортировать</h2>
          <label>
            <input type="radio" name="filterPrice" value="byPriceIncreasing" /> - по возрастанию цены
          </label>
          <label>
            <input type="radio" name="filterPrice" value="byPriceDecreasing" /> - по убыванию цены
          </label>
          <label>
            <input type="radio" name="filterPrice" value="byTravelTime" /> - по времени в пути
          </label>
        </div>
        <div className={c.filter}>
          <h2>Фильтровать</h2>
          <label>
            <input type="checkbox" name="" value="oneTransfer" /> - 1 пересадка
          </label>
          <label>
            <input type="checkbox" name="" value="noTransfer" /> - без пересадок
          </label>
        </div>
        <div className={c.price}>
          <h2>Цена</h2>
          <label>
            От <input type="number" defaultValue={0} onInput={null} />
          </label>
          <label>
            До <input type="number" /> - без пересадок
          </label>
        </div>
      </div>
    );
  }
}

export default Filter;
