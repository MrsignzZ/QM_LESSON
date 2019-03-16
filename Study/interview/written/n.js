function getNum(num) {
  for (let i = 1; ; i++) {
    if (num * 2 <= (i + 1) * i) {
      console.log(i)
      break;
    }
  }
}
getNum(6)