function print(a, b) {
  let arrA = returnArr(a)
  let arrB = returnArr(b)
  console.log(arrA, arrB)
  let num1 = arrA[0] * arrB[0] - arrA[1] * arrB[1]
  let num2 = arrA[1] * arrB[0] + arrA[0] * arrB[1]
  return `${num1}+${num2}i`
  // console.log(`${num1}+${num2}i`)
}

while (true) {
  setTimeout(() => {
    console.log('print')
  }, 10);
}
function returnArr(str) {
  let arr = str.split('+');
  if (arr[1] === 'i') {
    arr[i] = '1i'
  } else if (arr[1] === '-i') {
    arr[1] = '-1i'
  }
  arr[0] = parseInt(arr[0])
  arr[1] = parseInt(arr[1])
  return arr;
}


console.log(returnArr('2+-i'))

console.log(parseInt('-2i'))

let str = '3 7 1 5';
let line = str.split(' ')
line = line.reverse()
console.log(line.join(' '))

let str = '2019-09-30';
let line = str.split('-');
line = line.map((item) => {
  return parseInt(item)
})
if (line[0] > 2019) {
  console.log('国庆节快乐');
}
else if (line[0] === 2019) {
  if (line[1] >= 10) {
    console.log('国庆节快乐');
  }
  else if (line[1] === 9) {
    if (line[2] === 30) {
      console.log('明天是国庆节');
    }
    if (line[2] === 29) {
      console.log('后天是国庆节');
    }
    if (line[2] < 29) {
      let res = days(str, '2019-10-01');
      console.log(`距离国庆节还有${res}天`);
    }
  }
  else {
    let res = days(str, '2019-10-01');
    console.log(`距离国庆节还有${res}天`);
  }
}
else {
  let res = days(str, '2019-10-01');
  console.log(`距离国庆节还有${res}天`);
}

function days(date1, date2) {
  var dateSpan, days;
  date1 = Date.parse(date1)
  date2 = Date.parse(date2)
  dateSpan = date2 - date1;
  dateSpan = Math.abs(dateSpan)
  days = Math.floor(dateSpan / (24 * 3600 * 1000))
  return days;
}

console.log(days('2019-9-9', '2019-10-01'))

let str = '2,1 0,0 2,0 1,1 1,2 0,2'
let arr = str.split(' ')
let p = arr.shift().split(',')
p = {
  x: parseFloat(p[0]),
  y: parseFloat(p[1])
}
arr = arr.map((item) => {
  let arr = item.split(',');
  return {
    x: parseFloat(arr[0]),
    y: parseFloat(arr[1])
  }
})

function isInCity(p, poly) {
  let px = p.x,
    py = p.y,
    res = false;

  for (let i = 0, j = poly.length - 1; i < j; i++) {
    let sx = poly[i].x,
      sy = poly[i].y,
      tx = poly[j].x,
      ty = poly[j].x

    if ((sx === px && sy === py) || (tx === px && ty === py)) {
      return true;
    }
    if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
      let x = sx + (py - sy) + (tx - sx) / (ty - sy)
      if (x === px) {
        return true;
      }
      if (x > px) {
        res = !res
      }
    }
  }
  return res;
}

console.log(isInCity(p, arr))

let line = '()()"""""';
arr = line.split('')
let arr1 = arr.filter((item) => {
  if (item === '(' || item === ')') {
    return item
  }
})

let arr2 = arr.filter((item) => {
  if (item === "\"") {
    return item
  }
})

if (arr1.length % 2 === 0 && arr2.length % 2 === 0) {
  console.log(true)
} else {
  console.log(false)
}
console.log(arr1)
console.log(arr2)

let line = 'success'
let arr = line.split('')

let m = new Map()

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (!m.has(element)) {
    m.set(element, 1)
  } else {
    m.set(element, m.get(element) + 1);
  }
}

let realArr = [...m]
console.log(realArr)
let s = realArr.reduce((arr1, arr2) => {
  if (arr1[1] >= arr2[1]) {
    return arr1;
  } else return arr2;
})
console.log(`${s[0]} ${s[1]}`)
// m.set(arr[0])
// console.log(m.has(arr[0]))
// console.log(m)

let line = '13254 4354325'
let arr = line.split(' ')
let res = parseFloat(arr[0]) + parseFloat(arr[1])
res = res.toString()
console.log(res)



