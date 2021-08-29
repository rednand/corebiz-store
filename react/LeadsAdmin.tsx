import React, { useState, useEffect } from 'react'
import http from './Clients/AWSClient'
import { Container, Card, CardClient, Title, Info } from './styles/leadsAdmin'
interface Lead {
  id: string;
  nome: string;
  fone: string;
  email: string;
  data: string;
  prospecto: boolean;
}
 
const LeadsAdmin: StorefrontFunctionComponent = () =>  {
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
          return(
            <>
              {
                lead.prospecto?
                  <CardClient>
                    <Title>{lead.nome}</Title>
                    <Info><span>Cliente:</span> SIM</Info>
                    <Info><span>Email:</span> {lead.email}</Info>
                    <Info><span>Telefone:</span> {lead.fone}</Info>
                    <Info><span>Cliente desde:</span> {lead.data}</Info>
                  </CardClient>
                  :
                  <Card>
                    <Title>{lead.nome}</Title>
                    <Info><span>Cliente:</span> NÃO</Info>
                    <Info><span>Email:</span> {lead.email}</Info>
                    <Info><span>Telefone:</span> {lead.fone}</Info>
                </Card>
              }
            </>
          )
        })
      }
    </Container>
  )
}

LeadsAdmin.schema = {
  title: "editor.LeadsAdmin.title",
  description: "editor.LeadsAdmin.description",
  type: "object",
  properties: {},
};

export default LeadsAdmin
