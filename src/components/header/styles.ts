import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 10rem;
  padding: 3.4rem 0;
  align-items: center;
  justify-content: space-between;

   a {
    text-decoration:none;
    font-size: 1.4rem;
  }

  nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem ;
  }

  .location {
    display: flex;
    align-items: center;
    height: 3.8rem;
    border-radius: .8rem;
    padding: .8rem;
    gap: .4rem;

    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  .cart {
    display: flex;
    align-items: center;
    height: 3.8rem;
    border-radius: .8rem;
    padding: .8rem;
    position: relative;

    background-color: ${(props) => props.theme['yellow-light']};
    color:${(props) => props.theme['yellow-dark']} ;
    
    span {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(props) => props.theme['yellow-dark']};
      border-radius: 99rem;
      color: ${(props) => props.theme.white};
      font-size: 1.2rem;
      font-weight: bold;

      position: absolute;
      top: -.7rem;
      right: -.7rem;
    }
  }

`
