/// REGULAR EXPRESSIONS ///

/// The .test() method ///
let sentence = "The dog chased the cat.";
let regex = /the/;
let myString = "Hello, World!";
let myRegex = /Hello/;
console.log(myRegex.test(myString)); // true

// Match literal strings //
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
console.log(waldoRegex.test(waldoIsHiding)); // true

// Match a literal string with different possibilities //
let petString = "James has a pet cat."
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString)); // true

// Ignore case while matching //
let myString2 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
console.log(fccRegex.test(myString2)); // true

// Extract matches - .match() method //
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
console.log(extractStr.match(codingRegex)); // ["coding"]

// Find more than the first match //
let twinkleStar = "Twinkle, twinkle, little star.";
let starRegex = /twinkle/ig;
console.log(twinkleStar.match(starRegex)); // ["Twinkle", "twinkle"]

// Match anything with wildcard period //
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
console.log(exampleStr.match(unRegex)); // ["fun"]

// Match single character with multiple possibilities //
let bgRegex = /b[aiu]g/;
let quoteSample = "Beware of buts in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
console.log(quoteSample.match(vowelRegex)); // [ "e", "a", "e", "o", "u", "i", "e", "a", "o", "e", … ]

// Match letters of the alphabet //
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
console.log(quoteSample2.match(alphabetRegex)); // Array(35) [ "T", "h", "e", "q", "u", "i", "c", "k", "b", "r", … ]

// Match numbers and letters of the alphabet //
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[2-6h-s]/ig;
console.log(quoteSample3.match(myRegex2)); // Array(17) [ "l", "r", "r", "3", "4", "5", "2", "6", "5", "3", … ]

// To exclude using ^ symbol //
let quoteSample4 = "3 blind mice.";
let myRegex3 = /[^0-9aeiou]/ig;
console.log(quoteSample4.match(myRegex3)); // Array(9) [ " ", "b", "l", "n", "d", " ", "m", "c", "." ]

// Match characters occuring one or more times - using + //
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/ig;
console.log(difficultSpelling.match(myRegex4)); // Array [ "ss", "ss" ]

// Match characters occuring zero or more times //
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
console.log(chewieQuote.match(chewieRegex)); // Array [ "Aaaaaaaaaaaaaaaa" ]

// Find characters with greedy matching //
let string = "titanic";
let regex5 = /t[a-z]*i/;
console.log(string.match(regex5)); // Array [ "titani" ]

// Find characters with lazy matching //
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*?>/;
console.log(text.match(myRegex5)); // Array [ "<h1>" ]

// CHALLENGE: Find one or more criminals in a hunt //
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/;
console.log(crowd.match(reCriminals)); // Array [ "CCC" ]

// Match beginning string patters - using ^ //
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
console.log(calRegex.test(rickyAndCal)); // true

// Matching ending string patters //
let caboose = "The last car on a train is the caboose"
let lastRegex = /caboose$/;
console.log(lastRegex.test(caboose)); // true

// Match all letters and numbers //
let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegex2 = /\w/g;
console.log(quoteSample5.match(alphabetRegex2).length); // 31 characters except spaces and period

// Match everything but letters and numbers //
let quoteSample6 = "The five boxing wizrds jump quickly.";
let nonAlphabetRegex = /\W/g;
console.log(quoteSample6.match(nonAlphabetRegex).length); // 6 characters except letters, underscores, and numbers

// Match all numbers shortcut //
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
console.log(numString.match(numRegex)); // Array(3) [ "5", "0", "0" ]

// Match all non-numbers //
let numString2 = "Your sandwich will be $5.00";
let noNumRegex = /\D/g;
console.log(numString2.match(noNumRegex)); // Array(24) [ "Y", "o", "u", "r", " ", "s", "a", "n", "d", "w", … ]

// Restrict possible usernames //
/*
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. Two-letter names can't have numbers.
*/ 
let username = "JackOfAllTrades17";
let userCheck = /^[A-Za-z]{2,}\d*$/;
console.log(userCheck.test(username)); // true

// Match whitespace //
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
console.log(sample.match(countWhiteSpace).length); // 5

// Match non-whitespace characters//
let sample2 = "Whitespace is important in separating words.";
let countWhiteSpace2 = /\S/ig;
console.log(sample2.match(countWhiteSpace2).length); // 39

// Specify upper and lower number of matches //
let ohStr = "Ohh no no";
let ohRegex = /Oh{1,3} no/;
console.log(ohStr.match(ohRegex)) // Array [ "Ohh no" ]

// Specify only the lower number of matches //
let haStr = "Hazzzzah";
let haRegex = /z{4,}/;
console.log(haStr.match(haRegex)); // Array [ "zzzz" ]

// Specify exact number of matches //
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
console.log(timStr.match(timRegex)); // Array [ "Timmmmber" ]

// Check for all or none //
let favWord = "favorite";
let favRegex = /favou?rite/;
console.log(favRegex.test(favWord)); // true

// Positive and negative lookahead //
let sampleWord = "astronaut13";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
console.log(pwRegex.test(sampleWord)); // true

// Reuse patters using capture groups //
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
console.log(repeatNum.match(reRegex)); // Array [ "42 42 42", "42" ]

// Use capture groups to search and replace //
let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okie dokie";
console.log(huhText.replace(fixRegex, replaceText)); // This sandwich is okie dokie.
console.log("Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1')); // Camp Code.

// Remove whitespace from star and end //
let hello = "  Hello, world!     ";
let wsRegex = /^\s+|\s+$/g;
console.log(hello.replace(wsRegex, "")); // Hello, world!
