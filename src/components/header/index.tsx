import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider'

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/"> <img src={logo} alt="" /></NavLink>
      <nav>
        <NavLink className="location" to="/" title="Porto Alegre">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </NavLink>
        <NavLink className="cart" to="/cart">
          <span>{cart
            ? cart.length
            : 0}
          </span>
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
