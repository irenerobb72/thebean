import { Map, List } from 'immutable'

const products = List([
  Map({
    id: 1,
    name: 'Case',
    money: 15,
    qty: 0
  }),
  Map({
    id: 2,
    name: 'Glasses',
    price: 20,
    qty: 0
  }),
  Map({
    id: 3,
    name: 'Shirt',
    price: 40,
    qty: 0
  }),
  Map({
    id: 4,
    name: 'Shoe',
    price: 100,
    qty: 0
  })
])

export default products
