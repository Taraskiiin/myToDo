import { SET_FILTER } from '../actions/filter'

const initialState = 'all'

const filterReducer = (state = initialState, action) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case SET_FILTER: {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default filterReducer
