import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CardContainer,
  CartList,
  Checkout,
  CoffeeList,
  ConfirmButton,
  Container,
  FormContainer,
  PayButton,
  Payment,
  TotalOrder,
} from './styled'
import { InputFlex } from '../../components/form/Input'
import { CardSlim } from '../../components/cardCoffe/cardSlim'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContextProvider'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

interface FormInput {
  city : string
  complement: string
  district: string
  number: number
  street: string
  uf: string
  zipCode: number
}

const newOrderFormValidationSchema = zod.object({
  city : zod.string().min(1, "Informe o nome da cidade "),
  complement: zod.string(),
  district: zod.string().min(1,"Informe o bairro"),
  number: zod.number({ invalid_type_error: "Informe um numero" }),
  street: zod.string().min(1, "Informe o nome da rua "),
  uf: zod.string().min(1, "Informe o UF"),
  zipCode: zod.number({ invalid_type_error: "Informe um CEP válido" })

})

export function Cart() {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('')

  function handleSelectPayment(method:string) {
    setPaymentMethod(method)
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
    resolver:zodResolver(newOrderFormValidationSchema)
  })

  useEffect(() => {
    const newTotal = cart
      .reduce((sum, item) => sum + (item.price * item.quantity) + 3.5, 0)
    setTotal(newTotal)
  }, [cart])



  function handleCreateNewOrder(data: any) {
    console.log(data);
  }

  console.log(errors.city)

  return (
    <Container>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
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
            <FormContainer >
              <InputFlex
                grid="cep"
                placeholder="CEP"
                type="number"
                error={errors.zipCode}
                {...register('zipCode', {valueAsNumber: true})}
              />
              <InputFlex
                grid='rua'
                placeholder="Rua" type="text"
                error={errors.street}
                {...register('street')}
              />
              <InputFlex 
                grid="number" 
                placeholder="Numero" 
                type="number"
                error={errors.number}
                {...register('number', {valueAsNumber: true})}
               />
              <InputFlex
                grid="complemento"
                placeholder="Complemento" 
                error={errors.complement}
                optional type="text"
                {...register('complement')}
              />
              <InputFlex 
                grid="bairro" 
                placeholder="Bairro" 
                type="text" 
                error={errors.district}
                {...register('district')}
                />
                
              <InputFlex 
                grid="cidade" 
                placeholder="Cidade" 
                type="text" 
                error={errors.city}
                {...register('city')}
              />
              <InputFlex 
                grid="uf" 
                placeholder="UF" 
                type="text" 
                error={errors.uf}
                {...register('uf')}
                />
            </FormContainer>

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
              <PayButton
                $active={paymentMethod === 'credit'}
                onClick={() => handleSelectPayment('credit')}
              >
                <CreditCard size={16} />
                Cartão de crédito
              </PayButton>
              <PayButton
                $active={paymentMethod === 'debit'}
                onClick={() => handleSelectPayment('debit')}
              >
                <Bank size={16} />
                cartão de débito
              </PayButton>
              <PayButton
                $active={paymentMethod === 'money'}
                onClick={() => handleSelectPayment('money')}
              >
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
            <ConfirmButton type="submit"> confirmar pedido </ConfirmButton>
          </CardContainer>

        </CartList>
      </form>
    </Container>
  )
}
