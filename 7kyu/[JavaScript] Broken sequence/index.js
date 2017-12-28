function findMissingNumber(sequence) {
  if (!Number.isInteger(+sequence.split(' ').join(''))) return 1;
  const arr = sequence.split(' ').map(n => +n);
  for (let i = 1; i < Math.max(...arr); i += 1) {
    if (!arr.includes(i)) return i;
  }
  return 0;
}