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
  background: #FFF;
  border: 0;
  color: #000;
  padding: 12px 24px;
  margin-bottom:20px;
  border-radius: 8px;
  border: 0;
  
  &::placeholder {
    color: #000
  }
`
export const Success = styled.h3`
  font-size: 2.5rem;
  color: #fcc200;
`

export const Button = styled.button`
  width: 100%;
  font-weight: 600;
  border-radius: 8px;
  border: 0;
  background: #fcc200;
  color: #000;
  text-align: center;
  text-transform: uppercase;
  padding: 14px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }
`

export const Error = styled.span`
  color: red;
  display:block;
  text-align: center;
  font-size: 1.5rem;
  padding: 20px 0
`
