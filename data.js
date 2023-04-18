module.exports = function () {
  var data = {
    usuario: [
      {
        id:1,
        dni: 98754824,
        nombre: "Luis",
        apellidoPaterno: "Pérez",
	      apellidoMaterno: "Reyes",
	      correo: "lperez@gmail.com",
	      sexo: "Masculino",
	      edad: "24",
	      contrasenia: "826ak@2",
	      pais: "Perú",
      },
      {
        id:2,
        dni: 58464585,
        nombre: "Sergio",
        apellidoPaterno: "Rindro",
	      apellidoMaterno: "Mark",
	      correo: "srindro@gmail.com",
	      sexo: "Masculino",
	      edad: "26",
	      contrasenia: "82bs72as",
	      pais: "Peru",
      },
      {
        id:3,
        dni: 68457482,
        nombre: "Sandra",
        apellidoPaterno: "Alfaro",
	      apellidoMaterno: "Tite",
	      correo: "sandra.tite@gmail.com",
	      sexo: "Femenino",
	      edad: "19",
	      contrasenia: "47sandra533@@",
	      pais: "Perú",
      },
      {
        id:4,
        dni: 85462574,
        nombre: "Coco",
        apellidoPaterno: "Lopez",
	      apellidoMaterno: "Reyes",
	      correo: "cOco92@hotmail.com",
	      sexo: "Masculino",
	      edad: "34",
	      contrasenia: "2nsad78@231",
	      pais: "Peru",
      },
      {
        id: 5,
        dni: 38965472,
        nombre: "María",
        apellidoPaterno: "García",
        apellidoMaterno: "Sánchez",
        correo: "mariags@gmail.com",
        sexo: "Femenino",
        edad: "27",
        contrasenia: "maria_gar89",
        pais: "España"
      },
      {
        id: 6,
        dni: 17654398,
        nombre: "Carlos",
        apellidoPaterno: "Martínez",
        apellidoMaterno: "Gómez",
        correo: "carlos.martinez@gmail.com",
        sexo: "Masculino",
        edad: "45",
        contrasenia: "cmartinez78&",
        pais: "Argentina"
      },
      {
        id: 7,
        dni: 45128976,
        nombre: "Sofía",
        apellidoPaterno: "Flores",
        apellidoMaterno: "Pérez",
        correo: "sofiafp@gmail.com",
        sexo: "Femenino",
        edad: "22",
        contrasenia: "sofi123_",
        pais: "Colombia"
      },
      {
        id: 8,
        dni: 58794321,
        nombre: "Luis",
        apellidoPaterno: "Sánchez",
        apellidoMaterno: "Hernández",
        correo: "luissanhdez@hotmail.com",
        sexo: "Masculino",
        edad: "39",
        contrasenia: "sanchez_lu87",
        pais: "México"
      }
    ],
    administrador: [
      {
        id_admin: 1,
        profesion: "Ingeniero de Sistemas",
        area_trabajo: "Desarrollo",
        horario: "8:00am - 5:00pm",
        cumpleanos: "1990-06-12",
        estado_vacaciones: false,
        estado_contrato: true,
        usuario: {
          id:1,
          dni: 98754824,
          nombre: "Luis",
          apellidoPaterno: "Pérez",
          apellidoMaterno: "Reyes",
          correo: "lperez@gmail.com",
          sexo: "Masculino",
          edad: "24",
          contrasenia: "826ak@2",
          pais: "Perú",
        },
      },
      {
        id_admin: 2,
        profesion: "Administrador de Base de Datos",
        area_trabajo: "Operaciones",
        horario: "10:00am - 7:00pm",
        cumpleanos: "1985-04-05",
        estado_vacaciones: false,
        estado_contrato: true,
        usuario: {
          id:2,
          dni: 58464585,
          nombre: "Sergio",
          apellidoPaterno: "Rindro",
          apellidoMaterno: "Mark",
          correo: "srindro@gmail.com",
          sexo: "Masculino",
          edad: "26",
          contrasenia: "82bs72as",
          pais: "Peru",
        },
      },
      {
        id_admin: 3,
        profesion: "Ingeniero de Redes",
        area_trabajo: "Infraestructura",
        horario: "9:00am - 6:00pm",
        cumpleanos: "1992-02-15",
        estado_vacaciones: false,
        estado_contrato: true,
        usuario: {
          id:3,
          dni: 68457482,
          nombre: "Sandra",
          apellidoPaterno: "Alfaro",
          apellidoMaterno: "Tite",
          correo: "sandra.tite@gmail.com",
          sexo: "Femenino",
          edad: "19",
          contrasenia: "47sandra533@@",
          pais: "Perú",
        },
      }
    ],
    reporte:[
      {
      id_reporte: 1,
      descripcion:"Problemas de conectividad",
      fecha:"2022-06-12",
      estado:"Resuelto",
        administrador:{
          id_admin: 1,
          profesion: "Ingeniero de Sistemas",
          area_trabajo: "Desarrollo",
          horario: "8:00am - 5:00pm",
          cumpleanos: "1990-06-12",
          estado_vacaciones: false,
          estado_contrato: true,
        },
      },
      {
      id_reporte: 2,
      descripcion:"Fallas en registrar sesion",
      fecha:"2023-04-5",
      estado:"En proceso",
          administrador:{
          id_admin: 2,
          profesion: "Administrador de Base de Datos",
          area_trabajo: "Operaciones",
          horario: "10:00am - 7:00pm",
          cumpleanos: "1985-04-05",
          estado_vacaciones: false,
          estado_contrato: true,
        },
      },
      {
      id_reporte: 3,
      descripcion:"Problemas en la base de datos",
      fecha:"2022-12-20",
      estado:"Finalizado",
          administrador:{
            id_admin: 3,
            profesion: "Administrador de Base de Datos",
            area_trabajo: "Operaciones",
            horario: "10:00am - 7:00pm",
            cumpleanos: "1985-04-05",
            estado_vacaciones: false,
            estado_contrato: true,
        },
      },
    ],
    cliente: [
      {
      id_cliente: 1,
      estado_actividad: true,
      presupuestos: "S/2500 - S/3800",
      preferencias: "Minimalista",
      tipo_pcs: "Intel",
      usuario:{
          id:4,
          dni: 85462574,
          nombre: "Coco",
          apellidoPaterno: "Lopez",
          apellidoMaterno: "Reyes",
          correo: "cOco92@hotmail.com",
          sexo: "Masculino",
          edad: "34",
          contrasenia: "2nsad78@231",
          pais: "Peru",
        },
      },
      {
      id_cliente: 2,
      estado_actividad: true,
      presupuestos: "S/1500 - S/2300",
      preferencias: "RGB",
      tipo_pcs: "AMD",
      usuario: {
          id: 5,
          dni: 38965472,
          nombre: "María",
          apellidoPaterno: "García",
          apellidoMaterno: "Sánchez",
          correo: "mariags@gmail.com",
          sexo: "Femenino",
          edad: "27",
          contrasenia: "maria_gar89",
          pais: "España"
        },
      },
      {
      id_cliente: 3,
      estado_actividad: true,
      presupuestos: "S/4000 - S/6500",
      preferencias: "Streaming",
      tipo_pcs: "AMD",
      usuario:
        {
          id: 6,
          dni: 17654398,
          nombre: "Carlos",
          apellidoPaterno: "Martínez",
          apellidoMaterno: "Gómez",
          correo: "carlos.martinez@gmail.com",
          sexo: "Masculino",
          edad: "45",
          contrasenia: "cmartinez78&",
          pais: "Argentina"
        },
      },
      {
      id_cliente: 4,
      estado_actividad: true,
      presupuestos: "S/1200 - S/2000",
      preferencias: "basico",
      tipo_pcs: "Intel",
      usuario:
        {
          id: 7,
          dni: 45128976,
          nombre: "Sofía",
          apellidoPaterno: "Flores",
          apellidoMaterno: "Pérez",
          correo: "sofiafp@gmail.com",
          sexo: "Femenino",
          edad: "22",
          contrasenia: "sofi123_",
          pais: "Colombia"
        },
      },
      {
        id_cliente: 5,
        estado_actividad: true,
        presupuestos: "S/3000 - S/4500",
        preferencias: "Gaming",
        tipo_pcs: "AMD",
        usuario: {
          id: 8,
          dni: 58794321,
          nombre: "Luis",
          apellidoPaterno: "Sánchez",
          apellidoMaterno: "Hernández",
          correo: "luissanhdez@hotmail.com",
          sexo: "Masculino",
          edad: "39",
          contrasenia: "sanchez_lu87",
          pais: "México"
        },
      }
    ],
    comentario: [
      {
        id_comentario: 1,
        comentario: "Gracias por la recomendacion",
        fecha: "2023-04-10",
        cliente:
        {
          id_cliente: 1,
          estado_actividad: true,
          presupuestos: "S/2500 - S/3800",
          preferencias: "Minimalista",
          tipo_pcs: "Intel",
        }

      },
      {
        id_comentario: 2,
        comentario: "Oigan capos su página me savlo de apuros thanks",
        fecha: "2023-04-11",
        cliente:
        {
          id_cliente: 2,
          estado_actividad: true,
          presupuestos: "S/1500 - S/2300",
          preferencias: "RGB",
          tipo_pcs: "AMD",
        }
      },
      {
        id_comentario: 3,
        comentario: "Me guto pero espero un poco mas de recomendaciones",
        fecha: "2023-04-12",
        cliente:
        {
          id_cliente: 3,
          estado_actividad: true,
          presupuestos: "S/4000 - S/6500",
          preferencias: "Streaming",
          tipo_pcs: "AMD",
        }
      }
    ],
    cuestionario: [
      {
        id_cuestionario: 1,
        tipo_form: "Largo",
        Uso_de_PC: "Edicion",
        Presupuesto: "Media-Alta",
        Tamaño_del_PC: "Estandar-(ATX)",
        Diseño: "Minimalista",
        Tipo_de_refrigeración: "Aire",
        Overclocking: false,
        Marca_Procesador: "Intel",
        Programas_used: "Adobe Premiere Pro 2022, Vegas Pro 18",
        cliente:
        {
          id_cliente: 1,
          estado_actividad: true,
          presupuestos: "S/2500 - S/3800",
          preferencias: "Minimalista",
          tipo_pcs: "Intel",
        }

      },
      {
        id_cuestionario: 2,
        tipo_form: "Largo",
        Uso_de_PC: "Estudios",
        Presupuesto: "Economica",
        Tamaño_del_PC: "Estandar-(ATX)",
        Diseño: "RGB",
        Tipo_de_refrigeración: "Stock",
        Overclocking: false,
        Marca_Procesador: "AMD",
        Programas_used: "",
        cliente:
        {
          id_cliente: 2,
          estado_actividad: true,
          presupuestos: "S/1500 - S/2300",
          preferencias: "RGB",
          tipo_pcs: "AMD",
        }
      },
      {
        id_cuestionario: 3,
        tipo_form: "Corto",
        Uso_de_PC: "Alta",
        Presupuesto: "",
        Tamaño_del_PC: "Estandar-(ATX)",
        Diseño: "RGB",
        Tipo_de_refrigeración: "",
        Overclocking: false,
        Marca_Procesador: "AMD",
        Programas_used: "OBS,Photoshop",
        cliente:
        {
          id_cliente: 3,
          estado_actividad: true,
          presupuestos: "S/4000 - S/6500",
          preferencias: "Streaming",
          tipo_pcs: "AMD",
        }
      },
      {
        id_cuestionario: 4,
        tipo_form: "Corto",
        Uso_de_PC: "Gaming",
        Presupuesto: "Economica",
        Tamaño_del_PC: "Pequeño-(Micro ATX)",
        Diseño: "Normal",
        Tipo_de_refrigeración: "",
        Overclocking: false,
        Marca_Procesador: "Intel",
        Programas_used: "",
        cliente:
        {
          id_cliente: 4,
          estado_actividad: true,
          presupuestos: "S/1200 - S/2000",
          preferencias: "basico",
          tipo_pcs: "Intel",
        }
      },
      {
        id_cuestionario: 5,
        tipo_form: "Corto",
        Uso_de_PC: "Streaming",
        Presupuesto: "Media",
        Tamaño_del_PC: "Estandar-(ATX)",
        Diseño: "Gaming",
        Tipo_de_refrigeración: "",
        Overclocking: false,
        Marca_Procesador: "AMD",
        Programas_used: "",
        cliente:
        {
          id_cliente: 5,
          estado_actividad: true,
          presupuestos: "S/3000 - S/4500",
          preferencias: "Gaming",
          tipo_pcs: "AMD",
        }
      }
    ]
  }
  return data
}
