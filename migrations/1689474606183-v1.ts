import { MigrationInterface, QueryRunner } from "typeorm";

export class V11689474606183 implements MigrationInterface {
    name = 'V11689474606183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD "venta_id" integer`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD CONSTRAINT "FK_7a19a69d52a6ee8e62f0a1b4103" FOREIGN KEY ("venta_id") REFERENCES "venta"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP CONSTRAINT "FK_7a19a69d52a6ee8e62f0a1b4103"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP COLUMN "venta_id"`);
    }

}
