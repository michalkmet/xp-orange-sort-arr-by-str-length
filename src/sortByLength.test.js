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

describe('Story 2: many sorted strings', () => {
  it('UAT2.1 When I pass ["Beg", "Life", "I", "To"], Than I should see ["I", "To", "Beg", "Life"]', () => {
    expect(sortByLength(['Beg', 'Life', 'I', 'To'])).toStrictEqual(['I', 'To', 'Beg', 'Life']);
  });
  it('UAT2.2 When I pass ["love", "dis", "I", "ww","write"], Than I should see ["I", "ww", "dis", "love","write"]', () => {
    expect(sortByLength(['love', 'dis', 'I', 'ww', 'write'])).toStrictEqual(['I', 'ww', 'dis', 'love', 'write']);
  });
});
