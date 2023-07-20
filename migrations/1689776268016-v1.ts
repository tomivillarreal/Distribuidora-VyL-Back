import { MigrationInterface, QueryRunner } from "typeorm";

export class V11689776268016 implements MigrationInterface {
    name = 'V11689776268016'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP COLUMN "precio_unitario"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD "precio_unitario" integer NOT NULL`);
    }

}
