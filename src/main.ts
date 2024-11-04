import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Handler } from 'aws-lambda';
import { PeopleModule } from './people/people.module';
import { PeopleService } from './people/people.service';
import { HttpStatus } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


export const getPersonById: Handler = async (event: any) => {
  const appContext = await NestFactory.createApplicationContext(PeopleModule);
  const appService = appContext.get(PeopleService);
  const { id } = event.pathParameters;
  try {
    const res = await appService.getPersonById(id);
    return {
      statusCode: HttpStatus.OK,
      body: res,
    };
  } catch (error) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: error.response ?? error.message,
    };
  }
};

export const getPeople: Handler = async () => {
  const appContext = await NestFactory.createApplicationContext(PeopleModule);
  const appService = appContext.get(PeopleService);
  try {
    const res = await appService.getPeople();
    return {
      statusCode: HttpStatus.OK,
      body: res,
    };
  } catch (error) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: error.response ?? error.message,
    };
  }
};


export const savePerson: Handler = async (event: any) => {
  const appContext = await NestFactory.createApplicationContext(PeopleModule);
  const appService = appContext.get(PeopleService);
  try {
    const res = await appService.savePerson(JSON.parse(event.body));
    return {
      statusCode: HttpStatus.CREATED,
      body: res,
    };
  } catch (error) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: error.response ?? error.message,
    };
  }
};