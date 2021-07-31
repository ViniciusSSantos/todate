import { Request, Response } from "express";
import { ListCreatedByEventsService } from "../services/ListCreatedByEventsService";


class ListCreatedByEventsController{
    async handle(request: Request, response: Response){
        const { user_id } = request.body;

        const listCreatedByEventsService = new ListCreatedByEventsService()

        const eventsCreatedByUser = await listCreatedByEventsService.execute(user_id)
        

        return response.json(eventsCreatedByUser);


    }
}

export {ListCreatedByEventsController}