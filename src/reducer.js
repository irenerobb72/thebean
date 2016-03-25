

function reducer(state = initialState, action) {
    switch (action.type) {
      case 'BUY_ITEM':
          return buy(state, action.task)
      case 'CHECKOUT':
        return checkout(state)
    }
    return state
}

export default reducer
