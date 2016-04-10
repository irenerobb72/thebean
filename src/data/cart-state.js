import { Map, List } from 'immutable'
import {products} from './product-state'

const cart = List([
  cart: Map({
    products: 0
    total: 0
  })
])

export default cart