let flag = '-';
function transObj(orignalObj) {
  // 请在这里写出你的答案,你也可以增加函数的接收的参数，但是不要修改while里的代码
  for (const key in orignalObj) {
    if (key === 'name') {
      orignalObj.name = flag + orignalObj.name
      flag += '-'
    } else if (typeof orignalObj[key] === 'object') {
      transObj(orignalObj[key])
    }
  }
  return orignalObj;
}

let line = '{"name":"a","c":{"name":"c","b":{"name":"b"}}}'
const orignalObj = JSON.parse(line);
console.log(JSON.stringify(transObj(orignalObj)));



const numArr1 = [100, 22, 23]
const numArr2 = [11, 34, 40, 22]
console.log(numArr1.concat(numArr2).sort((a, b) => a - b))



function wave(w) {
  //请按照要求写出你的答案
  let str = w;
  let w1 = w.toLocaleUpperCase()
  let res = w1.split('');
  res = res.map((item, index) => {
    return `${str.slice(0, index)}${item}${str.slice(index + 1, str.length)}`
  })
  return res;
}
console.log(wave('hello'))

function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  }
}

var obj = {
  a: 20,
  getA: function () {
    setTimeout(bind(function () {
      console.log(this.a)
    }, this), 1000)
  }
}

obj.getA();

let line = '12995';
let lines = line.split('')
function deleteZero(arr) {
  if (arr[arr.length - 1] == 0) {
    let arr = arr.pop()
    return deleteZero(arr);
  } else return arr;
}
if (line.length <= 3) {
  console.log(`${line} bps`)
}
else if (line.length <= 6) {
  // if (lines[3] >= 5) {
  //   if (condition) {

  //   }
  //   lines[2] = parseInt(lines[2]) + 1
  // }
  // if (lines[2] === 0) {
  //   console.log(`${lines[0]}.${lines[1]} Kbps`)
  // } else console.log(`${lines[0]}.${lines[1]}${lines[2]} Kbps`)
  let res = parseFloat(line) / 1000
  // console.log(Math.(res))
  let str = res.toString().split()
  if (parseInt(str[str.length - 1]) >= 5) {
    res += 0.01
  }
  res = res.toString().split('')
  res.pop()
  console.log(res)
  res = deleteZero(res);

  console.log(res)
}
else if (line.length <= 9) {
  if (lines[3] >= 5) {
    lines[2] = parseInt(lines[2]) + 1
  }
  if (lines[2] === 0) {
    console.log(`${lines[0]}.${lines[1]} Kbps`)
  } else console.log(`${lines[0]}.${lines[1]}${lines[2]} Kbps`)
}
else if (line.length <= 9) {
  if (lines[3] >= 5) {
    lines[2] = parseInt(lines[2]) + 1
  }
  if (lines[2] === 0) {
    console.log(`${lines[0]}.${lines[1]} Kbps`)
  } else console.log(`${lines[0]}.${lines[1]}${lines[2]} Kbps`)
}
else {
  if (lines[3] >= 5) {
    lines[2] = parseInt(lines[2]) + 1
  }
  if (lines[2] === 0) {
    console.log(`${lines[0]}.${lines[1]} Kbps`)
  } else console.log(`${lines[0]}.${lines[1]}${lines[2]} Kbps`)
}

let arr = [1, 4, 5, 2, 9, 10, 7]

let max1 = 0, max2 = 0;
arr.reduce((a, b) => {
  if (a <= b) {
    max2 = b;
    if (a >= max1) {
      max1 = a
    }
  } else {
    max2 = a;
    if (b >= max1) {
      max1 = b
    }
  }
  return max2
})
console.log(max1, max2)

for (var i = 0; i < 10; i++) {
  setTimeout((i) => {
    console.log(i)
  }, 0, i)
}

for (var i = 0; i < 10; i++) {
  setTimeout((function timer(i) {
    return function () {
      console.log(i)
    }
  })(i), 0);
}

function Person(name, age) {
  this.name = name;
  this.age = age
}

function Student(name, age) {
  this.study = function () {
    console.log('study')
  }
  Person.call(this, name, age)
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

var s1 = new Student('xiaomi', 18)

console.log(s1)

function deepClone(obj) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    return obj;
  }

  let o = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      o[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return o;
}

function flatten(arr) {
  return arr.reduce((pre, item) => {
    return pre.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}
console.log(flatten([1, [[2], [3, [4]], 5]]))

let str = '34839946-beijing 34839946-shanghai 42342124-hongkong 42342124-guilin 42342124-guilin 12312344-shanghai 12312344-shanghai 22341234-nanjing';

let arr = [...new Set(str.split(' '))]

arr = arr.map((item, index) => {
  return item.split('-')[1];
})

let m = new Map()

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (!m.has(element)) {
    m.set(element, 1)
  } else {
    m.set(element, m.get(element) + 1);
  }
}

let res = [...m.keys()].sort()
let s = res.map((item, index) => {
  return [item, m.get(item)]
})
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j][1] < arr[j + 1][1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}
s = bubbleSort(s)

