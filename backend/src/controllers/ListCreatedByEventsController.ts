import { Request, Response } from "express";
import { ListCreatedByEventsService } from "../services/ListCreatedByEventsService";


class ListCreatedByEventsController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const listCreatedByEventsService = new ListCreatedByEventsService()

        const eventsCreatedByUser = await listCreatedByEventsService.execute(id)
        

        return response.json(eventsCreatedByUser);


    }
}

export {ListCreatedByEventsController}