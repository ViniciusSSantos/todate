import { Repository, EntityRepository } from "typeorm";
import { Event } from "../entities/Event";

@EntityRepository(Event)
class EventsRepositories extends Repository<Event>{}

export { EventsRepositories };
