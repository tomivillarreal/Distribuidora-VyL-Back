import { Test, TestingModule } from '@nestjs/testing';
import { CambioPrecioController } from './cambio-precio.controller';
import { CambioPrecioService } from './cambio-precio.service';

describe('CambioPrecioController', () => {
  let controller: CambioPrecioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CambioPrecioController],
      providers: [CambioPrecioService],
    }).compile();

    controller = module.get<CambioPrecioController>(CambioPrecioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
