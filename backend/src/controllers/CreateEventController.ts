import { Request, Response } from "express";
import { CreateEventService } from "../services/CreateEventService"; 


class CreateEventController {
    async handle(request: Request, response: Response) {
      const { description,
        start_time,
        end_time,
        start_date,
        end_date, } = request.body;
  
      const createEventService = new CreateEventService();
  
      const event = await createEventService.execute({
        description,
        start_time,
        end_time,
        start_date,
        end_date,        
      });
  
      return response.json(event);
    }
  }
  
  export { CreateEventController };