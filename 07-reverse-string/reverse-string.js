var reverseString = function (s) {
  let temp;
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }
};

// Case 1: s has an odd length
s = ['h', 'e', 'l', 'l', 'o'];
reverseString(s);
console.log(s);

// Case 2: s has an even length
s = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(s);
console.log(s);
