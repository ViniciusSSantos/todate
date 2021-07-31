import { Router } from "express";

import { CreateEventController } from "./controllers/CreateEventController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListCreatedByEventsController } from "./controllers/ListCreatedByEventsController";
import { UpdateEventController } from "./controllers/UpdateEventController";
import { DeleteEventController } from "./controllers/DeleteEventController";

const router = Router();

const createUserController = new CreateUserController();
const createEventController = new CreateEventController();
const listCreatedByEventsController = new ListCreatedByEventsController()
const updateEventController = new UpdateEventController()
const deleteEventController = new DeleteEventController()


router.post("/users", createUserController.handle),
router.post("/events", createEventController.handle)

router.get("/user/events",listCreatedByEventsController.handle)
router.put("/user/events", updateEventController.handle)
router.delete("/user/events", deleteEventController.handle)

export{router}