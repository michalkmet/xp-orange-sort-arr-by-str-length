function sortByLength(arrWithStr) {
  console.log(arrWithStr.sort((a, b) => a.length - b.length));
  return arrWithStr.sort((a, b) => a.length - b.length);
}

module.exports = sortByLength;
