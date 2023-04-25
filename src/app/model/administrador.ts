import { Usuario } from "./usuario";


export class Administrador extends Usuario {


  profesion: string = ""
  area_trabajo: string = ""
  horario: string = ""
  cumpleanos: string = ""
  estado_vacaciones: boolean = false
  estado_contrato: boolean = false

  getIdUsuario(): number {
    return this.id;
  }
}
