import { getCustomRepository } from "typeorm";
import { EventsRepositories } from "../repositories/EventsRepositories";

interface IEventRequest {
    id: string;
    description: string;
    start_time: string;
    end_time: string;
    start_date: string;
    end_date: string;  
  }


class UpdateEventService{
    async execute({id, description, start_time, end_time, start_date, end_date}:IEventRequest){

        const eventsRepository = getCustomRepository(EventsRepositories);

        const event = await eventsRepository.find({
            where:{
                id: id,
            }
        })

        if(!event){
            throw new Error("Event not found");
        }

        await eventsRepository.update(id, {
            description: description,
            start_time: start_time,
            end_time: end_time,
            start_date: start_date,
            end_date: end_date,
        }

        )

    }

}

export {UpdateEventService};