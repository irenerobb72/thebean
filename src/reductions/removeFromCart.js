function removeFromCart() {
  let newState = state
  const productTotal = state.get('products')
  newState = state.updateIn('cart')
  const cartTotal = state.get('prices')
}
