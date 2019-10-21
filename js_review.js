// Joseph P. Pasaoa
// JS Practice
//

/* CUSTOM HELPERS */
const log = console.log;


// 1 //
// Write a function `equalTo` that takes in two inputs and checks whether the two inputs are identical.
function equalTo (input1, input2) {
  return input1 === input2;
}

// 2 //
// Write a function `or` that takes in two inputs and returns a boolean of whether at least one has a truthy value.
function or (input1, input2) {
  return !!input1 || !!input2;
}

// 3 //
// Write a function `and` that takes in two arguments and returns a boolean of whether both arguments have a truthy value.
function and (input1, input2) {
  return !!input1 && !!input2;
}

// 4 //
// Write a function `printAGrade` that takes in a number between 1 and 100. It should return the grades A, B, C, D, or F. 
// Anything over a hundred should be considered an A.
function printAGrade (input) {
  const num = parseInt(input);
  if (!num || num < 0 || num > 100 || isNaN(num)) {
    log('Please check your number and try again.')
  } else if (num >= 90) {
    return 'A';
  } else if (num >= 80) {
    return 'B';
  }} else if (num >= 70) {
    return 'C';
  }} else if (num >= 60) {
    return 'D';
  }} else {
    return 'F';
  }
}

// 5 //
// `FizzBuzz` - a function that console logs  all the numbers from 1 to 100, with three exceptions. For numbers divisible by only 3, 
// log "Fizz" instead of the number, for numbers divisible by only 5 log "Buzz" instead, and for numbers divisible by 3 and 5 log "FizzBuzz".
function fizzBuzz () {
  for (let i = 1; i <= 100; i++) {
    if (!(i % 5) && !(i % 3)) {
      log('FizzBuzz');
    } else if (!(i % 5)) {
      log('Buzz');
    } else if (!(i % 3)) {
      log('Fizz');
    } else {
      log(i);
    }
  }
}

// 6 //
// `getEvens` - takes an array as an argument and returns only the even elements.
function getEvens (array) {
  let output = [];
  for (let el of array) {
    if (isNaN(parseFloat(el))) {
      log('not all elements in this array are numbers. please check and try again.');
      return;
    }
    if (el % 2 === 0) {
      output.push(el);
    }
  }
  log(output);
}

// 7 //
// `median` - takes in an array and returns the median. If the length is even it returns the average of the middle elements.
function median (array) {
  let sortedObj = {};
  for (let num of array) {
    if (isNaN(num)) {
      log('not all elements in this array are numbers. please check and try again.');
      return;
    }
    if (!sortedObj[num]) {
      sortedObj[num] = 1;
    } else {
      sortedObj[num] += 1;
    }
    const sortedArray = [];
    for (let key in sortedObj) {
      for (let i = sortedObj[key]; i > 0; i--) {
        sortedArray.push(key)
      }
    }
    if (sortedArray.length % 2 === 0) {
      return sortedArray[sortedArray.length / 2] - sortedArray[sortedArray.length / 2 - 1];
    } else {
      return sortedArray[Math.floor(sortedArray.length / 2)];
    }
  }
}

// 8 //
// A. `switchCase` - takes in a string and returns a string with every other letter alternating between capital and lowercase.
function switchCase (str) {
  let workArr = str.split('');
  let output = workArr.map(char => {
      if (i % 2 === 0) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
  })
  return output.join('');
}
// B.
function switchCases (str) {
  let workArr = str.split('');
  let output = workArr.map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
  });
  return output;
}


// 9 //
// `counter` -  a function that returns an object that has a count of each characters occurrence. Don't worry about punctuation, 
// ignore spaces, but it should be case insensitive.
function counter (str) {
  let countObj = {};
  let workArr = str.split('').filter(char => {
    return char !== ' ';
  });
  for (let char of workArr) {
    if (!countObj[charchar.toLowerCase()]) {
      counObj[char.toLowerCase()] = 1;
    } else {
      countObj[char.toLowerCase()] += 1;
    }
  }
  return countObj;
}

// 10 //
// `countZeroes` - a function that takes in an array of numbers and returns the amount of zeroes that occur in it.
function countZeroes (array) {
  let workArr = array.join('').split('');
  let counter = 0;
  for (let char of workArr) {
    if (char === '0') {
      counter += 1;
    }
  }
  return counter;
}

