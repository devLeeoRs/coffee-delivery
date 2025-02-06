import { styled } from 'styled-components'

export const Container = styled.div`
  width: 25.6rem;
  height: 31rem;
  background: ${props => props.theme['base-card']};
  border-radius: .6rem 3.6rem .6rem 3.6rem;
  padding: 0 2rem 2rem 2rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  img{
    max-width: 12rem;
    max-height: 12rem;
    margin-top: -2rem;
  }

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2';
  }

  p{
    font-size: 1.4rem;
    color: ${props => props.theme['base-label']};
    text-align: center;
  }
`

export const Tags = styled.div`

  margin: 1.6rem 0;
  display: flex;
  gap: .4rem;


  p {
    background: ${props => props.theme['yellow-light']};
    border-radius: 10rem;
    padding: .4rem .8rem ;

    font-size: 1rem;
    line-height: 130%;
    font-weight: 700;
    color:${props => props.theme['yellow-dark']} ;
  }
`

export const Buy = styled.div`
  display: flex;
  align-items: center;
  gap: 2.0rem;
  margin-top: 3.3rem;

  .price {
    color: ${props => props.theme['base-text']};
  }

  .price span:first-child {
    font-size: 1.4rem;
  }

  .price span:last-child {
    font-family: 'Baloo 2';
    font-size: 2.4rem;
    font-weight: bold;
  }

  .buyActions {
    display: flex;
    gap: .8rem;
  }

  .actions {
    width: 7.2rem;
    height: 3.8rem;
    background: ${props => props.theme['base-button']};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    border-radius: .8rem;
  }

  .minusButton, .plusButton {
    color: ${props => props.theme.purple};
    font-weight: bold;
    cursor: pointer;
  }

  .addCart{
    height: 3.8rem;
    width: 3.8rem;
    background: ${props => props.theme['purple-dark']};
    border-radius: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color:${props => props.theme.white} ;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.purple};
    }
  }


`
