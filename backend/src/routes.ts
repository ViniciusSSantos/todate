// IMPORTS
import { Router } from "express";
import { CreateEventController } from "./controllers/CreateEventController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListCreatedByEventsController } from "./controllers/ListCreatedByEventsController";
import { UpdateEventController } from "./controllers/UpdateEventController";
import { DeleteEventController } from "./controllers/DeleteEventController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";


const router = Router();

//CONTROLLERS
const createUserController = new CreateUserController();
const createEventController = new CreateEventController();
const listCreatedByEventsController = new ListCreatedByEventsController()
const updateEventController = new UpdateEventController()
const deleteEventController = new DeleteEventController()
const authenticateUserController = new AuthenticateUserController()




// POST ROUTES
router.post("/createusers",  createUserController.handle),
router.post("/createevents", ensureAuthenticated, createEventController.handle)
router.post("/login", authenticateUserController.handle);

// GET EVENTS ROUTES 
router.get("/user/events", ensureAuthenticated, listCreatedByEventsController.handle)

// PUT EVENTS ROUTES
router.put("/user/events", ensureAuthenticated, updateEventController.handle)

// DELETE EVENTS ROUTES
router.delete("/user/events", ensureAuthenticated, deleteEventController.handle)


export{router}