import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
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
