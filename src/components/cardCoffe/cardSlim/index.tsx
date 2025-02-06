import { ButtonRemove, Container } from './styles'
import { InputNumber } from '../../form/inputNumber'
import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContextProvider'

interface cardProps {
  id: string
  title: string,
  price: number
  image: string
  quantity: number
}

export function CardSlim({ image, title, price, quantity, id } : cardProps) {
  const {
    decrementQuantityItem,
    incrementQuantityItem,
    removeItemCart,
  } = useContext(CartContext)

  function handleIncrementQuantityItem() {
    incrementQuantityItem(id)
  }

  function handleDecrementQuantityItem() {
    decrementQuantityItem(id)
  }

  function handleRemoveItem() {
    removeItemCart(id)
  }
  return (
    <Container>
      <img src={image} alt="" />
      <div className="info">
        <h4>{title}</h4>
        <div className="actions">
          <InputNumber
            decrementQuantity={handleDecrementQuantityItem}
            incrementQuantity={handleIncrementQuantityItem}
            quantity={quantity}
          />
          <ButtonRemove onClick={handleRemoveItem}>
            <Trash size={16} weight="light" />
            Remover
          </ButtonRemove>
        </div>
      </div>
      <div className="price">
        <span>R$ {price.toFixed(2)}</span>
      </div>
    </Container>
  )
}
