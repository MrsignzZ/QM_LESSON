// 写一个求和的函数sum，达到下面的效果

// // Should equal 15
// sum(1, 2, 3, 4, 5);
// // Should equal 0
// sum(5, null, -5);
// // Should equal 10
// sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1,
//   'E', 1, 'F', 1, 'G', 1);
// // Should equal 0.3, not 0.30000000000000004
// sum(0.1, 0.2);

function sum() {
  const args = [...arguments];
  let total = new Number();
  for (let key in args) {
    if (key === null) {
      key === 0;
    } else if (typeof key === 'string') {
      key === 0;
    }
    num = new Number(key);
    total += Number(num.toFixed(2));
  }
  return total;
}

console.log(sum(1.1, 0.2));
