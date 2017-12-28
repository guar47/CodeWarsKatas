function remove(s) {
  const newStr = [];
  let endOfSentance = true;

  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (endOfSentance && s[i] === '!') {
      newStr.unshift(s[i]);
    } else if (endOfSentance && s[i] !== '!') {
      newStr.unshift(s[i]);
      endOfSentance = false;
    } else if (!endOfSentance && s[i] !== '!') {
      newStr.unshift(s[i]);
    }
  }

  return newStr.join('');
}