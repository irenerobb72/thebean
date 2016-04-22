import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
  ]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'REMOVE_PRODUCT_FROM_CART':
      return state.set('cart', state.get('cart').slice(1, index).concat(action.slice[index]))
    default:
      return state
  }
}
