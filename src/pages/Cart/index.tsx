import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { InputFlex } from '../../components/form/Input'
import {
  CardContainer,
  CartList,
  Checkout,
  CoffeeList,
  ConfirmButton,
  Container,
  Form,
  PayButton,
  Payment,
  TotalOrder,
} from './styled'
import { CardSlim } from '../../components/cardCoffe/cardSlim'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContextProvider'

export function Cart() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = cart
      .reduce((sum, item) => sum + item.price * item.quantity + 3.5, 0)
    setTotal(newTotal)
  }, [cart])

  return (
    <Container>
      <Checkout>
        <h1>Complete seu pedido</h1>
        <div className="formContainer">
          <div className="formHeader">
            <MapPinLine size={22} />
            <span>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>

          </div>
          <Form>
            <InputFlex name="cep" placeholder="CEP" type="number" />
            <InputFlex name="rua" placeholder="Rua" type="text" />
            <InputFlex name="number" placeholder="Numero" type="number" />
            <InputFlex
              name="complemento"
              placeholder="Complemento" optional type="text"
            />
            <InputFlex name="bairro" placeholder="Bairro" type="text" />
            <InputFlex name="cidade" placeholder="Cidade" type="text" />
            <InputFlex name="uf" placeholder="UF" type="text" />
          </Form>

        </div>
        <Payment>
          <div className="paymentHeader">
            <CurrencyDollar size={22} />
            <span>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega.
                Escolha a forma que deseja pagar
              </p>
            </span>
          </div>
          <div className="paymentOptions">
            <PayButton active>
              <CreditCard size={16} />
              Cartão de crédito
            </PayButton>
            <PayButton>
              <Bank size={16} />
              cartão de débito
            </PayButton>
            <PayButton>
              <Money size={16} />
              dinheiro
            </PayButton>
          </div>
        </Payment>
      </Checkout>
      <CartList>
        <h1>Cafes Selecionados </h1>
        <CardContainer>
          <CoffeeList>
            {cart.map(cart =>
              <CardSlim
                id={cart.id}
                key={cart.id}
                title={cart.title}
                image={cart.image}
                quantity={cart.quantity}
                price={cart.price}
              />,
            )}
          </CoffeeList>
          <TotalOrder>
            <div className="totalItems">
              <p>Total de itens</p>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <div className="totalDelivery">
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>
            <div className="total">
              <p>Total</p>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </TotalOrder>
          <ConfirmButton> confirmar pedido </ConfirmButton>
        </CardContainer>

      </CartList>
    </Container>
  )
}
