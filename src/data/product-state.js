import { fromJS } from 'immutable'

const products = fromJS{[
  products: [
    {id: 1, name:'Case', price:15, qty:0},
    {id: 2, name:'Glasses', price:20, qty:0},
    {id: 3, name:'Shirt', price:40, qty:0},
    {id: 4, name:'Shoe', price:100, qty:0},
  ]
})

export default products