console.log(`${s[0][0]} ${s[0][1]}`)
console.log(`${s[1][0]} ${s[1][1]}`)
console.log(`${s[2][0]} ${s[2][1]}`)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let res = []
function PostWithPre(pre, beg, end) {
  let length = end - beg;
  if (length >= 1) {
    res.push(pre[beg])
    beg = (length / 2 + 1) + beg
    PostWithPre(pre, beg, end)
    beg = beg - (length / 2)
    end = end - (length / 2)
    PostWithPre(pre, beg, end)
  }
  else res.push(pre[beg])
  return res
}
console.log(PostWithPre(arr, 0, 9))

var add = currying(function () {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
});

function currying(fn) {
  let allArgs = []
  return function next() {
    let args = [...arguments]
    if (args.length > 0) {
      allArgs = allArgs.concat(args)
      return next
    } else {
      return fn.apply(null, [...allArgs])
    }
  }
}
console.log(add(1)(2)(3)())


function currying(fn) {
  var allArgs = [];

  function next() {
    var args = [].slice.call(arguments);
    allArgs = allArgs.concat(args);
    return next;
  }
  // 字符类型
  next.toString = function () {
    return fn.apply(null, allArgs);
  };
  // 数值类型
  next.valueOf = function () {
    return fn.apply(null, allArgs);
  }

  return next;
}

console.log(add(1)(2)(3))

function palindrome(s) {
  if (s.length === 1) {
    return s
  }
  let str = '#' + s.split('').join('#') + '#'
  let rl = [], mx = 0, pos = 0, ml = 0;
  for (let i = 0; i < str.length; i++) {
    if (i < mx) {
      rl[i] = Math.min(rl[2 * pos - i], mx - i)
    }
    else {
      rl[i] = 1
    }
    while (i - rl[i] > 0 && i + rl[i] < str.length && str[i - rl[i]] === str[i + rl[i]]) {
      rl[i]++
    }
    if (rl[i] + i - 1 > mx) {
      mx = rl[i] + i - 1
      pos = i
    }
    if (ml < rl[i]) {
      ml = rl[i]
      sub = str.substring(i - rl[i] + 1, i + rl[i])
    }
  }
  return sub.split('#').join('').trim()
}

console.log(palindrome('cdcde'))


function isTrue(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      sum += i
    }
  }
  if (sum == num + 1) {
    return false
  } else {
    return true
  }
}



console.log(isTrue(32))

function test() {
  let allRes = []
  Promise.all(fetch(url1), fetch(url2), fetch(url3))
    .then(res => allRes = res)
  return { ...allRes }
}




function getAward() {
  let n = Math.floor(Math.random() * 10)
  if (n >= 0 && n <= 3) {
    return '一等奖'
  }
  if (n <= 4) {
    return '二等奖'
  }
  if (n <= 6) {
    return '三等奖'
  }
  if (n <= 9) {
    return '四等奖'
  }
}
getAward()


let line = 'a_b_cc_ddd'
let arr = line.split('_').filter(f => f)
arr = arr.map((item, index) => {
  // if (index === 0) {
  //   return item
  // } else {
  let resArr = item.split('')
  console.log(resArr)
  resArr[0] = resArr[0].toLocaleUpperCase()
  return resArr.join('')
  // }
})
console.log(arr.join(''))

class Queue {
  constructor() {
    this.queue = []
  }
  task(wait, fn) {
    this.queue.push({
      wait: wait,
      func: fn
    })
    return this
  }
  async start() {
    for (let i = 0; i < this.queue.length; i++) {
      await timeout(this.queue[i].wait)
      this.queue[i].func()
    }
  }
}
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let p = new Queue();
p.task(1000, () => {
  console.log('第一')
})
  .task(2000, () => {
    console.log('第二')
  })
  .task(1000, () => {
    console.log('第三')
  })
  .start()

function PrintMinNumber(numbers) {
  // write code here
  numbers.sort((a, b) => {
    let str1 = a + '' + b;
    let str2 = b + '' + a;
    return str1 < str2 ? -1 : 1
  })
  console.log(numbers)
  let res = ''
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i]
  }
  console.log(res)
  return res
}

