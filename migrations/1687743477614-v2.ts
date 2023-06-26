import { MigrationInterface, QueryRunner } from "typeorm";

export class V21687743477614 implements MigrationInterface {
    name = 'V21687743477614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "venta" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "fecha" date NOT NULL DEFAULT now(), "hora" TIMESTAMP NOT NULL DEFAULT now(), "descripcion" character varying NOT NULL, CONSTRAINT "PK_8bb53d01fe72521d5cfb1f149d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "estante" DROP COLUMN "fecha"`);
        await queryRunner.query(`ALTER TABLE "estante" DROP COLUMN "hora"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "asd" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "codigo_producto" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "codigo_producto"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "asd"`);
        await queryRunner.query(`ALTER TABLE "estante" ADD "hora" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "estante" ADD "fecha" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`DROP TABLE "venta"`);
    }

}
