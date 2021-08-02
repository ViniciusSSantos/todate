import { Request, Response } from "express";
import { GetUserService } from "../services/GetUserService";

class GetUserController {
    async handle(request: Request, response: Response) {
      const { email, password } = request.body;
  
      const getUserService = new GetUserService();
  
      const user = await getUserService.execute({
        email,
        password,
      });
  
      return response.json(user);
    }
  }
  
  export { GetUserController };