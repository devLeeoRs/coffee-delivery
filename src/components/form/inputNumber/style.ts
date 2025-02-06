import styled from 'styled-components'

export const Container = styled.div`
  width: 7.2rem;
  height: 3.8rem;
  background: ${props => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;
  border-radius: .8rem;

  .minusButton, .plusButton {
    color: ${props => props.theme.purple};
    font-weight: bold;
    cursor: pointer;
    border: none;
    background: none;
  }
`
