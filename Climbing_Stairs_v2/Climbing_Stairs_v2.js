/* 

Climbing Stairs Solution 2
https://leetcode.com/problems/climbing-stairs/submissions/

Seed Numbers
waysToClimb1 = 1
waysToClimb2 = 2

waysToClimb(n) = waysToClimb(n - 1) + waysToClimb(n - 2), n > 2

*/
var climbStairs = function(n) {
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

/*

Looping over the length of n - 1 => Time Complexity: O(n)
Space Complexity: O(1) since constant space is being used, 
we're not defining some new array or object to store values in

*/