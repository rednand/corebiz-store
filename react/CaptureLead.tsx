import React, { useState, useEffect } from 'react'
import http from './Clients/AWSClient'
interface Lead {
  id: string;
  nome: string;
  email: string;
  sobrenome: string;
  prospecto: boolean;
}
 
const CaptureLead: StorefrontFunctionComponent = () =>  {
  const [leads, setLeads] = useState<Lead[]>([])
  useEffect(() => {
    http
      .get('/users')
      .then((response) => response.data)
      .then((data) => setLeads(data["Items"])
      )
    }, [])

  return(
    <>
        {
          leads.map((lead) => {
            return(<p>{lead.nome}</p>)
          })
        }
    </>
  )
}

export default CaptureLead
