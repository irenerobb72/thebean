function addToCart(state, product) {
  let newState = state
  const productTotal = state.get('products')
  newState = newState.updateIn(['cart'])
  const cartTotal = state.get('prices')
  cartTotal.map((value, key) => newState = newState.updateIn(['cart', key],
      (stateValue) => stateValue+value))
  return newState
}
