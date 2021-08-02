import { getCustomRepository } from "typeorm";
import { EventsRepositories } from "../repositories/EventsRepositories";



class ListCreatedByEventsService{
    async execute(user_id: string){
        const eventsRepository = getCustomRepository(EventsRepositories);

        const eventsCreatedByUser = await eventsRepository.find({            
                created_by: user_id,            
        })

        return eventsCreatedByUser

    }
}

export { ListCreatedByEventsService }
