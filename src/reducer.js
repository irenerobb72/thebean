import buyItem from './reductions/buyitem.js'
import checkout from './reductions/checkout.js'

function reducer(state = initialState, action) {
    switch (action.type) {
      case 'BUY_ITEM':
          return buyItem(state, action.task)
      case 'CHECKOUT':
        return checkout(state)
    }
    return state
}

export default reducer
