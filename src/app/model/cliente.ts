import { Usuario } from "./usuario";

export class Cliente extends Usuario {

  id_cliente: number = 0
  estado_actividad: string = ""
  presupuestos: string = ""
  preferencias: string = ""
  tipo_pcs: string = ""

  getIdUsuario(): number {
    return this.id;
  }
  setIdUsuario(id: number): void {
    this.id = id;
  }
  setDniUsuario(dni: number): void {
    this.dni = dni;
  }
  setNombreUsuario(nombre: string): void {
    this.nombre = nombre;
  }
  setApellidoPaternoUsuario(apellidoPaterno: string): void {
    this.apellidoPaterno = apellidoPaterno;
  }
  setApellidoMaternoUsuario(apellidoMaterno: string): void {
    this.apellidoMaterno = apellidoMaterno;
  }
  setCorreoUsuario(correo: string): void {
    this.correo = correo;
  }
  setSexoUsuario(sexo: string): void {
    this.sexo = sexo;
  }
  setEdadUsuario(edad: number): void {
    this.edad = edad;
  }
  setContraseniaUsuario(contrasenia: string): void {
    this.contrasenia = contrasenia;
  }
  setPaisUsuario(pais: string): void {
    this.pais = pais;
  }
}

