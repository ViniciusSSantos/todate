import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("events")
export class Event {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    created_by: string;
    
    @JoinColumn({ name: "created_by" })
    @ManyToOne(() => User)
    createdBy: User;

    @Column()
    description: string;

    @Column()
    start_time: string;

    @Column()
    end_time: string;

    @Column()
    start_date: string;

    @Column()
    end_date: string;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if (!this.id){
          this.id = uuid();
        }
      }


}
