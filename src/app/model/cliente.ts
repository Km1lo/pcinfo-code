import { Usuario } from "./usuario";

export class Cliente extends Usuario {

  id_cliente: number = 0
  estado_actividad: boolean = false
  presupuestos: string = ""
  preferencias: string = ""
  tipo_pcs: string = ""

  getIdUsuario(): number {
    return this.id;
  }
}
