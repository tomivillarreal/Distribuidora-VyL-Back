import { Test, TestingModule } from '@nestjs/testing';
import { CambioPrecioService } from './cambio-precio.service';

describe('CambioPrecioService', () => {
  let service: CambioPrecioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CambioPrecioService],
    }).compile();

    service = module.get<CambioPrecioService>(CambioPrecioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
