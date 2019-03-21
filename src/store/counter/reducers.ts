import { INCREASE, DECREASE } from './consts'
import { CounterState, CounterAction } from './types'

const initialState: CounterState = {
  number: 0
}

const counter = (state = initialState, action: CounterAction) => {
  const { number } = state
  switch (action.type) {
    case INCREASE:
      return { ...state, number: number + 1 }

    case DECREASE:
      return { ...state, number: number - 1 }

    default:
      return state
  }
}

export default counter
