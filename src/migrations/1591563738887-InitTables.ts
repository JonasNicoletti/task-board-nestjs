import {MigrationInterface, QueryRunner} from "typeorm";

export class InitTables1591563738887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "state" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "index" integer NOT NULL, CONSTRAINT "PK_549ffd046ebab1336c3a8030a12" PRIMARY KEY ("id"))`)
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "color" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`)
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "stateId" integer, "categoryId" integer, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`)
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_f26d33d5ee900ce7a4274a7c1dd" FOREIGN KEY ("stateId") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_586dfdcae7fab5d9723506049a7" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("task", "FK_f26d33d5ee900ce7a4274a7c1dd");
        await queryRunner.dropForeignKey("task", "FK_586dfdcae7fab5d9723506049a7");
        await queryRunner.dropTable("task");
        await queryRunner.dropTable("category");
        await queryRunner.dropTable("state");
    }

}
