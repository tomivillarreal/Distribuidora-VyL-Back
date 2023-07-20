import { MigrationInterface, QueryRunner } from "typeorm";

export class V11689777549424 implements MigrationInterface {
    name = 'V11689777549424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "compra" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "venta" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP COLUMN "updated_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "venta" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "compra" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
