import { Minus, Plus } from 'phosphor-react'
import { Container } from './style'

interface InputNumberProps {
  quantity: number
  incrementQuantity: ()=> void
  decrementQuantity: ()=> void
}

export function InputNumber(
  {
    quantity,
    decrementQuantity,
    incrementQuantity,
  }:InputNumberProps) {
  return (
    <Container>
      <button onClick={decrementQuantity} className="minusButton">
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity} className="plusButton">
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  )
}
