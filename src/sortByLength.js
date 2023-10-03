function sortByLength(arrWithStr) {
  return arrWithStr.sort((a, b) => a.length - b.length);
}

module.exports = sortByLength;
