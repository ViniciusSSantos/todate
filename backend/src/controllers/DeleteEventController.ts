import { Request, Response } from "express";
import { DeleteEventService } from "../services/DeleteEventService";

class DeleteEventController{
    async handle(request: Request, response: Response){
        const{id} = request.body

        const deleteEventService = new DeleteEventService();
        
        const deletedEvent = await deleteEventService.execute(id)

        return response.json(deletedEvent);

    }

}

export { DeleteEventController }