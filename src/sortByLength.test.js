const sortByLength = require('./sortByLength');

describe('Story1: sorted strings', () => {
  it('UAT1.1: When I pass ["a"], Than I should see ["a"]', () => {
    expect(sortByLength(['a'])).toStrictEqual(['a']);
  });
  it('UAT1.2: When I pass ["a", "ab"], Than I should see ["a", "ab"]', () => {
    expect(sortByLength(['a', 'ab'])).toStrictEqual(['a', 'ab']);
  });
});
