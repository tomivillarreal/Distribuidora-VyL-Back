import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1688156380916 implements MigrationInterface {
    name = 'Init1688156380916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "estante" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, CONSTRAINT "PK_89b72074126cdaff1fbac2dce99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categoria" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detalle_compra" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "cantidad" integer NOT NULL, "precio_unitario" integer NOT NULL, "producto_id" uuid, CONSTRAINT "PK_51069b2e39319e34986637f364a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "detalle_venta" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "cantidad" integer NOT NULL, "producto_id" uuid, CONSTRAINT "PK_15e83370f604ee4b71e7299514e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "producto" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "codigo_producto" character varying NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, "categoria_id" uuid, "estante_id" uuid, CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cambio_precio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "fecha" date NOT NULL DEFAULT now(), "hora" TIMESTAMP NOT NULL DEFAULT now(), "precio" integer NOT NULL, "producto_id" uuid, CONSTRAINT "PK_01a7e7895477f88bd528afd8734" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "compra" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "fecha" date NOT NULL DEFAULT now(), "hora" TIMESTAMP NOT NULL DEFAULT now(), "descripcion" character varying NOT NULL, CONSTRAINT "PK_1282735aa02eaee06c0e1b5da41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "venta" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "fecha" date NOT NULL DEFAULT now(), "hora" TIMESTAMP NOT NULL DEFAULT now(), "descripcion" character varying NOT NULL, CONSTRAINT "PK_8bb53d01fe72521d5cfb1f149d4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD CONSTRAINT "FK_722778655029107eb61f718d105" FOREIGN KEY ("producto_id") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD CONSTRAINT "FK_1ec9a5c8b5c638129f1b4b0e3df" FOREIGN KEY ("producto_id") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "FK_1ae19a0cb542cf735d454bab0b5" FOREIGN KEY ("categoria_id") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "FK_5ca704ebfbd914618a214667fc5" FOREIGN KEY ("estante_id") REFERENCES "estante"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" ADD CONSTRAINT "FK_a0fc74bbe9f14318ff5f4a9bebc" FOREIGN KEY ("producto_id") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cambio_precio" DROP CONSTRAINT "FK_a0fc74bbe9f14318ff5f4a9bebc"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "FK_5ca704ebfbd914618a214667fc5"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "FK_1ae19a0cb542cf735d454bab0b5"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP CONSTRAINT "FK_1ec9a5c8b5c638129f1b4b0e3df"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP CONSTRAINT "FK_722778655029107eb61f718d105"`);
        await queryRunner.query(`DROP TABLE "venta"`);
        await queryRunner.query(`DROP TABLE "compra"`);
        await queryRunner.query(`DROP TABLE "cambio_precio"`);
        await queryRunner.query(`DROP TABLE "producto"`);
        await queryRunner.query(`DROP TABLE "detalle_venta"`);
        await queryRunner.query(`DROP TABLE "detalle_compra"`);
        await queryRunner.query(`DROP TABLE "categoria"`);
        await queryRunner.query(`DROP TABLE "estante"`);
    }

}
