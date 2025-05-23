/*
 * <BS>Problem: Reverse the elements of an array in-place.
Example: Input: [1, 2, 3, 4, 5] → Output: [5, 4, 3, 2, 1]
Key Concept: Two-pointer technique (swap elements from start and end).
Constraints: Do it in-place with O(1) space complexity.
*/

var ReverseArray = function(arr, arr_length) {
  left_ptr = 0;
  right_ptr = arr_length - 1;

  while (left_ptr < right_ptr) {
    [arr[left_ptr], arr[right_ptr]] = [arr[right_ptr], arr[left_ptr]];
    left_ptr++;
    right_ptr--
  }
  return arr
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(ReverseArray(numbers, numbers.length))
