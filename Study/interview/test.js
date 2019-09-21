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

  for (let i = 0,  j = poly.length - 1; i < j; i++) {
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
  if(!m.has(element)) {
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



const numArr1 = [100,22,23]
const numArr2 = [11,34,40, 22]
console.log(numArr1.concat(numArr2).sort((a, b) => a-b))



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

let arr = [1, 4, 5, 2, 9 ,10 ,7]

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
