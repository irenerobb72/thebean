import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id:1, name:'The Glass Castle', author:'Jeannette Walls', price:10, qty:1},
    {id:2, name:'Dune', author:'Frank Herbert', price:15, qty:1},
    {id:3, name:'Memoris of a Geisha', author:'Arthur Golden', price:9, qty:1},
    {id:4, name:'1984', author:'George Orwell', price:7, qty:1},
    {id:5, name:'Stranger in a Strange Land', author:'Robert A. Heinlein', price:12, qty:1}
  ],
  cart: [1,2]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return state
    case 'REMOVE_PRODUCT_FROM_CART':
      return state
    default:
      return state
  }
}
