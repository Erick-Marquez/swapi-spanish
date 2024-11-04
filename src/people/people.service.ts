import { Injectable } from '@nestjs/common';
import {
  PersonAPI,
  PeopleAPI,
  People,
  Person,
} from './interfaces/people';
import { ConfigService } from '@nestjs/config';
import { v4 } from 'uuid';
import { dynamo } from 'src/config/database';
import { CreatePeopleDto } from './interfaces/create-people.dto';

@Injectable()
export class PeopleService {
  endpoint: string = 'people';
  table: string = '';
  url: string;

  constructor(private configService: ConfigService) {
    this.url = this.configService.get<string>('swapi') + this.endpoint;
    this.table = this.configService.get<string>('table')
  }

  getPeople(): Promise<People> {
    const people = new Promise<People>((resolve, reject) => {
      fetch(this.url)
        .then((res) => res.json())
        .then((res) => this.translatePeople(res))
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });

    return people;
  }

  getPersonById(id: number): Promise<Person> {
    const person = new Promise<Person>((resolve, reject) => {
      fetch(`${this.url}/${id}/`)
        .then((res) => res.json())
        .then((res) => this.translatePerson(res))
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });

    return person;
  }

  translatePerson(person: PersonAPI): Person {
    const translatedPerson: Person = {
      nombre: person.name,
      altura: person.height,
      peso: person.mass,
      color_de_cabello: person.hair_color,
      color_de_piel: person.skin_color,
      color_de_ojo: person.eye_color,
      nacimiento: person.birth_year,
      genero: person.gender,
      lugar_de_origen: person.homeworld,
      peliculas: person.films,
      especies: person.species,
      vehiculos: person.vehicles,
      naves: person.starships,
      creado: person.created,
      editado: person.edited,
      url: person.url
    };

    return translatedPerson;
  }

  translatePeople(people: PeopleAPI): People {
    const translatedPeople: People = {
      cantidad: people.count,
      siguiente: people.next,
      anterior: people.previous,
      resultados: people.results.map((person) => this.translatePerson(person)),
    };

    return translatedPeople;
  }

  async savePerson(person: CreatePeopleDto) {
    person.creado = new Date().toISOString();
    person.id = person.id !== undefined ? person.id : v4();

    try {
      await dynamo.put({
        TableName: this.table,
        Item: person,
      }).promise();
      return person;
    } catch (error) {
      throw new Error(error.message);
    }
  }

}
