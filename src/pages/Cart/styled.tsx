import styled from 'styled-components'

interface payButtonProps {
  $active?: boolean
}

export const Container = styled.main`
  form {
    margin-top: 4rem;
    gap: 3.2rem;
    display: flex;

  }
`

export const Checkout = styled.div`
  max-width: 64rem;
  width: 100%;
 

  .formContainer {
    background: ${(props) => props.theme['base-card']};
    padding: 4rem;
    margin-top: 1.5rem;
    border-radius: .6rem;

    .formHeader {
      
      display: flex;
      gap: .8rem;

      svg {
        color:${(props) => props.theme['yellow-dark']}
      }

      h3 {
        line-height: 130%;
        font-weight: 400;
        color:${(props) => props.theme['base-subtitle']} ;
      }

      p {
        color:${(props) => props.theme['base-text']}
      }
    }
  }

`

export const FormContainer = styled.div`

    margin-top: 3.2rem;
    gap: 1.2rem;
    display: grid;
    grid-template-columns: 20rem 27.6rem 6rem   ;
    grid-template-areas: 
    "cep  vazio vazio" 
    "rua rua rua"
    "number complemento complemento"
    "bairro cidade uf "
    ;

  
`
export const Payment = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 4rem;
  margin-top: 1.5rem;
  border-radius: .6rem;

  .paymentHeader {
    display: flex;
    gap: .8rem;

    h3 {
        line-height: 130%;
        font-weight: 400;
        color:${(props) => props.theme['base-subtitle']} ;
    }

    p {
        color:${(props) => props.theme['base-text']}
    }
  }

  .paymentOptions {
    display: flex;
    gap: 1.2rem;
    margin-top: 3.2rem;
  }

  svg {
    color: ${props => props.theme['purple']};
  }
  
`

export const PayButton = styled.button<payButtonProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  min-width: 17.8rem;
  border-radius: .6rem;
  background: ${props => props.$active
    ? props.theme['purple-light']
    : props.theme['base-button']};
  border: 1px solid ;
  border-color: ${props => props.$active
    ? props.theme.purple
    : 'transparent'};
  font-size: 1.2rem;
  text-transform: uppercase;
  padding: 1.6rem;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['base-hover']}
  }
`


export const CartList = styled.div`
  max-width: 44.8rem;
  width: 100%;
  
`

export const CoffeeList = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;

`

export const CardContainer = styled.div`
  margin-top: 1.5rem;
  padding: 4rem;
  background: ${props => props.theme['base-card']};
  border-radius: .6rem 4.4rem .6rem 4.4rem;
`

export const TotalOrder = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  margin-top: 1rem;

  

  .totalItems,.totalDelivery {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    color: ${props => props.theme['base-text']};

    p{
      font-size: 1.4rem;
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-weight: 700 ;
    color: ${props => props.theme['base-subtitle']};
    font-size: 2rem;
  }

`

export const ConfirmButton = styled.button`

  width: 100%;
  background: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  border: none;
  padding: 1.2rem;
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: .6rem;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 2.4rem;

  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }
  

`
