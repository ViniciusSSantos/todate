import { Router } from "express";

import { CreateEventController } from "./controllers/CreateEventController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListCreatedByEventsController } from "./controllers/ListCreatedByEventsController";
import { UpdateEventController } from "./controllers/UpdateEventController";
import { DeleteEventController } from "./controllers/DeleteEventController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createEventController = new CreateEventController();
const listCreatedByEventsController = new ListCreatedByEventsController()
const updateEventController = new UpdateEventController()
const deleteEventController = new DeleteEventController()
const authenticateUserController = new AuthenticateUserController()


router.post("/users", createUserController.handle),
router.post("/events", createEventController.handle)
router.post("/login", authenticateUserController.handle);

router.get("/user/:id/events",listCreatedByEventsController.handle)
router.put("/user/:id/events", updateEventController.handle)
router.delete("/user/:id/events", deleteEventController.handle)

export{router}