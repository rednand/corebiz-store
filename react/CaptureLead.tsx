import React, { useState, useEffect } from 'react'
import http from './Clients/AWSClient'
import { Container, Card, Title, Info } from './styles/clientes'
interface Lead {
  id: string;
  nome: string;
  fone: string;
  email: string;
  prospecto: boolean;
  data: string;
}
 
const CaptureLead: StorefrontFunctionComponent = () =>  {
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
          if(lead.prospecto == false){
            return(<Card>
              <Title>{lead.nome}</Title>
              <Info>Cliente desde: <span>{lead.data}</span></Info>
            </Card>)
          }
          return
        })
      }
    </Container>
  )
}

export default CaptureLead
