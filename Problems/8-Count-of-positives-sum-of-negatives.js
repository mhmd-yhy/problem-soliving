function Count_positives_And_sum_negatives(arr) {
  let numPusitive = 0;
  let sumNegative = 0;
  arr.map(num => {
    num > 0 ? numPusitive += 1 : sumNegative += num;
  });
  return [numPusitive, sumNegative];
}
console.log(Count_positives_And_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(Count_positives_And_sum_negatives([1, 2, -12, -13, 3, 6, 7, 9, 10, -14, -15]));
