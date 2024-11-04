import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import configuration from 'src/config/configuration';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}