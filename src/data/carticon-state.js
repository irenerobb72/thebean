import { Map, List } from 'immutable'
import { products } from './product-state'

const carticon = List([
  Map({
    products: 0,
    total: 0
  })
])

export default carticon
