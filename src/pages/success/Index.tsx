import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import { OrderContainer, SuccessContainer } from './styles'
import successImg from '../../assets/Illustration.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import { useParams } from 'react-router-dom'

export function Success() {

  const {id} = useParams()
  const {order} = useContext(CartContext)
  const currentOrder = order.find(order => order.id === id)
  

  
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <OrderContainer>
        <div className="orderInfo">
          <div className="deliveryInfo">
            <div className="icon info">
              <MapPin weight="fill" size={16} />
            </div>
            <span>
              <p>Entrega em <b>{currentOrder?.street.toUpperCase()},{currentOrder?.number}</b></p>
              <p>{currentOrder?.district.toUpperCase()} - {currentOrder?.city.toUpperCase()}, {currentOrder?.uf.toUpperCase()}</p>
            </span>
          </div>
          <div className="timeDelivery">
            <div className="icon time">
              <Timer weight="fill" size={16} />
            </div>
            <span>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </span>
          </div>
          <div className="paymentDelivery">
            <div className="icon delivery">
              <CurrencyDollarSimple size={16} />
            </div>
            <span>
              <p>Pagamento na Entrega</p>
              <strong> {currentOrder?.paymentMethod} </strong>
            </span>
          </div>
        </div>
        <img src={successImg} alt="" />
      </OrderContainer>

    </SuccessContainer>
  )
}
