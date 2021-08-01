import React, { FormEvent, useState } from "react";
import api from "../services/api";
import { useHistory } from "react-router-dom";


export default function SignUp(){
    const history = useHistory()
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function handleSubmit(event: FormEvent){
        event.preventDefault()

        console.log(name)
        console.log(email)
        console.log(password)

        api.post("users", {
            name: name,
            email: email,
            password: password
        })
        
        alert('Cadastro realizado com sucesso!')
        history.push('/landing')
        
    }


    return(
        <div id="page-create-user">
        <main>
          <form onSubmit = {handleSubmit} className="create-user-form">
            <fieldset>
              <legend>Dados</legend>
  
  
              <div className="input-block">
                <label htmlFor="name">Nome</label>
                <input 
                id="name"
                value = {name} 
                onChange = {event => setName(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="name">E-mail</label>
                <input 
                id="email"
                value = {email} 
                onChange = {event => setEmail(event.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="name">Senha</label>
                <input 
                id="password"
                value = {password} 
                onChange = {event => setPassword(event.target.value)}
                />
              </div>              
            </fieldset>

            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          </form>
        </main>
      </div>

    );
}