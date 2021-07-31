import { Request, Response } from "express";
import { UpdateEventService } from "../services/UpdateEventService";


class UpdateEventController{
    async handle(request: Request, response: Response){

        const {id, description, start_time, end_time, start_date, end_date} = request.body;

        const updateEventService = new UpdateEventService();

        const updatedEvent = await updateEventService.execute({
            id, 
            description, 
            start_time, 
            end_time, 
            start_date, 
            end_date})

            return response.json(updatedEvent)
    }
}

export {UpdateEventController}