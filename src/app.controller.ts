import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileURLToPath } from 'url';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './imagenes',
        filename: function (req, file, cb) {
          cb(null, file.originalname + '_' + '.png');
        },
      }),
    }),
  )
  @Post('file')
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      msg: `archivo ${file.filename} subido`,
      ruta: file.path,
      asd: file.destination,
    };
  }
}
