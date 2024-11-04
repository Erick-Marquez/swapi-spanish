export class CreatePeopleDto {
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
  