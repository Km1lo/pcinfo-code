import { Administrador } from "./administrador"

export class Reporte extends Administrador {

  id_reporte:number=0
  fecha: string = ""
  hora: string = ""
  descripcion: string = ""
  estado: string = ""

  getIdAdmin(): number{
    return this.id_usuario;
  }

}
