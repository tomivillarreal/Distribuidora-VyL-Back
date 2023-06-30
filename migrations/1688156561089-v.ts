import { MigrationInterface, QueryRunner } from "typeorm";

export class V1688156561089 implements MigrationInterface {
    name = 'V1688156561089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "FK_5ca704ebfbd914618a214667fc5"`);
        await queryRunner.query(`ALTER TABLE "estante" DROP CONSTRAINT "PK_89b72074126cdaff1fbac2dce99"`);
        await queryRunner.query(`ALTER TABLE "estante" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "estante" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "estante" ADD CONSTRAINT "PK_89b72074126cdaff1fbac2dce99" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "FK_1ae19a0cb542cf735d454bab0b5"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP CONSTRAINT "FK_722778655029107eb61f718d105"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP CONSTRAINT "PK_51069b2e39319e34986637f364a"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD CONSTRAINT "PK_51069b2e39319e34986637f364a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP COLUMN "producto_id"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD "producto_id" integer`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP CONSTRAINT "FK_1ec9a5c8b5c638129f1b4b0e3df"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP CONSTRAINT "PK_15e83370f604ee4b71e7299514e"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD CONSTRAINT "PK_15e83370f604ee4b71e7299514e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP COLUMN "producto_id"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD "producto_id" integer`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" DROP CONSTRAINT "FK_a0fc74bbe9f14318ff5f4a9bebc"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "PK_5be023b11909fe103e24c740c7d"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "categoria_id"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "categoria_id" integer`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "estante_id"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "estante_id" integer`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" DROP CONSTRAINT "PK_01a7e7895477f88bd528afd8734"`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" ADD CONSTRAINT "PK_01a7e7895477f88bd528afd8734" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" DROP COLUMN "producto_id"`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" ADD "producto_id" integer`);
        await queryRunner.query(`ALTER TABLE "compra" DROP CONSTRAINT "PK_1282735aa02eaee06c0e1b5da41"`);
        await queryRunner.query(`ALTER TABLE "compra" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "compra" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "compra" ADD CONSTRAINT "PK_1282735aa02eaee06c0e1b5da41" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "venta" DROP CONSTRAINT "PK_8bb53d01fe72521d5cfb1f149d4"`);
        await queryRunner.query(`ALTER TABLE "venta" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "venta" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "venta" ADD CONSTRAINT "PK_8bb53d01fe72521d5cfb1f149d4" PRIMARY KEY ("id")`);
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
        await queryRunner.query(`ALTER TABLE "venta" DROP CONSTRAINT "PK_8bb53d01fe72521d5cfb1f149d4"`);
        await queryRunner.query(`ALTER TABLE "venta" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "venta" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "venta" ADD CONSTRAINT "PK_8bb53d01fe72521d5cfb1f149d4" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "compra" DROP CONSTRAINT "PK_1282735aa02eaee06c0e1b5da41"`);
        await queryRunner.query(`ALTER TABLE "compra" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "compra" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "compra" ADD CONSTRAINT "PK_1282735aa02eaee06c0e1b5da41" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" DROP COLUMN "producto_id"`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" ADD "producto_id" uuid`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" DROP CONSTRAINT "PK_01a7e7895477f88bd528afd8734"`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" ADD CONSTRAINT "PK_01a7e7895477f88bd528afd8734" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "estante_id"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "estante_id" uuid`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "categoria_id"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "categoria_id" uuid`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "PK_5be023b11909fe103e24c740c7d"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cambio_precio" ADD CONSTRAINT "FK_a0fc74bbe9f14318ff5f4a9bebc" FOREIGN KEY ("producto_id") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP COLUMN "producto_id"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD "producto_id" uuid`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP CONSTRAINT "PK_15e83370f604ee4b71e7299514e"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD CONSTRAINT "PK_15e83370f604ee4b71e7299514e" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "detalle_venta" ADD CONSTRAINT "FK_1ec9a5c8b5c638129f1b4b0e3df" FOREIGN KEY ("producto_id") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP COLUMN "producto_id"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD "producto_id" uuid`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP CONSTRAINT "PK_51069b2e39319e34986637f364a"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD CONSTRAINT "PK_51069b2e39319e34986637f364a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "detalle_compra" ADD CONSTRAINT "FK_722778655029107eb61f718d105" FOREIGN KEY ("producto_id") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d"`);
        await queryRunner.query(`ALTER TABLE "categoria" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "categoria" ADD CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "FK_1ae19a0cb542cf735d454bab0b5" FOREIGN KEY ("categoria_id") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "estante" DROP CONSTRAINT "PK_89b72074126cdaff1fbac2dce99"`);
        await queryRunner.query(`ALTER TABLE "estante" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "estante" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "estante" ADD CONSTRAINT "PK_89b72074126cdaff1fbac2dce99" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "FK_5ca704ebfbd914618a214667fc5" FOREIGN KEY ("estante_id") REFERENCES "estante"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
