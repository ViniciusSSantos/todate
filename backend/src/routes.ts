import { Router } from "express";
import { CreateEventController } from "./controllers/CreateEventController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createEventController = new CreateEventController();

router.post("/users", createUserController.handle),
router.post("/events", createEventController.handle)

router.get("/user/events", )

export{router}