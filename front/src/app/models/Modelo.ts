import { Auto } from "./Auto";

export interface Modelo {
    id?: string;
    url?: string;
    nombre?: string;
    marca?: string;
    marca_pk?: string;
    autos?: Auto[];
  }
  