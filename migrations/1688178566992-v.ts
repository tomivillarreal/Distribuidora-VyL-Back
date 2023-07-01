import { MigrationInterface, QueryRunner } from "typeorm";

export class V1688178566992 implements MigrationInterface {
    name = 'V1688178566992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cambio_precio" DROP COLUMN "fecha"`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" DROP COLUMN "hora"`);
        await queryRunner.query(`ALTER TABLE "compra" DROP COLUMN "fecha"`);
        await queryRunner.query(`ALTER TABLE "compra" DROP COLUMN "hora"`);
        await queryRunner.query(`ALTER TABLE "venta" DROP COLUMN "fecha"`);
        await queryRunner.query(`ALTER TABLE "venta" DROP COLUMN "hora"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "foto" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "foto"`);
        await queryRunner.query(`ALTER TABLE "venta" ADD "hora" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "venta" ADD "fecha" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "compra" ADD "hora" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "compra" ADD "fecha" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" ADD "hora" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" ADD "fecha" date NOT NULL DEFAULT now()`);
    }

}
