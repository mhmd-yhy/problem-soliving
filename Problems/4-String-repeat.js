function String_repeat(str, time) {
  // return str.repeat(time);
  let newStr = "";
  for (let i = 0; i < time; i++) {
    newStr += str;
  }
  return newStr;
}
console.log(String_repeat("Y ", 3));
console.log(String_repeat("Yahya ", 2));
