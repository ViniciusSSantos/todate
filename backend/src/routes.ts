import { Router } from "express";

import { CreateEventController } from "./controllers/CreateEventController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListCreatedByEventsController } from "./controllers/ListCreatedByEventsController";
import { UpdateEventController } from "./controllers/UpdateEventController";
import { DeleteEventController } from "./controllers/DeleteEventController";
import { GetUserController } from "./controllers/GetUserController";
const router = Router();

const createUserController = new CreateUserController();
const createEventController = new CreateEventController();
const listCreatedByEventsController = new ListCreatedByEventsController()
const updateEventController = new UpdateEventController()
const deleteEventController = new DeleteEventController()
const getUserController = new GetUserController()

router.post("/users", createUserController.handle),
router.post("/events", createEventController.handle)
router.post("/login", getUserController.handle);

router.get("/user/:id",listCreatedByEventsController.handle)
router.put("/user/:id", updateEventController.handle)
router.delete("/user/:id", deleteEventController.handle)

export{router}