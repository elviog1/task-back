import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://elviogaleano827:sarasasa1@tasks.nqjg60o.mongodb.net/?retryWrites=true&w=majority'),TaskModule],
})
export class AppModule {}
