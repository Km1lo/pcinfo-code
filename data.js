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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
        id: 5,
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
        id: 1,
        comentario: "Gracias por la recomendacion",
        fecha: "2023-04-10",
        cliente:
        {
          id: 1,
          estado_actividad: true,
          presupuestos: "S/2500 - S/3800",
          preferencias: "Minimalista",
          tipo_pcs: "Intel",
        }

      },
      {
        id: 2,
        comentario: "Oigan capos su página me savlo de apuros thanks",
        fecha: "2023-04-11",
        cliente:
        {
          id: 2,
          estado_actividad: true,
          presupuestos: "S/1500 - S/2300",
          preferencias: "RGB",
          tipo_pcs: "AMD",
        }
      },
      {
        id: 3,
        comentario: "Me guto pero espero un poco mas de recomendaciones",
        fecha: "2023-04-12",
        cliente:
        {
          id: 3,
          estado_actividad: true,
          presupuestos: "S/4000 - S/6500",
          preferencias: "Streaming",
          tipo_pcs: "AMD",
        }
      }
    ],
    cuestionario: [
      {
        id: 1,
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
          id: 1,
          estado_actividad: true,
          presupuestos: "S/2500 - S/3800",
          preferencias: "Minimalista",
          tipo_pcs: "Intel",
        }

      },
      {
        id: 2,
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
          id: 2,
          estado_actividad: true,
          presupuestos: "S/1500 - S/2300",
          preferencias: "RGB",
          tipo_pcs: "AMD",
        }
      },
      {
        id: 3,
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
          id: 3,
          estado_actividad: true,
          presupuestos: "S/4000 - S/6500",
          preferencias: "Streaming",
          tipo_pcs: "AMD",
        }
      },
      {
        id: 4,
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
          id: 4,
          estado_actividad: true,
          presupuestos: "S/1200 - S/2000",
          preferencias: "basico",
          tipo_pcs: "Intel",
        }
      },
      {
        id: 5,
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
          id: 5,
          estado_actividad: true,
          presupuestos: "S/3000 - S/4500",
          preferencias: "Gaming",
          tipo_pcs: "AMD",
        }
      }
    ],

    recomendacion: [
      {
        id:1,
        valoracion_user: 4,
        notas_adicionales: "Me gustó la recomendación brindada",
        cuestionario:
        {
          id: 3,
          tipo_form: "Corto",
          Uso_de_PC: "Alta",
          Presupuesto: "",
          Tamaño_del_PC: "Estandar-(ATX)",
          Diseño: "RGB",
          Tipo_de_refrigeración: "",
          Overclocking: false,
          Marca_Procesador: "AMD",
          Programas_used: "OBS,Photoshop",
        }
      },
      {
        id: 2,
        valoracion_user: 5,
        notas_adicionales:"Me encantó la sugerencia que se me ha dado",
        cuestionario:
        {
          id: 4,
        tipo_form: "Corto",
        Uso_de_PC: "Gaming",
        Presupuesto: "Economica",
        Tamaño_del_PC: "Pequeño-(Micro ATX)",
        Diseño: "Normal",
        Tipo_de_refrigeración: "",
        Overclocking: false,
        Marca_Procesador: "Intel",
        Programas_used: "",
        }
      },
      {
        id: 3,
        valoracion_user: 3,
        notas_adicionales:"Estoy un poco en desacuerdo con la recomendación dada",
        cuestionario:
        {
          id: 1,
          tipo_form: "Largo",
          Uso_de_PC: "Edicion",
          Presupuesto: "Media-Alta",
          Tamaño_del_PC: "Estandar-(ATX)",
          Diseño: "Minimalista",
          Tipo_de_refrigeración: "Aire",
          Overclocking: false,
          Marca_Procesador: "Intel",
          Programas_used: "Adobe Premiere Pro 2022, Vegas Pro 18",
        }
      },
      {
        id: 4,
        valoracion_user: 2,
        notas_adicionales:"No estoy tan de acuerdo con la recomendación",
        cuestionario:
        {
          id: 1,
          tipo_form: "Largo",
          Uso_de_PC: "Edicion",
          Presupuesto: "Media-Alta",
          Tamaño_del_PC: "Estandar-(ATX)",
          Diseño: "Minimalista",
          Tipo_de_refrigeración: "Aire",
          Overclocking: false,
          Marca_Procesador: "Intel",
          Programas_used: "Adobe Premiere Pro 2022, Vegas Pro 18",
        }
      },
      {
        id: 5,
        valoracion_user: 4,
        notas_adicionales:"Me agrada la recomendación que se me ha brindado",
        cuestionario:
        {
          id: 3,
          tipo_form: "Corto",
          Uso_de_PC: "Alta",
          Presupuesto: "",
          Tamaño_del_PC: "Estandar-(ATX)",
          Diseño: "RGB",
          Tipo_de_refrigeración: "",
          Overclocking: false,
          Marca_Procesador: "AMD",
          Programas_used: "OBS,Photoshop",
        }
      }
    ],

    componente:[
      {
        id:1,
        marca: "Intel",
        puntaje:6,
        descripcion:"El conjunto de productos son optimos para el desarrollo de diferentes actividades de gama media",
        generacion:"i5 de 11600",
        nombre_producto:"Procesadores Intel Core i5 de 11° generación",
        litografia:"14nm",
        precio_recomend:"$213.00-$224.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"",
        color:"",
        tamano:"",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
          {
            id:1,
            valoracion_user: 4,
            notas_adicionales: "Me gustó la recomendación brindada",
          }
      },
      {
        id:1,
        marca: "",
        puntaje:7,
        descripcion:"",
        generacion:"",
        nombre_producto:"Corsair Vengeance LPX 16 GB (2x8 GB) DDR4",
        litografia:"",
        precio_recomend:"$85.00 - $94.00",
        velocidad_memoriaram:"DRAM 3200 MHz",
        tipo_chipset:"Intel XMP 2.0",
        compatibilidad:"Intel & AMD",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"",
        color:"",
        tamano:"",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
          {
            id:1,
            valoracion_user: 4,
            notas_adicionales: "Me gustó la recomendación brindada",
          }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"El conjunto de productos son optimos para el desarrollo de diferentes actividades de gama media",
        generacion:"",
        nombre_producto:"NVIDIA - Tarjeta gráfica GeForce RTX 3090",
        litografia:"",
        precio_recomend:"$1699.00 - $1720.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "GDDR6X",
        velocidad_reloj_gpu:"1800 MHz",
        tmn_ram:"24GB",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"",
        color:"",
        tamano:"",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
          {
            id:1,
            valoracion_user: 4,
            notas_adicionales: "Me gustó la recomendación brindada",
          }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"El conjunto de productos son optimos para el desarrollo de diferentes actividades de gama media",
        generacion:"",
        nombre_producto:"ASUS TUF Gaming B560M-PLUS WiFi LGA1200",
        litografia:"",
        precio_recomend:"$205.00 - $220.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"Intel 10° & 11° generación",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"LGA 1200",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"",
        color:"",
        tamano:"Micro ATX",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
          {
            id:1,
            valoracion_user: 4,
            notas_adicionales: "Me gustó la recomendación brindada",
          }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"El conjunto de productos son optimos para el desarrollo de diferentes actividades de gama media",
        generacion:"",
        nombre_producto:"Kingston 960GB A400 SATA3 2.5' SSD",
        litografia:"",
        precio_recomend:"$93.00 - $104.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"960GB",
        tipo_almacenamiento:"Solido",
        tipo_fuente:"",
        color:"",
        tamano:"",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"450 MB/S",
        veloc_lect:"500 MB/S",
        recomendacion:
          {
            id:1,
            valoracion_user: 4,
            notas_adicionales: "Me gustó la recomendación brindada",
          }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"DISCO DURO 1TB WESTERN DIGITAL BLUE PARA PC",
        generacion:"",
        nombre_producto:"Procesadores Intel Core i5 de 11° generación",
        litografia:"",
        precio_recomend:"$53.00 - $64.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"1TB",
        tipo_almacenamiento:"",
        tipo_fuente:"",
        color:"",
        tamano:"",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"7200 RPM",
        veloc_lect:"",
        recomendacion:
          {
            id:1,
            valoracion_user: 4,
            notas_adicionales: "Me gustó la recomendación brindada",
          }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"",
        generacion:"",
        nombre_producto:"1STPlayer-DK-D4",
        litografia:"14nm",
        precio_recomend:"$63.00 - $74.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"Sin Fuente",
        color:"Negro",
        tamano:"ATX - MICRO ATX",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
          {
            id:1,
            valoracion_user: 4,
            notas_adicionales: "Me gustó la recomendación brindada",
          }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"",
        generacion:"",
        nombre_producto:"Corsair serie RMX, RM750x",
        litografia:"",
        precio_recomend:"$191.00 - $200.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"Sin Fuente",
        color:"Negro",
        tamano:"",
        certificacion:"80+ Gold",
        vatios:"750 Vatios",
        sistema_modular:"Sí",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
          {
            id:1,
            valoracion_user: 4,
            notas_adicionales: "Me gustó la recomendación brindada",
          }
      },










      {
        id:1,
        marca: "Intel",
        puntaje:6,
        descripcion:"El conjunto de productos son optimos para el desarrollo de diferentes actividades de gama media",
        generacion:"i5 de 11600",
        nombre_producto:"Procesadores Intel Core i5 de 11° generación",
        litografia:"14nm",
        precio_recomend:"$213.00-$224.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"",
        color:"",
        tamano:"",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
        {
          id: 5,
          valoracion_user: 4,
          notas_adicionales:"Me agrada la recomendación que se me ha brindado",
        }
      },
      {
        id:1,
        marca: "",
        puntaje:7,
        descripcion:"",
        generacion:"",
        nombre_producto:"Corsair Vengeance LPX 16 GB (2x8 GB) DDR4",
        litografia:"",
        precio_recomend:"$85.00 - $94.00",
        velocidad_memoriaram:"DRAM 3200 MHz",
        tipo_chipset:"Intel XMP 2.0",
        compatibilidad:"Intel & AMD",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"",
        color:"",
        tamano:"",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
        {
          id: 5,
          valoracion_user: 4,
          notas_adicionales:"Me agrada la recomendación que se me ha brindado",
        }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"El conjunto de productos son optimos para el desarrollo de diferentes actividades de gama media",
        generacion:"",
        nombre_producto:"NVIDIA - Tarjeta gráfica GeForce RTX 3090",
        litografia:"",
        precio_recomend:"$1699.00 - $1720.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "GDDR6X",
        velocidad_reloj_gpu:"1800 MHz",
        tmn_ram:"24GB",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"",
        color:"",
        tamano:"",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
        {
          id: 5,
          valoracion_user: 4,
          notas_adicionales:"Me agrada la recomendación que se me ha brindado",
        }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"El conjunto de productos son optimos para el desarrollo de diferentes actividades de gama media",
        generacion:"",
        nombre_producto:"ASUS TUF Gaming B560M-PLUS WiFi LGA1200",
        litografia:"",
        precio_recomend:"$205.00 - $220.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"Intel 10° & 11° generación",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"LGA 1200",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"",
        color:"",
        tamano:"Micro ATX",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
        {
          id: 5,
          valoracion_user: 4,
          notas_adicionales:"Me agrada la recomendación que se me ha brindado",
        }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"El conjunto de productos son optimos para el desarrollo de diferentes actividades de gama media",
        generacion:"",
        nombre_producto:"Kingston 960GB A400 SATA3 2.5' SSD",
        litografia:"",
        precio_recomend:"$93.00 - $104.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"960GB",
        tipo_almacenamiento:"Solido",
        tipo_fuente:"",
        color:"",
        tamano:"",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"450 MB/S",
        veloc_lect:"500 MB/S",
        recomendacion:
        {
          id: 5,
          valoracion_user: 4,
          notas_adicionales:"Me agrada la recomendación que se me ha brindado",
        }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"DISCO DURO 1TB WESTERN DIGITAL BLUE PARA PC",
        generacion:"",
        nombre_producto:"Procesadores Intel Core i5 de 11° generación",
        litografia:"",
        precio_recomend:"$53.00 - $64.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"1TB",
        tipo_almacenamiento:"",
        tipo_fuente:"",
        color:"",
        tamano:"",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"7200 RPM",
        veloc_lect:"",
        recomendacion:
        {
          id: 5,
          valoracion_user: 4,
          notas_adicionales:"Me agrada la recomendación que se me ha brindado",
        }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"",
        generacion:"",
        nombre_producto:"1STPlayer-DK-D4",
        litografia:"14nm",
        precio_recomend:"$63.00 - $74.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"Sin Fuente",
        color:"Negro",
        tamano:"ATX - MICRO ATX",
        certificacion:"",
        vatios:"",
        sistema_modular:"",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
        {
          id: 5,
          valoracion_user: 4,
          notas_adicionales:"Me agrada la recomendación que se me ha brindado",
        }
      },
      {
        id:1,
        marca: "",
        puntaje:6,
        descripcion:"",
        generacion:"",
        nombre_producto:"Corsair serie RMX, RM750x",
        litografia:"",
        precio_recomend:"$191.00 - $200.00",
        velocidad_memoriaram:0,
        tipo_chipset:"",
        compatibilidad:"",
        tipo_mmr: "",
        velocidad_reloj_gpu:"",
        tmn_ram:"",
        tmn_placa_madre:"",
        zocalo:"",
        tmn_memoria:"",
        tipo_almacenamiento:"",
        tipo_fuente:"Sin Fuente",
        color:"Negro",
        tamano:"",
        certificacion:"80+ Gold",
        vatios:"750 Vatios",
        sistema_modular:"Sí",
        veloc_escrit:"",
        veloc_lect:"",
        recomendacion:
        {
          id: 5,
          valoracion_user: 4,
          notas_adicionales:"Me agrada la recomendación que se me ha brindado",
        }
      }
    ]




  }
  return data
}
