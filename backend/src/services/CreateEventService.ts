import { getCustomRepository, Equal } from "typeorm";
import { EventsRepositories } from "../repositories/EventsRepositories";

interface IEventRequest {
    description: string;
    start_time: string;
    end_time: string;
    start_date: string;
    end_date: string;  
  }


  class CreateEventService{
    async execute({description, start_time, end_time, start_date, end_date}:IEventRequest){
        const eventsRepository = getCustomRepository(EventsRepositories);

        if(!description){
            throw new Error("No description");
        }

        const eventAlreadyExists = await eventsRepository.findOne({
            start_time,
            end_time,
            start_date,
            end_date,
        })

        if(eventAlreadyExists){
            throw new Error("Event already exists");
        }

        const event = eventsRepository.create({
            description,
            start_time,
            end_time,
            start_date,
            end_date,
        });

        await eventsRepository.save(event);

        return event;
        
    } 
    

  }
  export { CreateEventService}