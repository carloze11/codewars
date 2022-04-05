// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

const isPalindrome = line => {
    if (typeof line === 'number') {
      line = line.toString()
    }
    return line !== line.split('').reverse().join('') ? false: true;
  }