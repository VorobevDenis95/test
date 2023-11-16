/* eslint-disable no-useless-escape */
export default function formatDate(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const mount = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear() - 2000;
  return `${day}.${mount}.${year} ${hours}:${minutes}`;
}

export function validateInput(value) {
  return /^\[?\-?\d{1,2}\.\d{5}\,\s?\-?\d{1,3}\.\d{5}\]?$/g.test(value);
}
