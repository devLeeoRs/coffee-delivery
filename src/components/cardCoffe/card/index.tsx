import { useState } from 'react'
import { InputNumber } from '../../form/inputNumber'
import { Buy, Container, Tags } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import type { itemCart } from '../../../context/CartContextProvider'

interface CoffeeProps {
  coffee: {
    id: string,
    title: string,
    description: string,
    tags: string[],
    price: number,
    image: string,
  }
  addItemCart: (item:itemCart)=>void,
}

export function CoffeeCard({ coffee, addItemCart }:CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  function handleAddItemCart() {
    addItemCart({
      id: coffee.id,
      title: coffee.title,
      image: coffee.image,
      price: coffee.price,
      quantity,
    })
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(state => state - 1)
    }
  }

  return (
    <Container>
      <img src={coffee.image} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </Tags>
      <h2>{coffee.title}</h2>
      <p>{coffee.description}</p>
      <Buy>
        <div className="price">
          <span>R$ </span>
          <span>{coffee.price.toFixed(2)}</span>
        </div>
        <div className="buyActions">
          <InputNumber
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
          <button onClick={handleAddItemCart} className="addCart">
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </Buy>
    </Container>
  )
}
