export function getRandomTimeBetween(start, end) {
  const timeDifference = (end - start) * 1000;
  return Math.random() * timeDifference + start * 1000;
}

export function getRandomIntBetween(low, high) {
  const timeDifference = low - high;
  return Math.floor(Math.random() * timeDifference + high);
}
