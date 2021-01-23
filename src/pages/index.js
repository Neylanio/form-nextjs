import { useCallback, useRef } from 'react'
import { Form } from '@unform/web'

import api from '../services/api'
import Head from 'next/head'
import Input from '../components/Input'

import '../styles/pages/Home.css'

export default function Home() {

  const handleSubmit = useCallback(async ({ name, cpf, phone }, { reset }) => {
    if (name === '' || cpf === '' || phone === '') {
      alert('ATENÇÃO: Preencha todos os campos!')
    } else {
      const user = {
        name,
        cpf,
        phone
      }
      await api.post('http://localhost:3333/users', user);
      alert(`USUÁRIO CADASTRADO!!\n\nNome: ${name}\nCPF: ${cpf}\nTelefone: ${phone}`)
      reset()
    }
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Form in NextJS</title>
      </Head>

      <main className="main">
        <div className="info">
          <h1>
            footbook
          </h1>
          <p>
            Connect with friends and the world around you on Footbook.
          </p>
        </div>

        <div className="register-form">
          <Form onSubmit={handleSubmit}>
            <span>* Todos os campos são obrigatórios</span>
            <fieldset>
              <label>Nome Completo</label>
              <Input name="name" type="text" />
            </fieldset>

            <fieldset>
              <label>CPF</label>
              <Input name="cpf" type="text" />
            </fieldset>

            <fieldset>
              <label>Telefone</label>
              <Input name="phone" type="text" />
            </fieldset>

            <button type="submit" id="register-button">Cadastrar</button>
            <div className="line-separator"></div>
            <button type="button" id="logon-button" disabled>Login</button>
          </Form>
        </div>
      </main>

      <footer className="footer">
        <p>copyright n.g.s.</p>
      </footer>
    </div>
  )
}
