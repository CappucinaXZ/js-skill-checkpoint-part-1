// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
const inventory2 = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 2000 },
	{ name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function checkQuantity(inventorys){
  let lowest = Number.MAX_SAFE_INTEGER
  let ans = null
  console.log(lowest)
  console.log(inventorys)
  console.log(inventorys.length)
  for(let i=0;i<inventorys.length;i++){
    console.log(inventorys[i])
    console.log(inventorys[i].quantity)
    if(inventorys[i].quantity < lowest){
      lowest = inventorys[i].quantity
      ans = i;
    }
  }
  console.log(ans)
  console.log("สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ "+ inventory[ans].name + " ซึ่งมี " + inventory[ans].quantity+" ชิ้น")
}
checkQuantity(inventory)
checkQuantity(inventory2)