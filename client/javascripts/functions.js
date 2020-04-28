// jshint esversion: 6

// initial function for all requirements
let revWord = str => {
  let result = "";
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
};

// Req. 3a
let revWords1 = sent => {
  let array = sent.split(" ");
  let result = " ";
  for (var i = 0; i < array.length; i++) {
    result = result + " " + revWord(array[i]);
  }
  return result;
};
console.log(revWords1("Hello there world"));

// Req. 3b

let revWords2 = sent => {
  let array = sent.split(" ");
  let result = "";
  array.forEach(char => {
    result = result + " " + revWord(char);
  });

  return result;
};
console.log(revWords2("Hello world"));

// Req. 3c

let revWords3 = sent => {
  let array = sent.split(" ");
  let result = "";
  for (char of array) {
    result = result + " " + revWord(char);
  }

  return result;
};
console.log(revWords3("Hello world"));

/*
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
*/
