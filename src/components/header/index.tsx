import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContextProvider'

export function Header() {
  const { cart } = useContext(CartContext)
  const [location, setLocation] = useState<{ city: string; state: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Faz a requisição para OpenStreetMap (Nominatim)
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
            .then((response) => response.json())
            .then((data) => {
              if (data.address) {
                const city = data.address.city || data.address.town || data.address.village || "Cidade não encontrada";
                const state = data.address.state || "Estado não encontrado";
                setLocation({ city, state });
              } else {
                setError("Endereço não encontrado.");
              }
            })
            .catch(() => setError("Erro ao buscar o endereço."));
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocalização não é suportada pelo seu navegador.");
    }
  }, []);

  return (
    <HeaderContainer>
      <NavLink to="/"> <img src={logo} alt="" /></NavLink>
      <nav>
        <NavLink className="location" to="/" title="Porto Alegre">
          <MapPin size={22} weight="fill" />
          {location ? `${location.city} - ${location.state}` : "Localizando..."}

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
