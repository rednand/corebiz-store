import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1485px;
  margin: auto;
  padding-top: 4rem;
  padding-bottom: 6rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: 20px;
  height: 200px;
  border-radius: 5px;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url("https://www.corebiz.ag/wp-content/themes/corebiz-global/assets/images/worldwide.png");

  @media(max-width: 1024px) {
    width: 80%;
  }
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: #fcc200;
  margin-top: 0;
  margin-bottom: 2.5rem;
`

export const Info = styled.p`
  font-size: 0.8rem;
  color: #FFF;
  margin-top: 0;
  span {
    display: block;
    text-align: center;
  }
`
