export interface PeopleAPI {
  count: number;
  next: string;
  previous: null;
  results: PersonAPI[];
}
  
export interface PersonAPI {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films?: string[];
  species?: string[];
  vehicles?: string[];
  starships?: string[];
  created: string;
  edited?: string;
  url?: string;
}
  
export interface People {
  cantidad: number;
  siguiente: string;
  anterior: null;
  resultados: Person[];
}
  
export interface Person {
  id?: string;
  nombre: string;
  altura: number;
  peso: number;
  color_de_cabello: string;
  color_de_piel: string;
  color_de_ojo: string;
  nacimiento: string;
  genero: string;
  lugar_de_origen: string;
  peliculas?: string[];
  especies?: string[];
  vehiculos?: string[];
  naves?: string[];
  creado?: string;
  editado?: string;
  url?: string;
}

export interface PeopleQuery {
  pagina: number;
}

