import next from './reductions/next'

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'NEXT':
      return next(state)
  }
  return state
}

export default reducer
