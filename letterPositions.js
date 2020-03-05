const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here
  let string = sentence.replace(/\s/g, '').toLowerCase().split('');
  for (let i = 0; i < string.length; i++) {
    if (results[string[i]] && results[string[i]].length > 0) {
      results[string[i]].push(i);
    } else {
      results[string[i]] = [i];
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"))

