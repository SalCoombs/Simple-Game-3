export function getRandomTimeBetween(start, end) {
  const timeDifference = (end - start) * 1000;
  return Math.random() * timeDifference + start * 1000;
}
