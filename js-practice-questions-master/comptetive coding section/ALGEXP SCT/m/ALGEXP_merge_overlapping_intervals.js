/*
Merge Overlapping
Intervals
Write a function that takes in a non-empty
array of arbitrary intervals, merges any
overlapping intervals, and returns the new
intervals in no particular order.
Each interval interval is an array of two
integers, with interval[0] as the start of
the interval and interval[1] as the end of
the interval.
Note that back-to-back intervals aren't
considered to be overlapping. For example,
[1, 5] and [6, 7] aren't overlapping;
however, [1, 6] and [6, 7] are indeed
overlapping.
Also note that the start of any particular
interval will always be less than or equal to
the end of that interval.
Sample Input

intervals = [[1, 2], [3, 5], [4, 7],
    [6, 8],
    [9, 10]
Sample Output
[[1, 2], [3, 8], [9, 10]]
// Merge the intervals [3, 5], [4,7],[6,8]
// The intervals could be ordered differently
*/

//SOLUTION 1
//TIME COMPLEXITY O(nlog(n)) | SPACE COMPLEXITY O(1) - where n is the length of the  input array
function mergeOverlappingIntervals(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [];
  let currentInterval = sortedIntervals[0];
  mergedIntervals.push(currentInterval);

  for (const nextInterval of sortedIntervals) {
    [_, currentIntervalEnd] = currentInterval;
    [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalEnd) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}

//SOLUTION 2
//TIME COMPLEXITY O(n^2) | SPACE COMPLEXITY O(n) - where n is the length of the  input array

function mergeOverlappingIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  let prev = intervals[0];
  let res = [prev];
  for (let [start, end] of intervals) {
    if (start <= prev[1]) {
      prev[1] = Math.max(prev[1], end);
      res[res.length - 1][1] = prev[1];
    } else {
      res.push([start, end]);
      prev = [start, end]
    }
  }
  return res

}
