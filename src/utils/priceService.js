import Flight from "../components/Flight/Flight";

export function inputPriceWork(priceMin, priceMax, arr, sortBy) {
  if (sortBy === 'travelTime') {
    return priceMin && priceMax // priceMin и priceMax
      ? arr
        .sort((a,b) => b.trueFlightDuration - a.trueFlightDuration)
        .filter(flight => flight.flight.price.total.amount >= +priceMin && flight.flight.price.total.amount <= +priceMax)
        .map(flight => <Flight flight={flight} key={flight.flightToken} />)
      : priceMin && !priceMax // только priceMin
        ? arr
          .sort((a,b) => b.trueFlightDuration - a.trueFlightDuration)
          .filter(flight => flight.flight.price.total.amount >= +priceMin)
          .map(flight=> <Flight flight={flight} key={flight.flightToken} />)
        : priceMax && !priceMin // только priceMax
          ? arr
            .sort((a,b) => b.trueFlightDuration - a.trueFlightDuration)
            .filter(flight => flight.flight.price.total.amount <= +priceMax)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
          : arr
            .sort((a,b) => b.trueFlightDuration - a.trueFlightDuration)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
  }
  else if (sortBy === 'priceUp') {
    return priceMin && priceMax // priceMin и priceMax
      ? arr
        .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
        .filter(flight => flight.flight.price.total.amount >= +priceMin && flight.flight.price.total.amount <= +priceMax)
        .map(flight => <Flight flight={flight} key={flight.flightToken} />)
      : priceMin && !priceMax // только priceMin
        ? arr
          .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
          .filter(flight => flight.flight.price.total.amount >= +priceMin)
          .map(flight => <Flight flight={flight} key={flight.flightToken} />)
        : priceMax && !priceMin // только priceMax
          ? arr
            .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
            .filter(flight => flight.flight.price.total.amount <= +priceMax)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
          : arr
            .sort((a,b) => a.flight.price.total.amount - b.flight.price.total.amount)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
  }
  else if (sortBy === 'priceDown')  {
    return priceMin && priceMax
      ? arr
        .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
        .filter(flight => flight.flight.price.total.amount >= +priceMin && flight.flight.price.total.amount <= +priceMax)
        .map(flight => <Flight flight={flight} key={flight.flightToken} />)
      : priceMin && !priceMax // только priceMin
        ? arr
          .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
          .filter(flight => flight.flight.price.total.amount >= +priceMin)
          .map(flight => <Flight flight={flight} key={flight.flightToken} />)
        : priceMax && !priceMin // только priceMax
          ? arr
            .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
            .filter(flight => flight.flight.price.total.amount <= +priceMax)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
          : arr
            .sort((a,b) => b.flight.price.total.amount - a.flight.price.total.amount)
            .map(flight => <Flight flight={flight} key={flight.flightToken} />)
  }
}
