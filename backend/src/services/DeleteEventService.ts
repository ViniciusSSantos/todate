import { getCustomRepository } from "typeorm";
import { EventsRepositories } from "../repositories/EventsRepositories";

 class DeleteEventService{
    async execute(id: string){
        const eventsRepository = getCustomRepository(EventsRepositories);
        
        const event = await eventsRepository.find({
            where:{
                id: id,
            }
        })

        if(!event){
            throw new Error("Event not found");
        }

        await eventsRepository.delete(id)
    }

}

export { DeleteEventService }
