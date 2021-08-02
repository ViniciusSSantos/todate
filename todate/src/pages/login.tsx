import React, { FormEvent, useState } from "react";
import api from "../services/api";
import { useHistory } from "react-router-dom";
import '../styles/pages/signup.css'


export default function Login(){
    const history = useHistory()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function handleSubmit(event: FormEvent){
        event.preventDefault()


        api.post("login", {
            email: email,
            password: password
        }).then((response) => {
          const {id} = response.data;
          alert('login realizado com sucesso!')
          history.push(`/user/${id}`)
        })
        
       
        
    }


    return(
        <div id="page-create-user">
        <main>
          <form onSubmit = {handleSubmit} className="create-user-form">
            <fieldset>
              <legend>login</legend>  
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