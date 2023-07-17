import { MigrationInterface, QueryRunner } from "typeorm";

export class V11689519202218 implements MigrationInterface {
    name = 'V11689519202218'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD "precio" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP COLUMN "precio"`);
    }

}
