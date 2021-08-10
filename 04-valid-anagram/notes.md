# Valid Anagram Notes

## What is an Anagram?

- A word or a phrase that is formed by rearranging the letters of a different word or phrase typically using all of the original letters exactly once

## Assumptions

- Strings <span style="color:#ffcc00">_s_</span> & <span style="color:#ffcc00">_t_</span> only contain lowercase English letters (no spaces) & we're only able to use each letter once

## How to Check if _t_ is an Anagram of _s_?

- Since we're assuming we can only use each letter in <span style="color:#ffcc00">_s_</span> & <span style="color:#ffcc00">_t_</span> once then for <span style="color:#ffcc00">_t_</span> to be an anagram of <span style="color:#ffcc00">_s_</span> they must be the same length

- So, we can first check that <span style="color:#ffcc00">_s_</span> & <span style="color:#ffcc00">_t_</span> are the same length if they aren't we can return false

- Now, if <span style="color:#ffcc00">_s_</span> & <span style="color:#ffcc00">_t_</span> are the same length they must also contain the same letters

### How to Check if _s_ & _t_ contain the same letters?

- We're given <span style="color:#ffcc00">_s_</span> & <span style="color:#ffcc00">_t_</span> as strings but we care about being able to examine each character in the strings, so what we can do is create an array of characters for <span style="color:#ffcc00">_s_</span> & <span style="color:#ffcc00">_t_</span>

  - Ex 1) <span style="color:#ffcc00">_s = "anagram" => sArray = ["a", "n", "a", "g", "r", "a", "m"]_</span><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#ffcc00">_t = "nagaram" => tArray = ["n", "a", "g", "a", "r", "a", "m"]_</span>

  - Ex 2) <span style="color:#ffcc00">_s = "rat" => sArray = ["r", "a", "t"]_</span><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#ffcc00">_t = "car" => tArray = ["c", "a", "r"]_</span>

* We can use the <span style="color:#ffcc00">_split()_</span> method & pass it a pattern of <span style="color:#ffcc00">_""_</span>

* Tells <span style="color:#ffcc00">_split()_</span> to split our strings into substrings where a <span style="color:#ffcc00">_""_</span> pattern occurs which is between each character in our strings

* <span style="color:#ffcc00">_split()_</span> will then return an array of these substrings

* Now, we need a way to compare the letters of <span style="color:#ffcc00">_sArray_</span> with the letters of <span style="color:#ffcc00">_tArray_</span>

* We could take the first value of <span style="color:#ffcc00">_sArray_</span> & compare it with each value of <span style="color:#ffcc00">_tArray_</span> & break when the letters are the same & keep track of which index the match occurred at so we don't use it again on the next comparison

* A simplier solution though is to realize that we can sort our arrays & if <span style="color:#ffcc00">_t_</span> is an anagram of <span style="color:#ffcc00">_s_</span> then our arrays will have all the same letters in the same order

  - Ex 1) <span style="color:#ffcc00">_sArray.sort() = ["a", "a", "a", "g", "m", "n", "r"]_</span><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#ffcc00">_tArray.sort() = ["a", "a", "a", "g", "m", "n", "r"]_</span>

  * Ex 2) <span style="color:#ffcc00">_sArray.sort() = ["a", "r", "t"]_</span><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#ffcc00">_tArray.sort() = ["a", "c", "r"]_</span>

* Then we can check if the letters in the arrays are equal by comparing each value at index <span style="color:#ffcc00">_i_</span> of <span style="color:#ffcc00">_sArray_</span> with each value at index <span style="color:#ffcc00">_i_</span> of <span style="color:#ffcc00">_tArray_</span>

* To do this we can loop over the length of one of the arrays & if the values of our arrays at index <span style="color:#ffcc00">_i_</span> are not equal then we can break the loop by returning false

* If the arrays are equal then we'll loop over the entire length of our array & then return true
