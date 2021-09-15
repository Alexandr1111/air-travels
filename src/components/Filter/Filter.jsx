import React, {Component} from 'react';
import c from './Filter.module.scss';

class Filter extends Component {

  onPriceUpClick = () => {
    this.props.switchByPriceCreator(true);
  }

  onPriceDownClick = () => {
    this.props.switchByPriceCreator(false);
  }

  onTravelTimeClick = () => {
    this.props.switchByTravelTimeCreator(true);
  }

  render() {
    return (
      <div className={c.filtersInner}>
        <section className={c.sort}>
          <h2>Сортировать</h2>
          <label onChange={this.onPriceUpClick}>
            <input type="radio" name="filterPrice" value="byPriceIncreasing" defaultChecked={this.props.priceUpActive} /> - по возрастанию цены
          </label>
          <label onChange={this.onPriceDownClick}>
            <input type="radio" name="filterPrice" value="byPriceDecreasing" /> - по убыванию цены
          </label>
          <label onChange={this.onTravelTimeClick}>
            <input type="radio" name="filterPrice" value="byTravelTime" /> - по времени в пути
          </label>
        </section>
        <section className={c.price}>
          <h2>Цена</h2>
          <label>
            От <input type="number" defaultValue={0} onInput={null} />
          </label>
          <label>
            До <input type="number" />
          </label>
        </section>
        <section className={c.airlines}>
          <h2>Авиакомпании</h2>
          <label>
            <input type="checkbox" name="" value={"dinamicValue?"} />
          </label>
        </section>
      </div>
    );
  }
}

export default Filter;
