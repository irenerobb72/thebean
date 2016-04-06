function removeFromCart() {
  let newState = state
  const updatedProductTotal = state.get('products')
  newState = state.updateIn(['cart'])
  const updatedPriceTotal = state.get('prices')
  updatedPriceTotal.map((value, key) => newState = newState.updateIn(['cart', key]
    (stateValue) => stateValue+value))
  return newState
}

export default removeFromCart
