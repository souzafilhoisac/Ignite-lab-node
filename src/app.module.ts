import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Httpmodule } from './http.module';
import { PrismaService } from './prisma.service';
//import { SMTPMailService } from './mail/smtp-mail.service';

@Module({
  imports: [Httpmodule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
