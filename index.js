// Pangram
// Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

// Ignore non-alphabetical characters in the word or sentence.
// Ignore letter casing in the word or sentence.

function isPangram(sentence, letters) {
  // console.log(sentence, letters)
  // word uses all letters
  const sentSet = new Set();
  const letSet = new Set();
  // sanitise
  const regex = /[a-z]/;
  letters
    .toLowerCase()
    .split('')
    .forEach((x) => {
      if (regex.test(x)) {
        letSet.add(x);
      }
    });
  sentence
    .toLowerCase()
    .split('')
    .forEach((x) => {
      if (regex.test(x)) {
        sentSet.add(x);
      }
    });
  console.log(sentSet);
  console.log(letSet);

  // compare sets using .has();
  // for (let i = 0; i < letSet.size; i++) {
  //  sentSet.has(i)
  //}

  for (const letter of letSet) {
    if (!sentSet.has(letter)) {
      return false;
    }
  }
  for (const letter of sentSet) {
    if (!letSet.has(letter)) {
      return false;
    }
  }
  return true;
  // compare sets....
  // add them and check same length
  // console.log(sentSet.size)
  // const combined = sentSet.add(letSet)
  // console.log(sentSet.size)
  // if (combined.size === letSet.size) {
  //   return true
  // }
  //return false
  // compare arrays...
  // const sentArr = Array.from(sentSet)
  // const letArr = Array.from(letSet)

  // helper
  //function compare(a, b) {
  //  for (let i = 0; i < a.length; i++) {
  //    if (a[i] === b[i]) {
  //      console.log("true")
  //    }
  //  }
  //}

  // return sentence;
}
