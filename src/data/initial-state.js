import Carticon from '/carticon-state.js'
import Cart from '/cart-state.js'

const initialState = Map({
  Carticon: Map({
    products: 0,
    total: 0
  }),
  Cart: Map({
    products: 0,
    total: 0
  })
})
