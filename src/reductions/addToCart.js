function addToCart() {
  const productPrice = state.get('products').findIndex(
    (index) => index.get('price') === product)
  const productName = state.get('products').findIndex(
    (index) => index.get('name') === product)
  const productTotal = productName()  
}
