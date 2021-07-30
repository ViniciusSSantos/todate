import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvents1627650925750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"events",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                      },
                      {
                        name: "created_by",
                        type: "uuid",
                      },
                      {
                        name: "description",
                        type: "varchar",
                      },
                      {
                        name: "start_time",
                        type: "varchar",
                      },
                      {
                        name: "end_time",
                        type: "varchar",
                      },                      
                      {
                        name: "start_date",
                        type: "varchar",
                      },
                      {
                        name: "end_date",
                        type: "varchar",
                      },

                ]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("events");
    }

}