// 11 //
// `isPalindrome` - a function that takes in a string and returns whether that string is a palindrome.
function isPalindrome (str) {
  let charArr = str.split('');
  for (let i = 0; i < charArr.length / 2; i++) {
    if (charArr[i].toLowerCase() !== charArr[charArr.length - (i + 1)].toLowerCase()) {
      return false;
    }
  }
  return true;
}

// 12 //
// `includes` - a function that takes in an array and a target. Returns a boolean whether or not the target is included in the ARRAY.
function includesThis (array, target) {
  // return array.includes(target);
  for (let el of array) {
    if (el === target) {
      return true;
    }
  }
  return false;
}

// 13 //
// `getMiddle` - function that returns the middle character of a string. If the length is even it should return the middle two characters.
function getMiddle (str) {
  if (str.length % 2) {
    return str[Math.floor(str.length / 2)]);
  } else {
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
  }
}

// 14 //
// `palindromeSubstrings` - a function that takes in a string and returns an array of all the palindrome substrings.


// 15 //
// `disemvowel` - a function that removes all the vowels from a string.
function disemvowel (str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  let output = str.split('').filter(char => {
      return !vowels[char.toLowerCase()];
  }).join('');
  return output;
}

// 17 //
// `rangeWithStep` - a function that takes three number variables: min, max and step. The block will log 
// an array with all the numbers, inclusive, between min and max, , going up in increments equal to step. 
// If no step value is provided, the increment will be 1.
function rangeWithStep (min, max, step) {
  let outputArr = [];
  for (let i = min; i <= max; i += step || 1) {
    outputArr.push(i);
  }
  return outputArr;
}

// 18 //
// `doubler` - a function that doubles each element in an array.
function doubler (array) {
  let outputArr = array.map(num => num * 2);
  return outputArr;
}

// 19 //
// `largest` - a function that returns the largest number in an array.
function largest (array) {
  return array.reduce((largest, curr) => {
    if (curr > largest) {
      return curr;
    }
    return largest;
  }
}

/*


20. `secondLargest` - a function that returns the second largest value in an array.

21. `factors` - a function that returns the factors of a number in ascending order.

22. `sum` - a function that returns the sum of all numbers.

23. `product` - a function that returns the product of all numbers.

24. `getProps` - a function that takes in an object and returns the keys .

25. `getValues` - a function that takes in an object and returns the values.

26. `getAverageAge` - a function that takes in an array of people objects. It should return the average age of all the objects.

27. `myRotate` - a function that takes in an array and a shift number. The array should be rotated by that shift number. The shift should default to zero.

``` js
myRotate([1, 2, 3]) // => [2, 3, 1]
myRotate([1, 2, 3], -1) // => [3, 1, 2]

```

28. `repeat` - a function that takes in a string and numberOfTimes. The function should log to the screen the string however many times as numberOfTimes. If the user does not enter a numberOfTimes it should default to 2.

29. `noDups` - a function that takes in an array and returns an array with no duplicate elements.

30. `concatAndRemoveDupes` - a function that takes in two arrays and returns one array with no duplicates elements.

31. `elementDivisibleBy` - a function that takes in a divisor and arr. Use filter to return a new array of every element of arr that can be evenly divided by divisor.

32. `numberTimesIdx` - a function that takes in an array and returns an array with each element multiplied by it's index.

33. `Array.prototype.myFlatten` - a function on the Array class that takes a multi dimensional array and returns it as one array.

34.  `Array.prototype.myForEach` - your own forEach

35. `Array.prototype.myMap` - your own map.

36. `Array.prototype.myReduce` - your own reduce.

37. `Array.prototype.myEvery` - your own every.

38. `Array.prototype.mySome` - your own some.

39. `Array.prototype.myFilter` - your own filter.

40. `Array.prototype.myTranspose` - transpose a matrix.

41. `Array.prototype.myJoin` - your own join.

42. `String.prototype.mySlice` - your own slice.


*/



/* ???
16. `targetIndices` - a function that takes in array of numbers and a target. Return the indices as an array of the pair of elements that add up to that target.
*/
