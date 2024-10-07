// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
//Q1
inventory[0].quantity = 200;
console.log(inventory);

//Q2
inventory.push({name:"Orange",price:20,quantity:300})
console.log(inventory)

//Q3
let sum = 0
for(let i =0 ;i<inventory.length;i++){
  sum += (inventory[i].price*inventory[i].quantity)
}
console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก " + sum + " บาท")

