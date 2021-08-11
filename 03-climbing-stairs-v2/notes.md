# Climbing Stairs Solution 2

## 🚧 These notes are under construction! 🚧

## Links

<p>These notes can be found here <a href="https://www.codemonkeys.tech/posts/2021/07/01/climbing-stairs-solution-2/">Code Monkeys Blog Post</a> 🐒</p>
<p><a href="https://leetcode.com/problems/climbing-stairs/">Climbing Stairs Problem</a> 💡</p>
<p><a href="https://discord.gg/mh9rQmwJ8H">Ask Questions & Share Solutions in Discord</a> 🤖</p>

## Problem Description

You are climbing a staircase. It takes <span class="post-term-one">n</span> steps to reach the top.

Each time you can either climb <span class="post-term-one">1</span> or <span class="post-term-one">2</span> steps. In how many distinct ways can you climb to the top?

## Examples

Ex 1) Input: <span class="post-term-one">n</span> = 2 $\implies$ Output: <span class="post-term-one">2</span>

Explanation: There are <span class="post-term-one">two</span> ways to climb to the top.<br>1. 1 step + 1 step<br>2. 2 steps

Ex 1) Input: <span class="post-term-one">n</span> = 3 $\implies$ Output: <span class="post-term-one">3</span>

Explanation: There are <span class="post-term-one">three</span> ways to climb to the top.<br>1. 1 step + 1 step + 1 step<br>2. 1 step + 2 steps<br>3. 2 steps + 1 step

## Constraints

- $1 \leq \color{#ebeb33}{n} \leq 45$

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

<style>
  .post-term-one {
    color: #ebeb33;
    font-style: italic;
  }
</style>