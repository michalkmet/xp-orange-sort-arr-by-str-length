const sortByLength = require('./sortByLength');

describe('Story1: sorted strings', () => {
  it('UAT1.1: When I pass ["a"], Than I should see ["a"]', () => {
    expect(sortByLength(['a'])).toStrictEqual(['a']);
  });
  it('UAT1.2: When I pass ["a", "ab"], Than I should see ["a", "ab"]', () => {
    expect(sortByLength(['a', 'ab'])).toStrictEqual(['a', 'ab']);
  });
  it('UAT1.3: When I pass ["ab", "a"], Than I should see ["a", "ab"]', () => {
    expect(sortByLength(['ab', 'a'])).toStrictEqual(['a', 'ab']);
  });
  it('UAT1.4: When I pass ["ab","cba", "a"], Than I should see ["a", "ab", "cba"]', () => {
    expect(sortByLength(['ab', 'cba', 'a'])).toStrictEqual(['a', 'ab', 'cba']);
  });
});
