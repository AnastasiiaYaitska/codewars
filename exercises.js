// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present

function reverseWord(params) {
  const wordsArr = params.trim().split(" ");
  console.log(wordsArr);
  const word = wordsArr.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    }
    return word;
  });
  return word.join(" ");
}

// console.log(reverseWord("hello worldddd "));

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  return str.endsWith(ending);
}

// console.log(solution("abc", "bc"));
// console.log(solution("abc", "d"));

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((item) => typeof item === "number");
}

// console.log(filter_list([1, "a", "b", 0, 15]));

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  const digits = n.toString().split("");
  return digits.sort((a, b) => b - a).join("");
}

console.log(descendingOrder(42145));
