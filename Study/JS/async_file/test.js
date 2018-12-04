var fileFinder = require('./demo1.js')
fileFinder('./src', function (err, filename) {
  if (err) {
    return console.error(err)
    console.log(filename)
  }
  console.log(filename);
})
// 1. cb
// 2. then
// 3. async wait
// 4. generate
// error