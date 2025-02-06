import { Buy, Container, Tags } from './styles'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

interface CoffeeProps {
  coffee: {
    id: string,
    title: string,
    description: string,
    tags: string[],
    price: number,
    image: string,
  }
}

export function CoffeeCard({ coffee }:CoffeeProps) {
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
          <div className="actions">
            <div className="minusButton">
              <Minus size={14} weight="bold" />
            </div>
            <span>1</span>
            <div className="plusButton">
              <Plus size={14} weight="bold" />
            </div>
          </div>
          <div className="addCart">
            <ShoppingCartSimple size={22} weight="fill" />
          </div>
        </div>
      </Buy>
    </Container>
  )
}
