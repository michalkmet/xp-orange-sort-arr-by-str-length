const sortByLength = require('./sortByLength');

describe('Story1: sorted strings', () => {
  it('UAT1.1: When I pass ["a"], Than I should see ["a"]', () => {
    expect(sortByLength(['a'])).toStrictEqual(['a']);
  });
});
