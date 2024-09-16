interface item {
    name : string
    price: number
}
//two objects

const vegetables: item ={
     name  :'tomato',
    price : 100
}
const fruit: item ={
    name :'mango',
    price:200
}
console.log(`vegetable name: ${vegetables.name},vegetable price: ${vegetables.price}`)

console.log(`fruit name: ${fruit.name},fruit price: ${fruit.price}`)