import { MigrationInterface, QueryRunner } from "typeorm";

export class V21687744118250 implements MigrationInterface {
    name = 'V21687744118250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "asd"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" ADD "asd" character varying NOT NULL`);
    }

}
