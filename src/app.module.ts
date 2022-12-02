import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, CompilerService, OperationService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,OperationService,CompilerService],
})
export class AppModule {}
