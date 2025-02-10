import styled from 'styled-components'

interface ContainerProps {
  $active: boolean
}

interface BoxProps {
  $grid: string
}

export const Box = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  grid-area: ${props => props.$grid};

  span {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: ${({theme})=> theme['yellow-dark']};
  }
`

export const Container = styled.div <ContainerProps>`
  display: flex;

  max-width: 100%;
  padding: 1.2rem;
  border-radius: .4rem;
  background: ${props => props.theme['base-input']};

  border: 1px solid;
  border-color: ${props => props.$active
  ? props.theme['yellow-dark']
  : props.theme['base-button']};

`

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .4rem;

  width: 100%;

  input {
    font-size: 1.4rem;
    background: none;
    border: none;
    outline: none;
    color: ${props => props.theme['base-text']};
    appearance: none
    
  }

  input::placeholder {
    color: ${props => props.theme['base-label']}
  }
  
  span {
    font-size: 1.2rem;
    font-family: 'Roboto Italic';
    color: ${props => props.theme['base-label']} ;
  }
`
