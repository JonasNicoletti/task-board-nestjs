import { MigrationInterface, QueryRunner } from "typeorm";

export class InitStates1591563738888 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner
            .manager
            .createQueryBuilder()
            .insert()
            .into("state")
            .values([{ name: "to-do", index: 0 },{ name: "doing", index: 1 },{ name: "review", index: 2 },{ name: "done", index: 3 }])
            .execute()
        return 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.manager.query(`DELETE FROM "state" WHERE index BETWEEN 0 AND 3`)
    }

}
