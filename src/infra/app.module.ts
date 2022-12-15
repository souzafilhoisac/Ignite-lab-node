import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { Httpmodule } from './http/http.module';

@Module({
  imports: [Httpmodule, DatabaseModule],
})
export class AppModule {}
