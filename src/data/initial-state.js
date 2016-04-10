import {Map} from 'immutable'
import carticon from './carticon-state'
import cart from './cart-state'


const initialState = Map({
  carticon: carticon,
  cart: cart
})

export default initialState
