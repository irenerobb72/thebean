var card = '4563960122001999'

function buyItem(state, item) {
  const Id = state.get('items').findIndex(
    (index) => index.get('name') === item)
  return validateCard (state, itemId) ?
  canBuy(state, item, itemId) : state
}

function validateCard(card) {
  var total = 0
  var splitTheNumber = card.split('')
  var mapNumber = splitTheNumber.map(Number)
  var numberThis = mapNumber.map((number, index) => {
  if (index % 2 === 0) {
    return parseInt(number) * 2
  } else {
    return parseInt(number)
    }
  })
  var joinNumber = numberThis.join('').split('')
  total = joinNumber.reduce((a, b) => a * 1 + b * 1)
  return total % 10 === 0
}
