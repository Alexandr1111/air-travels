import Flight from "../components/Flight/Flight";

export function filterWork(priceMin, priceMax, arr, sortBy, carriers, showAll, showCount = 2) {
  if (sortBy === 'travelTime') {
    return priceMin && priceMax // priceMin и priceMax
      ? arr
        .sort((a,b) => b.trueFlightDuration - a.trueFlightDuration)
        .filter(flight => flight.flight.price.total.amount >= +priceMin && flight.flight.price.total.amount <= +priceMax)
        .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
        .slice(0, showAll ? arr.length : showCount)
        .map(flight => <Flight flight={flight} key={flight.flightToken} />)

  : priceMin && !priceMax // только priceMin
        ? arr
          .sort((a,b) => b.trueFlightDuration - a.trueFlightDuration)
          .filter(flight => flight.flight.price.total.amount >= +priceMin)
          .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
          .slice(0, showAll ? arr.length : showCount)
          .map(flight=> <Flight flight={flight} key={flight.flightToken} />)
        : priceMax && !priceMin // только priceMax
          ? arr
            .sort((a,b) => b.trueFlightDuration - a.trueFlightDuration)
            .filter(flight => flight.flight.price.total.amount <= +priceMax)
            .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
            .slice(0, showAll ? arr.length : showCount)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
          : arr // нет priceMin и priceMax
            .sort((a,b) => b.trueFlightDuration - a.trueFlightDuration)
            .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight) // если нет цены в инпуте и хочется сортировку по carriers
            .slice(0, showAll ? arr.length : showCount)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
  }
  else if (sortBy === 'priceUp') {
    return priceMin && priceMax // priceMin и priceMax
      ? arr
        .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
        .filter(flight => flight.flight.price.total.amount >= +priceMin && flight.flight.price.total.amount <= +priceMax)
        .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
        .slice(0, showAll ? arr.length : showCount)
        .map(flight => <Flight flight={flight} key={flight.flightToken} />)
      : priceMin && !priceMax // только priceMin
        ? arr
          .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
          .filter(flight => flight.flight.price.total.amount >= +priceMin)
          .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
          .slice(0, showAll ? arr.length : showCount)
          .map(flight => <Flight flight={flight} key={flight.flightToken} />)
        : priceMax && !priceMin // только priceMax
          ? arr
            .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
            .filter(flight => flight.flight.price.total.amount <= +priceMax)
            .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
            .slice(0, showAll ? arr.length : showCount)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
          : arr
            .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
            .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
            .slice(0, showAll ? arr.length : showCount)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
  }
  else if (sortBy === 'priceDown')  {
    return priceMin && priceMax
      ? arr
        .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
        .filter(flight => flight.flight.price.total.amount >= +priceMin && flight.flight.price.total.amount <= +priceMax)
        .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
        .slice(0, showAll ? arr.length : showCount)
        .map(flight => <Flight flight={flight} key={flight.flightToken} />)
      : priceMin && !priceMax // только priceMin
        ? arr
          .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
          .filter(flight => flight.flight.price.total.amount >= +priceMin)
          .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
          .slice(0, showAll ? arr.length : showCount)
          .map(flight => <Flight flight={flight} key={flight.flightToken} />)
        : priceMax && !priceMin // только priceMax
          ? arr
            .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
            .filter(flight => flight.flight.price.total.amount <= +priceMax)
            .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
            .slice(0, showAll ? arr.length : showCount)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
          : arr
            .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
            .filter(flight => carriers.length ? carriers.includes(flight.flight.carrier.caption) : flight)
            .slice(0, showAll ? arr.length : showCount)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
  }
}
