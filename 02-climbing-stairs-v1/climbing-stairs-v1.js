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
