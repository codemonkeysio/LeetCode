# Climbing Stairs Solution 1

## 🚧 These notes are under construction! 🚧

## Links

<p>These notes can be found here <a href="https://www.codemonkeys.tech/posts/2021/06/30/climbing-stairs-solution-1/">Code Monkeys Blog Post</a> 🐒</p>
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
<code-block title="Climbing Stairs Solution 1">

```js
var climbStairs = function (n) {
  return wayToClimb(0, n);
};

var wayToClimb = function (stepsTaken, n) {
  if (stepsTaken > n) {
    return 0;
  }

  if (stepsTaken === n) {
    return 1;
  }

  return wayToClimb(stepsTaken + 1, n) + wayToClimb(stepsTaken + 2, n);
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
