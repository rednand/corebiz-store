import React, { useState, useEffect } from 'react'
import http from './Clients/AWSClient'
import { Container, Card, Title, Info } from './styles/clientes'
interface Lead {
  nome: string;
  data: string;
  prospecto: boolean;
}
 
const Clientes: StorefrontFunctionComponent = () =>  {
  const [leads, setLeads] = useState<Lead[]>([])
  useEffect(() => {
    http
      .get('/list')
      .then((response) => response.data)
      .then((data) => setLeads(data["Items"])
      )
    }, [])
  return(
    <Container>
      { 
        leads.map((lead)=>{
          if(lead.prospecto==false){
            return(<Card>
              <Title>{lead.nome}</Title>
              {
                lead.data? 
                  <Info>Cliente desde: <span>{lead.data}</span></Info>
                :
                  <></>
              }
            </Card>)
          }
          return
        })
      }
    </Container>
  )
}

export default Clientes
