import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePeopleDto } from './interfaces/create-people.dto';

@Controller('personas')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  getAll() {
    return this.peopleService.getPeople();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.peopleService.getPersonById(id);
  }

  @Post()
  createPerson(@Body() createPeopleDto: CreatePeopleDto) {
    return this.peopleService.savePerson(createPeopleDto);
  }

}
  