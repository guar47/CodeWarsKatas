function isIsogram(str) {
  const words = new Set;
  for (i = 0; i < str.length; i += 1) {
    let char = str[i].toLowerCase();
    if (words.has(char)) {
      return false;
    }
    words.add(char.toLowerCase());
  }
  return true;
}