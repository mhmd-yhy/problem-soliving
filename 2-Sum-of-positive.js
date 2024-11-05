function Sum_of_positive(numbers) {
  return numbers.map(num => num > 0 && num).reduce((acc, curr) => acc + curr);
}
console.log(Sum_of_positive([5, 4, -5, 2]));
