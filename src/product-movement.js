export function addToCart() {
  return {
    type: 'ADD_TO_CART',
    product: product
  }
}

export function removeFromCart() {
  return {
    type: 'REMOVE_FROM_CART',
    product: product
  }
}
