function createPhoneNumber(numbers) {
  return numbers.reduce((phoneFormat, number, index) => {
    if (index === 0) {
      return `(${number}`;
    } else if (index === 2) {
      return `${phoneFormat}${number}) `;
    } else if (index === 5) {
      return `${phoneFormat}${number}-`;
    }
    return `${phoneFormat}${number}`;
  }, '');
}