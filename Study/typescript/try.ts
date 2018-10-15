function greeter (person: string) {
  // return 123;
  return "Hello," + person;
}

var user:string = "Jane";

document.body.innerHTML = greeter(user);
