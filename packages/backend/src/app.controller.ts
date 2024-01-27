import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@monorepo-project/common'; // 共通モジュールのインポート

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    User.parse({}); // 共通モジュールが利用可能

    return this.appService.getHello();
  }
}
