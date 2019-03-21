export interface CounterProps {
  number: number
  increaseAsync(): void
  decreaseAsync(): void
  increase(): void
  decrease(): void
}
