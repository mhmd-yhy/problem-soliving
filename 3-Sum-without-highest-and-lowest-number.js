function Sum_without_highest_lowest_number(numbers) {
  return numbers.sort().slice(1, -1).reduce((acc, curr) => acc + curr);
}
console.log(Sum_without_highest_lowest_number([5, 4, 6, 2, 2]));
console.log(Sum_without_highest_lowest_number([5, 1, 9, 3]));
