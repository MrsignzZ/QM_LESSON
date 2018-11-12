const fs = require('fs');

try {
  // Promise也可以，then链
  const fileAPromise = new Promise((resolve, reject) => {
    fs.readFile('./a.txt', 'utf8', function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
  const fileBPromise = new Promise((resolve, reject) => {
    fs.readFile('./b.txt', 'utf8', function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
  const fileCPromise = new Promise((resolve, reject) => {
    fs.readFile('./c.txt', 'utf8', function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
  Promise.all([fileAPromise, fileBPromise, fileCPromise])
    .then(res => {
      console.log(res)
    })

  // const dataA = fs.readFileSync('./a.txt', 'utf8');
  // const dataB = fs.readFileSync('./b.txt', 'utf8');
  // const dataC = fs.readFileSync('./c.txt', 'utf8');
} catch (e) {
  console.log('读取文章失败' + e.message);
}
// try {
//   fs.readFile('./a.txt', 'utf8', function (err, data) {
//     console.log(data)
//     fs.readFile('/b.txt', 'utf8', function (err, data) {
//       console.log(data)
//       fs.readFile('/c.txt', 'utf8', function (err, data) {
//         console.log(data)
//       })
//     })
//   })

// } catch (e) {

// }
