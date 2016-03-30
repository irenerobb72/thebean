import buyItem from './reductions/buyitem'
import addToCart from './reductions/addToCart'
import removeFromCart from './reductions/removeFromCart'

function reducer(state = initialState, action) {
    switch (action.type) {
      case 'BUY_ITEM':
          return buyItem(state, action.task)
      case 'ADD_TO_CART':
        return addToCart(state)
      case 'REMOVE_FROM_CART':
        return removeFromCart(state)
    }
  return state
}

export default reducer
