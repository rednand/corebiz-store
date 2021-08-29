import React, { useState } from 'react'
import http from './Clients/AWSClient'
import { Button, Container, Input, Error, Success } from './styles/formulario'

interface Lead {
  id: string;
  nome: string;
  sobrenome: string;
  email: string;
  prospecto: boolean;
}

const FormLead: StorefrontFunctionComponent = () =>  {
  
  let leadObj: Lead;
  const [error, setError] = useState(false)
  const [sendSuccess, setSendSuccess] = useState(false)
  const [lead, setLead] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    prospecto: null,
  });
  
  const handleCreateNewLead = (property: string, value: string) => {
    setLead((prev) => ({ ...prev, [property]: value }));
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    setError(false);
    e.preventDefault();
    if (!lead.email) {
      setError(true);
      return;
    }
    
    leadObj = {
      prospecto: false,
      nome: lead.nome,
      id: '9',
      email: lead.email,
      sobrenome: lead.sobrenome,
    };
    sendLead(leadObj);
  };
  
  const sendLead =  (lead: Lead) =>  {
    console.log(lead);
     http
      .put('/users', lead).then((res) => {
        console.log(res)
        setLead({ nome: "", sobrenome: "", email: "", prospecto: null });
        setSendSuccess(true);
      })
  };

  return(
    <>
      { 
        sendSuccess?
        <Container>
          <Success>Cadastro efetuado com sucesso!</Success>
          <Button type="button" onClick={()=>setSendSuccess(false)}>Voltar</Button>
        </Container>
        :
        <Container>
          <Input
            type="text"
            placeholder="Nome"
            value={lead.nome}
            required
            onChange={({
              target: { value },
            }: React.ChangeEvent<HTMLInputElement>) =>
            handleCreateNewLead("nome", value)
            }
          />
          
          <Input
            type="text"
            placeholder="Sobrenome"
            value={lead.sobrenome}
            required
            onChange={({
              target: { value },
            }: React.ChangeEvent<HTMLInputElement>) =>
            handleCreateNewLead("sobrenome", value)
            }
          />
          <Input
            type="text"
            placeholder="E-mail"
            value={lead.email}
            required
            onChange={({
              target: { value },
            }: React.ChangeEvent<HTMLInputElement>) =>
            handleCreateNewLead("email", value)
            }
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            >
            Enviar
          </Button>
          {error ?<Error>Todos o campos são obrigatório</Error>:<div></div>}
        </Container>
      }
    </>
  )
}

export default FormLead
