function debounce(fn, wait) {
  fn.timer = null;
  return function () {
    const args = arguments
    const context = this
    if (fn.timer) {
      clearTimeout(timer)
      fn.timer = null
    }
    fn.timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait);
  }
}