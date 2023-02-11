// const numbers = [45, 65, 23, 98, 19];

// // for(let i =0; i < numbers.length; i++){
// //     const number = numbers[i];
// //     console.log(number);
// // }

// // for of loop
// for(const number of numbers){
//     console.log(number);
// }

const products = [
    {id:1, name:'walton phone', price: 19000},
    {id:2, name:'iphone', price: 190000},
    {id:3, name:'mac book air', price: 119000},
    {id:4, name:'lenovo yoga laptop', price: 112000},
    {id:5, name:'Dell laptope', price: 89000},
    {id:6, name:'Samsung phone note 22', price: 90000},
    {id:7, name:'nokia phone old age ', price: 90000},
    {id:6, name:'One plus phone mt 11', price: 90000},
];
// for(const product of products){
//     console.log(product);
// }

function matchProducts (products, search){
    const matched = [];
    for (const product of products){
    if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
    }
  }
  return matched;
}
const result = matchProducts(products, 'phone');
console.log(result);
