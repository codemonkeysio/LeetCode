# Climbing Stairs Solution 2

## Links

<p>These notes can be found here <a href="https://www.codemonkeys.tech/posts/2021/07/01/climbing-stairs-solution-2/">Code Monkeys Blog Post</a> 🐒</p>
<p><a href="https://leetcode.com/problems/climbing-stairs/">Climbing Stairs Problem</a> 💡</p>

## Problem Description

You are climbing a staircase. It takes <span class="post-term-one">n</span> steps to reach the top.

Each time you can either climb <span class="post-term-one">1</span> or <span class="post-term-one">2</span> steps. In how many distinct ways can you climb to the top?

## Examples

Ex 1) Input: <span class="post-term-one">n = 2</span> $\implies$ Output: <span class="post-term-one">2</span>

Explanation: There are <span class="post-term-one">two</span> ways to climb to the top.<br>1. 1 step + 1 step<br>2. 2 steps

Ex 2) Input: <span class="post-term-one">n = 3</span> $\implies$ Output: <span class="post-term-one">3</span>

Explanation: There are <span class="post-term-one">three</span> ways to climb to the top.<br>1. 1 step + 1 step + 1 step<br>2. 1 step + 2 steps<br>3. 2 steps + 1 step

## Constraints

- $1 \leq \color{#ebeb33}{n} \leq 45$

## Thought Process

- We previously came up with a solution for this problem by using a <span class="post-term-one">recursive formula</span> that represents how many distinct ways we can climb the stairs.

- The issue with the previous solution is it has a <span class="post-term-one">time complexity</span> of <span class="post-term-one">O(2<sup>n</sup>)</span> which is very inefficient.

- To come up with a better solution we'll be drawing out multiple <span class="post-term-one">recursion trees</span> to help us see a pattern.

- When <span class="post-term-one">n = 1</span> we have:

```mermaid
graph TD
  1([Bottom of the Staircase])--+1--> 2([1 out of 1]);
  1--+2--> 3([2 out of 1]);
```

- To see the diagram you'll need to install <a href="https://github.com/mermaid-js/mermaid">mermaid</a> or you can copy the mermaid code and paste in the <a href="https://mermaid-js.github.io/mermaid-live-editor/edit#eyJjb2RlIjoiZ3JhcGggVERcbkFbQ2hyaXN0bWFzXSAtLT58R2V0IG1vbmV5fCBCKEdvIHNob3BwaW5nKVxuQiAtLT4gQ3tMZXQgbWUgdGhpbmt9XG5DIC0tPnxPbmV8IERbTGFwdG9wXVxuQyAtLT58VHdvfCBFW2lQaG9uZV1cbkMgLS0-fFRocmVlfCBGW2ZhOmZhLWNhciBDYXJdXG4iLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjp0cnVlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6dHJ1ZX0">Mermaid Live Editor</a>.

- From the diagram we can see there is <span class="post-term-one">1 distinct way</span> to climb to the top when <span class="post-term-one">n = 1</span> since we can ignore the scenarios where we take extra steps.

- When <span class="post-term-one">n = 2</span> we have:

```mermaid
graph TD
  1([Bottom of the Staircase])--+1--> 2([1 out of 2]);
  1--+2--> 3([2 out of 2]);
  2--+1--> 4([2 out of 2]);
  2--+2--> 5([3 out of 2]);
```

- So, we have <span class="post-term-one">2 distinct ways</span> to climb to the top.

- When <span class="post-term-one">n = 3</span> we have:

```mermaid
graph TD
  1([Bottom of the Staircase])--+1--> 2([1 out of 3]);
  1--+2--> 3([2 out of 3]);
  2--+1--> 4([2 out of 3]);
  2--+2--> 5([3 out of 3]);
  3--+1--> 6([3 out of 3]);
  3--+2--> 7([4 out of 3]);
  4--+1--> 8([3 out of 3]);
  4--+2--> 9([4 out of 3]);
```

- So, we have <span class="post-term-one">3 distinct ways</span> to climb to the top.

- When <span class="post-term-one">n = 4</span> we have:

```mermaid
graph TD
  1([Bottom of the Staircase])--+1--> 2([1 out of 4]);
  1--+2--> 3([2 out of 4]);
  2--+1--> 4([2 out of 4]);
  2--+2--> 5([3 out of 4]);
  3--+1--> 6([3 out of 4]);
  3--+2--> 7([4 out of 4]);
  4--+1--> 8([3 out of 4]);
  4--+2--> 9([4 out of 4]);
  5--+1--> 10([4 out of 4]);
  5--+2--> 11([5 out of 4]);
  6--+1--> 12([4 out of 4]);
  6--+2--> 13([5 out of 4]);
  8--+1--> 14([4 out of 4]);
  8--+2--> 15([5 out of 4]);
```

- So, we have <span class="post-term-one">5 distinct ways</span> to climb to the top.

- Now, let's take a look at our cases from <span class="post-term-one">n = 1</span> to <span class="post-term-one">n = 2</span> and see if we can find a pattern:

$$\color{#ebeb33}{n \; \; \; \; \; \; \; \; \; \; \; \; \; \; \; \; \; \; \; \; \; 1 \; \; 2 \; \; 3 \; \; 4}$$

$$\color{#33ebeb}{waysToClimb \; \; 1 \; \; 2 \; \; 3 \; \; 4}$$

- Here, <span class="post-term-three">waysToClimb</span> denotes our function for determining how many unique ways we can climb the stairs.

- This sequence of numbers follows the <span class="post-term-one">Fibonacci</span> sequence with the only difference being the value of the <span class="post-term-one">1<sup>st</sup></span> and <span class="post-term-one">2<sup>nd</sup></span> terms.

- Here, the <span class="post-term-one">1<sup>st</sup></span> term has a value of <span class="post-term-three">1</span> and the <span class="post-term-one">2<sup>nd</sup></span> term has a value of <span class="post-term-three">2</span>.

- Also, notice that we know we have <span class="post-term-one">two ways</span> to climb the stairs to reach the <span class="post-term-one">n<sup>th</sup></span> step.

- If we take <span class="post-term-one">1 step</span>, then we're <span class="post-term-one">n - 1</span> steps closer to <span class="post-term-one">n</span>, and if we take <span class="post-term-one">2 steps</span> then we're <span class="post-term-one">n - 2</span> steps closer to <span class="post-term-one">n</span>.

- So, we can get the distinct number of ways to climb the steps by summing up the ways of climbing to the <span class="post-term-one">n - 1 step</span> and the ways of climbing to the <span class="post-term-one">n - 2 step</span> using the following formula:

$$\color{#33ebeb}{waysToClimb}(\color{#ebeb33}{n}) = \color{#33ebeb}{waysToClimb}(\color{#ebeb33}{n - 1}) + \color{#33ebeb}{waysToClimb}(\color{#ebeb33}{n - 2}) \; \; for \; \; \color{#ebeb33}{n} > \color{#ebeb33}{2}$$

- The <span class="post-term-one">Fibonacci</span> sequence is the following series of numbers:

$$\color{#ebeb33}{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, _{...}}$$

- The next number is found by <span class="post-term-one">adding up the two numbers before it</span>.

- For example, <span class="post-term-one">5</span> is found by adding <span class="post-term-one">2</span> and <span class="post-term-one">3</span>.

- The <span class="post-term-one">first two terms</span> are called <span class="post-term-one">seed numbers</span>, which we'll denote as:

$$\color{#ebeb33}{f_0} = \color{#ebeb33}{0}, \color{#ebeb33}{f_1} = \color{#ebeb33}{1}$$

- Here's the formula used to characterize the sequence:

$$\color{#ebeb33}{f_n} = \color{#ebeb33}{f_{n - 1}} + \color{#ebeb33}{f_{n - 2}} \; \; for \; \; \color{#ebeb33}{n} > \color{#ebeb33}{1}$$

- The <span class="post-term-one">seed numbers</span> for our problem are:

$$\color{#33ebeb}{waysToClimb_1} = \color{#33ebeb}{1}, \color{#33ebeb}{waysToClimb_2} = \color{#33ebeb}{2}$$

- Now that we know our pattern of climbing the stairs follows a <span class="post-term-one">Fibonnaci</span> sequence we can implement the sequence in our code using the <span class="post-term-three">waysToClimb</span> formula and the <span class="post-term-one">seed numbers</span> we came up with.

- This will improve the <span class="post-term-one">time complexity</span> of our solution from the <span class="post-term-one">O(2<sup>n</sup>)</span> solution we previously came up with.

## Implementation

<code-group>
<code-block title="Climbing Stairs Solution 2">

```js
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    let waysToClimb1 = 1;
    let waysToClimb2 = 2;
    let waysToClimb;
    let i = 1;

    while (n - 1 > i) {
      waysToClimb = waysToClimb2 + waysToClimb1;
      waysToClimb1 = waysToClimb2;
      waysToClimb2 = waysToClimb;
      i++;
    }

    return waysToClimb;
  }
};

let n = 4;
console.log(climbStairs(n));
```

</code-block>
</code-group>

## Analysis

- Since we're looping over the length of <span class="post-term-one">n - 1</span> our <span class="post-term-one">time complexity</span> is <span class="post-term-one">O(n)</span> which is a much more efficient solution!

- See if you can come up with an even more efficient solution using more properties of the <span class="post-term-one">Fibonnaci</span> sequence!

<style>
  .post-term-one {
    color: #ebeb33;
    font-style: italic;
  }
  .post-term-three {
    color: #33ebeb;
    font-style: italic;
  }
</style>
