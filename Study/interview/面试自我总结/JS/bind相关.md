- __call__ 与 __apply__ 的作用是完全相同的，都是用来改变this的指向问题，只是传入参数形式有所不同

- 除了第一个参数以外，call接受一个参数列表，apply接受的是一个参数数组

- __bind__ 同样也是用来改变参数this指向的，只不过它会返回一个函数