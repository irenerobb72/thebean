function buyItem() {
  const productPrice = state.get('products').findIndex(
    (index) => index.get('price') === product)
  const productName = state.get('products').findIndex(
    (index) => index.get('name') === product)
}

export default buyItem
