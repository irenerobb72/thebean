import { Map } from 'immutable'
import carticon from './carticon-state'
import cart from './cart-state'


let initialState = Map({
  carticon: carticon,
  cart: cart
})

export default initialState
