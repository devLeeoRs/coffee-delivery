import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  width: 100%;
  padding: 2.4rem 0 2.4rem 0;
  border-bottom: 1px solid ${props => props.theme['base-button']};

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  .info{
    margin-left: 2rem;

    h4 {
      font-weight: 400;
      color: ${props => props.theme['base-subtitle']};
    }
   
  }

  .actions{
    display: flex;
    gap: .6rem;
    margin-top: .8rem;
  }

  .price {
    margin-left: auto;
    font-weight: 700;
    color: ${props => props.theme['base-text']};
    font-size: 1.6rem;
  }

`

export const ButtonRemove = styled.button`

    background: ${props => props.theme['base-button']};
    color:${props => props.theme['base-text']} ;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    padding: 0 .8rem ;
    gap: .4;
    border: none;
    border-radius: .6rem;
    cursor: pointer;

    svg {
      color: ${props => props.theme.purple}
    }

    &:hover {
      background: ${props => props.theme['base-hover']};
    }

`
