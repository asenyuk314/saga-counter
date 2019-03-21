export interface CounterState {
  number: number
}

export interface CounterAction {
  type: string
  payload: CounterState
}
