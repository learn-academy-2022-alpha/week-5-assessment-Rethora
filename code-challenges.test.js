// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe('codeMessage', () => {
  it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    const secretCodeWord1 = "Lackadaisical", secretCodeWord1Output = "L4ck4d41s1c4l"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook", secretCodeWord2Output = "G0bbl3dyg00k"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric", secretCodeWord3Output = "3cc3ntr1c"
    // Expected output: "3cc3ntr1c"

    expect(codeMessage(secretCodeWord1)).toEqual(secretCodeWord1Output)
    expect(codeMessage(secretCodeWord2)).toEqual(secretCodeWord2Output)
    expect(codeMessage(secretCodeWord3)).toEqual(secretCodeWord3Output)
  })
})

// codeMessage › takes in a string and returns a coded message.The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// ReferenceError: codeMessage is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function named codeMessage
// codeMessage will take in a string
// we need to define what letters need to be coded and what they should be changed to
// we will check lowercase and uppercase letters so our inputs can be case insensitive
// if we find a match we can replace the letter to our coded number
// we can return our new string

const codeMessage = str => str.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0')

// Passed the test!

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('findWords', () => {
  it('takes in an array of words and a single letter and returns all the words that contain that particular letter', () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const expectedOutput1 = ["Apple", "Banana", "Orange"]
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    const expectedOutput2 = ["Cherry", "Blueberry", "Peach"]
    // Expected output: ["Cherry", "Blueberry", "Peach"]

    expect(findWords(arrayOfWords1, letterA)).toEqual(expectedOutput1)
    expect(findWords(arrayOfWords2, letterE)).toEqual(expectedOutput2)
  })
})

// ● findWords › takes in an array of words and a single letter and returns all the words that contain that particular letter
// ReferenceError: findWords is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function named findWords
// findWords will take in an array of strings as well as a letter
// we can loop through the array
// we will check that the input letter (in lowercase) is in a word (in lowercase) in our array
// this will allow our function the handle case insensitive inputs
// if the letter is in the word we will add it to our output array
// we can then return our new array

const findWords = (arr, char) => arr.filter(word => word.toLowerCase().includes(char.toLowerCase()))

// Passed the test!

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('isFullHouse', () => {
  it('takes in an array of 5 numbers and determines whether or not the array is a “full house”', () => {
    const hand1 = [5, 5, 5, 3, 3], hand1Output = true
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4], hand2Output = false
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4], hand3Output = false
    // Expected output: false

    expect(isFullHouse(hand1)).toEqual(hand1Output)
    expect(isFullHouse(hand2)).toEqual(hand2Output)
    expect(isFullHouse(hand3)).toEqual(hand3Output)
  })
})

// ● isFullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house”
// ReferenceError: isFullHouse is not defined

// b) Create the function that makes the test pass.

// PSEUDO CODE:
// create a function named isFullHouse
// isFullHouse will take an array of five numbers
// we will loop over the array count the occurrences of each card in the array
// we can then check our counts and see if one of the counts is 2 and another count is 3
// if that is the case return true
// else return false

const isFullHouse = arr => {
  const counts = {}
  arr.forEach(card => counts.hasOwnProperty(card) ? counts[card] += 1 : counts[card] = 1)
  return [2, 3].every(count => Object.values(counts).includes(count))
}

// Passed the test!
