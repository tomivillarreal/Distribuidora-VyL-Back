import { MigrationInterface, QueryRunner } from "typeorm";

export class V1688156927577 implements MigrationInterface {
    name = 'V1688156927577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "codigo_producto"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" ADD "codigo_producto" character varying NOT NULL`);
    }

}
