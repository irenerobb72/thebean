function buyItem(state, item) {
  const Id = state.get('items').findIndex(
    (index) => index.get('name') === item)
}
