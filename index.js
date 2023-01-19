// import {
//   getNumberOfChars,
//   getFirstChar,
//   getLastChar,
//   getLower,
//   getUpper,
//   getCapitalized,
// } from "./variations.js";

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");

const nameM = document.getElementById("your-name");
console.log(nameM);
nameM.addEventListener("keyup", () => {
  const value = nameM.value;

  answer1.textContent = getNumberOfChars(value);
  answer2.textContent = getFirstChar(value);
  answer3.textContent = getLastChar(value);
  answer4.textContent = getLower(value);
  answer5.textContent = getUpper(value);
  if (value) {
    answer6.textContent = getCapitalized(value);
  } else {
    answer6.textContent = "";
  }
});
function getNumberOfChars(name) {
  // number of characters in: name
  return name.length;
}

/** @param {string} name */
function getFirstChar(name) {
  // first character of: name
  return name.charAt(0);
}

/** @param {string} name */
function getLastChar(name) {
  // last character of: name
  return name.slice(-1);
}

/** @param {string} name */
function getLower(name) {
  // name all in lower case (example: "ABC" becomes "abc")
  return name.toLocaleLowerCase();
}

/** @param {string} name */
function getUpper(name) {
  // name all in upper case (example: "abc" becomes "ABC")
  return name.toUpperCase();
}

/** @param {string} name */
function getCapitalized(name) {
  // capitalized version of name (example: "alEX" becomes "Alex")
  return name[0].toUpperCase() + name.substring(1).toLocaleLowerCase();
}

const age = document.querySelector("#your-age");
const nextAge = document.querySelector("#next-age");

age.addEventListener("keyup", () => {
  nextAge.textContent = getNextAge(age.value);
});

function getNextAge(age) {
  return parseInt(age) + 1;
}

const number = document.querySelector("#your-number");
const output = document.querySelector("#output");

number.addEventListener("keyup", () => {
  output.textContent = getDivisionRemainderBy2(
    Number.parseInt(number.value, 10)
  );
});

function getDivisionRemainderBy2(number) {
  return number % 2;
}
