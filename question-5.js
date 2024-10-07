// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products,promotionCode){
  let sum = 0;
  let result = sum;
  for(let i =0;i<products.length;i++){
    sum += (products[i].price*products[i].quantity)
  }
  console.log(sum)
  if(promotionCode === "SALE20"){
    result = sum * 0.8; //charge 80%
  }else if(promotionCode === "SALE50"){
    result = sum *0.5; //charge 50%
  }else{
    result = sum;
  }
  return result
}

console.log(calculateTotalPrice(products,promotionCode))