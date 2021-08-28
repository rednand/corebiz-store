import React, { useState, useEffect } from 'react'
import http from './Clients/AWSClient'
import { Container, Card, Title, Info } from './styles/clientes'
interface Lead {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  prospecto: boolean;
}
 
const FormLead: StorefrontFunctionComponent = () =>  {
  const [leads, setLeads] = useState<Lead[]>([])
  useEffect(() => {
    http
      .get('/users')
      .then((response) => response.data)
      .then((data) => setLeads(data["Items"])
      )
    }, [])

  return(
    <Container>
      { 
        leads.map((lead)=>{
          if(lead.prospecto==true){
            return(<Card>
              <Title>{lead.nome}</Title>
              <Info>Cliente desde: <span>2020</span></Info>
            </Card>)
          }
          return
        })
      }
    </Container>
  )
}

export default FormLead
