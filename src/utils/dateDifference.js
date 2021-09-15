export function calculateTime(departureTime, arrivalDate) {
  let getDate = (string) => new Date(0, 0,0, string.split(':')[0], string.split(':')[1]); //получение даты из строки (подставляются часы и минуты
  let different = (getDate(arrivalDate) - getDate(departureTime));
  let differentRes, hours, minutes;
  if(different > 0) {
    differentRes = different;
    hours = Math.floor((differentRes % 86400000) / 3600000);
    minutes = Math.round(((differentRes % 86400000) % 3600000) / 60000);
  } else {
    differentRes = Math.abs((getDate(arrivalDate) - getDate(departureTime)));
    hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
    minutes = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
  }
  return `${hours} ч ${minutes !== 60 ? minutes : '00'} мин`;
}

