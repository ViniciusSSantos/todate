import { Console } from "console";
import React, { FormEvent, useEffect, useState } from "react";
import {useParams } from 'react-router-dom'
import api from "../services/api";
import "../styles/pages/events.css";

interface event {
    id: string; 
    description: string;  
    start_time: string; 
    end_time: string; 
    start_date: string; 
    end_date: string;   
}


  
interface userParams {
    id: string;   
}


export default function Events(){
    const params = useParams<userParams>();
    const [events, setEvents] = useState<event[]>([]);
    const [id, setId] = useState(0)
    const [created_by, setCreated_by] = useState(params.id);
    const [description, setDescription] = useState('');
    const [start_time, setStart_time] = useState('');
    const [end_time, setEnd_time] = useState('');
    const [start_date, setStart_date] = useState('');
    const [end_date, setEnd_date] = useState('');


    useEffect(()=> {
        api.get(`user/${params.id}`).then(response =>{
            setEvents(response.data)
        })
    }, [])


    async function handleSubmit(event: FormEvent){
        event.preventDefault()

        api.post("events", {
            created_by: created_by,
            description: description,
            start_time: start_time,
            end_time: end_time,
            start_date: start_date,
            end_date: end_date,
        })

        alert('evento realizado com sucesso!')
    
    }

    async function HandleDelete(eventId: string){
        api.delete(`user/${eventId}`)
    }

    async function HandleUpdate(){
        api.patch(`user/${id}`,{
            id: id,
            description: description,
            start_time: start_time,
            end_time: end_time,
            start_date: start_date,
            end_date: end_date,
        })
        
    }
    
    return (
        <div>
            
         
  
  
            {events.map(event => {
              return(
                  <main>
                      <ol className="gradient-list" key = {event.id} >
                          
                          <h1> INFORMAÇÕES DO EVENTO</h1>
                          <button onClick = {() => HandleDelete(event.id)}>aperte aqui para deletar</button>
                          <li>{event.description} </li>
                          <li>{event.start_date} </li>
                          <li>{event.end_date} </li>
                          <li>{event.start_time} </li>
                          <li>{event.end_time} </li>
                      </ol>
                    
                   



                  </main>          


               
         
              )

              
            } )}


                        <form onSubmit = {handleSubmit} className="create-user-form">
                            <fieldset>
                                <legend>login</legend>  
                                    <div className="input-block">
                                        <label htmlFor="name">start_time</label>
                                        <input 
                                        id="start_time"
                                        value = {start_time} 
                                        onChange = {event => setStart_time(event.target.value)}
                                        />
                                    </div>

                                    <div className="input-block">
                                        <label htmlFor="name">end_time</label>
                                        <input 
                                        id="end_time"
                                        value = {end_time} 
                                        onChange = {event => setEnd_time(event.target.value)}
                                        />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="name">start_date</label>
                                        <input 
                                        id="start_date"
                                        value = {start_date} 
                                        onChange = {event => setStart_date(event.target.value)}
                                        />
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="name">end_date</label>
                                        <input 
                                        id="end_date"
                                        value = {end_date} 
                                        onChange = {event => setEnd_date(event.target.value)}
                                        />
                                    </div>

                                                    
                                    <div className="input-block">
                                    <label htmlFor="about">descrição <span>Máximo de 300 caracteres</span></label>
                                    <textarea id="description" 
                                    maxLength={300} 
                                    value = {description} 
                                    onChange = {event => setDescription(event.target.value)}
                                    />
                                    </div>              
                            </fieldset>

                            <button className="confirm-button" type="submit">
                            Confirmar
                            </button>
                        </form>
  
        </div>  
      )
  };

  
