import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'The Glass Castle', price: 10, qty: 1},
    {id: 2, name:'Dune', price: 15, qty: 1},
    {id: 3, name:'Memoris of a Geisha', price: 9, qty: 1},
    {id: 4, name:'1984', price: 7, qty: 1},
    {id: 5, name:'Stranger in a Strange Land', price: 12, qty: 1}
  ]
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
