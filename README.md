# Awesome repo

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Domain:
array
string
length

Examples:

["a"] => ["a"]
["a", "ab"] => ["a", "ab"]
["ab", "a"] => ["a", "ab"]
["ab","cba", "a"] => ["a", "ab", "abc"]
["Beg", "Life", "I", "To"] => ["I", "To", "Beg", "Life"]
["love", "dis", "I", "ww","write"] => ["I", "ww", "dis", "love","write"]

Story1: sorted strings
As User, I want to pass strings to function, so I can see them sorted

- ✅ DONE UAT1.1: When I pass ["a"], Than I should see ["a"]
- ✅ DONE UAT1.2: When I pass ["a", "ab"], Than I should see ["a", "ab"]
- ✅ DONE UAT1.3: When I pass ["ab", "a"], Than I should see ["a", "ab"]
- ✅ DONE UAT1.4: When I pass ["ab","cba", "a"], Than I should see ["a", "ab", "cba"]
 
Story 2: many sorted strings
As User, I want to pass many strings to function, so I can see them sorted

- ⚠ TODO UAT2.1 When I pass ["Beg", "Life", "I", "To"], Than I should see ["I", "To", "Beg", "Life"]
- ⚠ TODO UAT2.2 When I pass ["love", "dis", "I", "ww","write"], Than I should see ["I", "ww", "dis", "love","write"]