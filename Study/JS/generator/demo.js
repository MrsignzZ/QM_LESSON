function* listPeople() {
  let i = 0
  i++
  yield i
  i++
  yield i
}
const people = listPeople()

console.log(people.next());



