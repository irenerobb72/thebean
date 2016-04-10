import addToCart from './reductions/addToCart'
import removeFromCart from './reductions/removeFromCart'
import initialState  from './data/initial-state'


function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return addToCart(state)
    case 'REMOVE_FROM_CART':
      return removeFromCart(state)
  }
  return state
}

export default reducer
