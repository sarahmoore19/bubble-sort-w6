
function bubbleSort1(arr) {
  let count = 1;
  while (count > 0) {
    count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      count++;
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
    }
    console.log(arr.join(","));

  }
  return;

      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log


    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning

}

function bubbleSort2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      count++;
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
  }
  console.log(arr.join(","));

 if (!count) return;
 return bubbleSort(arr);
}

module.exports = bubbleSort;
