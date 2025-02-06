import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'
import { OrderContainer, SuccessContainer } from './styles'
import successImg from '../../assets/Illustration.svg'

export function Success() {
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
              <p>Entrega em <b>Rua João Daniel Martinelli, 102</b></p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
            </span>
          </div>
        </div>
        <img src={successImg} alt="" />
      </OrderContainer>

    </SuccessContainer>
  )
}
