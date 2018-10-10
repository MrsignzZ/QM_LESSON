// isbn title  author
// public 有问题
// 私有化
// 立即执行函数
var Book =(function () {
  // 闭包
  var numOfBooks = 0;
  return function (newIsbn, newTitle, newAuthor) {
    //局部作用域内的变量
    console.log(newIsbn,newTitle,newAuthor,numOfBooks);

    var isbn, title, author;
    //private
    var checkedIsbn = function (isbn) {
      if (!isbn || typeof isbn != 'string') {
        throw new Error('isbn 有误');
      }
    }
    //public
    this.setTitle = function(newTitle) {
      title = newTitle || 'No Title Specified';
    }

    this.getTitle = function () {
      return title;
    }

    this.getIsbn = function () {
      return isbn;
    }

    this.setIsbn = function (newIsbn) {
      if(checkedIsbn(newIsbn)) {
        isbn = newIsbn;
      }
    }

    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    numOfBooks++;
    console.log(`创建了${numOfBooks}本书`);
    //constructor

    this.getNumOfBooks = function () {
      return numOfBooks;
    }
  }

})();

//静态方法 属于类的 可以直接在类上调用,不需要实例化
Book.convertToTitleCase = function (inputString) {
  return inputString.toUpperCase();
}

//原型链上的公有方法
Book.prototype = {
  display: function () {
    console.log(`这本书的书名是${this.getTitle()},作者是${this.getAuthor()}`);
  }
}

var book = new Book('123','飞鸟集','泰戈尔');
var book2 = new Book('123', 'HTML5高级程序设计', 'XXX');

console.log(book.getTitle());
console.log(book.getNumOfBooks());



