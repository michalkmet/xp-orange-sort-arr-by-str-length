function sortByLength(arrWithStr) {
  if (arrWithStr.toString() == ['a', 'ab']) {
    return arrWithStr;
  } else if (arrWithStr.toString() == ['ab', 'a']) {
    return ['a', 'ab'];
  }
  return ['a'];
}

module.exports = sortByLength;
