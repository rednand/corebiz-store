import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1485px;
  margin: auto;
`

export const Input = styled.input`
  width: 100%;
  flex: 1;
  background: transparent;
  color: #FFF;
  padding: 12px 5px;
  margin-bottom:20px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid #FFF;
  
  &:focus{
    outline: 0;
    border-bottom: 1px solid #f1c233;
  }
  &::placeholder {
    color: #FFF
  }
`
export const Button = styled.button`
  width: 100%;
  font-weight: 600;
  border-radius: 5px;
  border: 2px solid #f1c233;
  background: #f1c233;
  color: #000;
  text-align: center;
  text-transform: uppercase;
  padding: 10px 14px;
  transition: filter 0.2s;
  cursor: pointer;
  margin-top: 25px;

  &:hover {
    border: 2px solid #f1c233;
    background: transparent;
    color: #FFF;
    /* filter: brightness(0.75); */
  }
`
export const Success = styled.h3`
  font-size: 1.5rem;
  color: #FFF;
`

export const Error = styled.span`
  color: #ff4c4c;
  display:block;
  text-align: center;
  font-size: 0.95rem;
  padding: 20px 0
`
