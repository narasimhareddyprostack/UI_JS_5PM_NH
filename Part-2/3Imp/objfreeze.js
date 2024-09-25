let product = {
    pid:'P101',
    pname:"Marker Pen",
    price:30
}
product.discout = 10
console.log(product)
console.log(Object.isFrozen(product))  //false
Object.freeze(product)
console.log(Object.isFrozen(product))  //true