PrintMinNumber([3, 5, 1, 4, 2])

function FindContinuousSequence(sum) {
  // write code here
  let res = [], pre = 1, next = 2;
  while (pre < next) {
    let cur = (pre + next) * (next - pre + 1) / 2
    if (cur === sum) {
      let list = []
      for (let i = pre, i <= next; i++) {
        list.push(i)
      }
      res.push(list)
      next++
    } else if (cur < sum) {
      next++
    } else {
      pre++
    }
  }
  return res
}
FindContinuousSequence

function myPromise(fn) {
  const that = this
  this.value = null
  this.state = 'PENDING'

  that.resolveCallbacks = []
  that.rejectCallbacks = []

  function resolve(value) {
    if (that.state === 'PENDING') {
      that.value = value
      that.state = 'RESOLVED'
      that.resolveCallbacks.map((cb) => cb(that.value))
    }
  }

  function reject(value) {
    if (that.state === 'PENDING') {
      that.state = 'REJECTED'
      that.value = value
      that.rejectedCallbacks.map(cb => cb(that.value))
    }
  }
  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}


const pro = new Promise((resolve, reject) => {
  const innerpro = new Promise((resolve, reject) => {
    // setTimeout(() => {
    resolve(1);
    console.log(2);
    resolve(3);
  });
  innerpro.then(res => console.log(res));
  resolve(4);
  console.log("pro");
})
pro.then(res => console.log(res));
console.log("end");

let line = '12000000'
let flag = ''
let arr = line.split('')
if (arr[0] === '-') {
  flag = '[负]'
  arr.shift()
}
function returnCNStr(arr) {
  let resStr = arr.map((item, index) => {
    item = returnCNNumber(item)
    index = arr.length - index - 1
    if(index === 0) return item
      switch (index % 4) {
        case 0:  item += index % 8 === 0 ? '亿' : '万'
        case 1:  item += '拾'
        case 2:  item += '佰'
        case 3:  item += '仟'
        default:
          break;
      }
    return item
  })
  resStr = resStr.map((item, index) => {
    let arr = item.split('')
    if(arr[0] === '零'){
      console.log('为零')
      arr.shift()
      if (arr[0] == '万' || arr[0] == '亿') {
        arr.shift()
      }
    }
    console.log(arr)
    return arr.join('')
  })
  return flag + resStr.join('') + '圆'
}

function returnCNNumber(str) {
  switch (str) {
    case '0': return '零'
    case '1': return '壹'
    case '2': return '贰'
    case '3': return '叁'
    case '4': return '肆'
    case '5': return '伍'
    case '6': return '陆'
    case '7': return '柒'
    case '8': return '捌'
    case '9': return '玖'

    default:
      break;
  }
}
console.log(returnCNStr(arr))

var fn = (() => {
  var value = 0
  return () => {
    return ++value
  }
})()


console.log(fn())
console.log(fn())



function find(startDate, endDate) {
  let start = startDate.split('-');
  let end = endDate.split('-');
  let res = []
  start = start.map(item => parseInt(item));
  end = end.map(item => parseInt(item))
  if (start[0] > end[0]) {
    return res
  }
  if (start[0] === end[0]) {
    let s = start[1], e = end[1]
    while (s <= e) {
      res.push(`${start[0]}-${s}`)
      s++
    }
  }
  else if (start[0] < end[0]) {
    let startYear = start[0], endYear = end[0]
    while(startYear < endYear){
      let s = start[1], e = end[1]
      while (s <= e) {
        res.push(`${startYear}-${s}`)
        s++
      }
      startYear++
    }
  }
  return res
}

console.log(find('2015-5-5', '2016-7-7'))

function fn(arr) {
  let len = arr[0]
  let newArr = []
  for(let i = 0; i < len - 1 ; i++){
    newArr[i][len - 1 - i] = Arr[0][i]
  }
  for (let i = 0; i < len - 1; i++) {
    newArr[len - 1][len - 1 - i] = Arr[i][len - 1]
  }
  for (let i = len - 1; i > 0; i--) {
    newArr[len - 1][len - 1 - i] = Arr[i][len - 1]
  }
}

function dp_opt(arr) {
  let opt = new Array(arr.length)
  opt[0] = arr[0]
  opt[1] = Math.max(arr[0], arr[1])
  for (let i = 2; i < opt.length; i++) {
    opt[i] = Math.max(opt[i - 2] + arr[i], opt[i - 1])
  }
  return opt[opt.length - 1]
}
console.log(dp_opt([4, 1, 1, 9 ,3]))