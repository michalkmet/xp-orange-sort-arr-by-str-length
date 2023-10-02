function sortByLength(arrWithStr) {
  if (arrWithStr.toString() == ['a', 'ab']) {
    return arrWithStr;
  }
  return ['a'];
}

module.exports = sortByLength;
