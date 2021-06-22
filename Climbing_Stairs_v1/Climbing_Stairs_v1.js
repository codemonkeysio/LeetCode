// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// Thought Process
// Take some simple examples & see if we can find a pattern
// n = 1 => 1 way to climb since there's only one step to climb
// n = 2 => 1 step + 1 step = 2 steps, 2 steps => 2 ways to climb
// n = 3 => 1 + 1 + 1 = 3, 1 + 2 = 3, 2 + 1 = 3 => 3 ways to climb

// n = 3
//                           Bottom of the Stair case
//                          /                       \
//                      1 out of 3               2 out of 3
//                     /          \             /          \ 
//              2 out of 3    3 out of 3   3 out of 3   4 out of 3
//            /          \ 
//        3 out of 3  4 out of 3

//                           Bottom of the Stair case
//                       +1 /                       \ +2
//                      1 out of 3               2 out of 3
//                  +1 /          \ +2      +1 /          \ +2 
//              2 out of 3  3 out of 3  3 out of 3 //// 4 out of 3
//           +1 /          \ +2 
//        3 out of 3  ////4 out of 3

// From the diagram we can see there are 3 distinct ways to climb
// to the top when n = 3

// Try drawing out more diagrams for larger values of n or
// creating a more generalized diagram to help you see a pattern

// The diagram is an example of a Recursion Tree

// So, one way to solve this problem is to come up with a 
// Recursive formula that represents how many distinct ways
// we can climb the stairs

// Let's use the diagram to help us come up with a recursive 
// formula

// We know we can either add 1 step or 2 steps each time we climb
// up the stairs and we want to hit our target of n steps

// So, we need to keep track of how many steps we have taken

// Initially, stepsTaken = 0
// Each time we climb the stairs 
// stepsTaken = stepsTaken + 1 or stepsTaken = stepsTaken + 2

// Let wayToClimb denote our function for climbing the stairs

// Here's how we can represent the different scenarios for 
// climbing the stairs
// wayToClimb(stepsTaken + 1, n) + wayToClimb(stepsTaken + 2, n)

// We need to pass the stepsTaken + nextStepSize and our target 
// value of n steps to wayToClimb

// Now, we need to determine how many times we need to call our
// function

// So, we know from the diagram if stepsTaken > n then we can 
// ignore that way of climbing the stairs

// And if stepsTaken == n then we have found a valid way to
// climb the steps

// Implementation
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
}

// Downsides
// Our solution works but it's not efficient and we may even get
// a time limit exceeded status if we submit this

// This is because the time complexity of our solution is O(2^n)
// That time complexity can be seen by looking at our 
// Recursion Tree and counting the number of nodes

// Now, we won't get exactly 2^n nodes since the formula we came
// up with isn't exactly 2^n but we're close to that and remember 
// in Big-Oh we only care about the fastest growing term in 
// the formula

// How to improve this solution?
// Well, if we draw out the recursion trees for larger values of 
// n we'll start to see an interesting pattern occur which we'll
// talk about in the next video