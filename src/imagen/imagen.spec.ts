import { Test, TestingModule } from '@nestjs/testing';
import { Imagen } from './imagen';

describe('Imagen', () => {
  let provider: Imagen;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Imagen],
    }).compile();

    provider = module.get<Imagen>(Imagen);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
