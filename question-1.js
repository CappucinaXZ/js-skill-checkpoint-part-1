// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
//Q1
myTodo.push({id:5,todo: "Walk the dog"})
console.log(myTodo)
//Q2
console.log(myTodo[3])
myTodo[3].todo ="Go to the gym"
console.log(myTodo[3])
//Q3
console.log(myTodo)
//delete myTodo[4] test
myTodo.pop()

//Q4
console.log(myTodo)

//Q5
let last = (myTodo.length-1)
console.log(last)
console.log("To-do id: "+ myTodo[last].id +" "+ myTodo[last].todo)