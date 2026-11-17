const cart = [
  { name: "Keyboard", price: 2500, quantity: 2 },
  { name: "Mouse", price: 1500, quantity: 1 },
  { name: "Headphones", price: 3000, quantity: 1 }
];

const calculateTotal = cart.reduce((total,item)=>{
  return total += item.price * item.quantity
},0)


const getFinalPrice = (price)=>{
  let finalPrice = 0
  if(calculateTotal > 5000){
    finalPrice = calculateTotal - calculateTotal*0.1
    return`Your actual price is ${price} after discount final price is ${finalPrice}`
  }
  else{
    finalPrice = calculateTotal
    return`Your final price is ${finalPrice} there's no discount because your total below 5000`
  }
}

console.log(getFinalPrice(calculateTotal))