import { IntroBanner, BannerContent, Item, CoffeeList } from './styles'
import CoffeImage from '../../assets/coffeImg.png'
import bgBanner from '../../assets/Vector.png'
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import { CoffeeCard } from '../../components/cardCoffe/card'
import { coffees } from '../../../data.json'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider'

export function Home() {
  const { addItemCart } = useContext(CartContext)

  return (
    <>
      <IntroBanner>
        <div className="background">
          <img src={bgBanner} alt="" />
        </div>
        <BannerContent>
          <div className="title">
            <h1>
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver,
              a qualquer hora
            </h3>
          </div>
          <div className="items">
            <Item $colorBg="yellow-dark">
              <span>
                <ShoppingCartSimple size={16} weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </Item>
            <Item $colorBg="base-text">
              <span>
                <Package size={16} weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </Item>
            <Item $colorBg="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </Item>
            <Item $colorBg="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </Item>
          </div>
        </BannerContent>
        <div className="banner_image">
          <img src={CoffeImage} alt="" />
        </div>
      </IntroBanner>
      <CoffeeList>
        <h1>Nossos cafés</h1>
        <div className="list">
          {coffees.map(coffee => (
            <CoffeeCard
              addItemCart={addItemCart}
              key={coffee.id} coffee={coffee}
            />
          ))}
        </div>
      </CoffeeList>

    </>
  )
}
