import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  gap: .4rem;

  h1 {
    font-size: 3.2rem;
    color: ${props => props.theme['yellow-dark']};
    font-family: 'Baloo 2';
  }

  p {
    font-size: 2rem;
    color: ${props => props.theme['base-subtitle']};

  }
`
export const OrderContainer = styled.div`
  
  margin-top: 4rem;
  display: flex;
  gap: 10rem;

  .orderInfo {

    max-width: 52.6rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    border-radius: 0.6rem 3.6rem 0.6rem 3.6rem;
    background: #FAFAFA;
    position: relative;
  
    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(90deg,#DBAC2C, #8047F8);
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      z-index: -1;
      padding: 1px;
      border-radius: 0.6rem 3.6rem 0.6rem 3.6rem;
    }
    
    .deliveryInfo,
    .timeDelivery,
    .paymentDelivery {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: ${props => props.theme['base-text']};

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 999px;
      
      color: #fff;

      &.info {
        background: ${props => props.theme.purple};
      }
      &.time {
        background: ${props => props.theme.yellow};
      }
      &.delivery {
        background: ${props => props.theme['yellow-dark']};
      }
    }
  }
  }

  

`
