import styled from 'styled-components'

export const IntroBanner = styled.section`
  height: 54.4rem;
  position: relative;
  align-items: center;
  display: flex;
  

  
  .banner_image {
    flex: 1;
    margin-left: 6.6rem;
    max-width:47.6rem
  }
  .background img {
    position: absolute;
    z-index: -1;
    top: 1px;
    width: 114rem;
    height: 54.4rem;
    filter:blur(50px);
    opacity: 90%;
  }

`

export const BannerContent = styled.div`
display: flex;
flex-direction: column;
gap:6.6rem;

.title {
display: flex;
gap: 1.6rem;
flex-direction: column;
max-width: 58.8rem;

}

h1 {
  font-family: 'Baloo 2',sans-serif;
  font-size: 4.8rem;
  font-weight:800;
  line-height: 140%;
}

h3 {
  font-size: 20px;
  line-height: 130%;
  font-weight: 500;
  color: ${(prop) => prop.theme['base-subtitle']};
  margin-top: 1.6rem;
}

.items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem ;
  flex-direction: column;
}
 
`

export const Item = styled.div<{ $colorBg: string }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 999px;
    background: ${({ theme, $colorBg }) => theme[$colorBg]};
    color: ${props => props.theme.white};
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    color:${props => props.theme['base-text']} ;
  }
`

export const CoffeeList = styled.section`
  margin-top: 3.2rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3.2rem;
    color: ${props => props.theme['base-subtitle']};
  }

  .list{
    margin-top: 3.4rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 4rem;
    column-gap: 3.2rem;
  }
`
