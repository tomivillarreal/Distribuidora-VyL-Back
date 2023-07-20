import { MigrationInterface, QueryRunner } from "typeorm";

export class V11689776207921 implements MigrationInterface {
    name = 'V11689776207921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD "precio" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD "compra_id" integer`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD CONSTRAINT "FK_a55bfe2df79c68ba54b0bfbd331" FOREIGN KEY ("compra_id") REFERENCES "compra"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP CONSTRAINT "FK_a55bfe2df79c68ba54b0bfbd331"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP COLUMN "compra_id"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP COLUMN "precio"`);
    }

}
