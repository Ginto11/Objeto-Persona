const app = new Vue({
	el: "#app",
	data: {
		persona: {
			nombre: "",

			apellido: "",
			
			edad: "",
			
			pension: null,
			
			salud: null,
			
			genero: "Masculino",
			
			salarioMensual: 0,

			bebidasCompradas: [ ],

			elementoComprado: false,

			verInfo: false,

			informacion: "",

			active: true,

			elementosDeTecnologiaComprados: [ ],

			pasatiempos: [ ],

			salirFiesta: false,

			salirCompras: false,

			listaTecnologia: false,

			mostrarComputadores: false,

			mostrarCelulares: false,

			mostrarTelevisores: false,

			mostrarPortatiles: false,

			listaMuebles: false,

			mostrarMuebles: false,

			listaEnseres: false,

			mostrarEnseres: false,

			contactos: [ ],

			trabajo: "",
		},

		bebidas: {
			ron: {
				nombre: "Ron", gastoRon: 34000
			},

			cerveza: {
				nombre: "Cerveza", gastoCerveza: 3400
			},

			aguardiente: {
				nombre: "Aguardiente", gastoAguardiente: 40000
			},

			sixPack: {
				nombre: "SixPack", gastoSixPack: 12000
			},

			wisky: {
				nombre: "Wisky", gastoWisky: 20000
			},

			coctel: {
				nombre: "Coctel", gastoCoctel: 30000
			}
		},
		
		electrodomesticos: {

			tecnologia: {

				computadores: [
					{
						
						id: 1, nombre: "Computador HP", costo: 3400000,

						descripcion: `Computador todo en uno, procesador intel core 7,
							windows 10, 8 GB RAM, Disco duro en estado solido de 256 GB `
					},

					{
						
						id: 2, nombre: "Computador Lenovo", costo: 1200000,

						descripcion: `Computador con procesador pentium, con " GB de RAM, y Disco duro de 100GB`
					},

					{
						
						id: 3, nombre: "Computador Pc Smart", costo: 800000,

						descripcion: `Computador con procesador core i3, window 7, 2GB RAM, disco duro mecanico de 1 Tera`
					},

					{
						id: 4, nombre: "Computador Compact", costo: 1000000,

						descripcion: `Computador HP, con procesador core i3, con 4GB de RAM,
							disco duro mecanico de 1Tera, windows 7`
					}
				],

				celulares: [
					{
						id: 1, nombre: "Celular Samsung", costo: 700000,

						descripcion: `Celular samsung, con android 11, memoria Ram de 4GB, 32 GB, con protector incluido`
					},

					{
						id: 2, nombre: "Celular Huaweii", costo: 1200000,

						descripcion: `Celular con 164GB de almacenamiento, 20 megapixeles, con 8GB de RAM, android 10`
					},

					{
						id: 3, nombre: "Celular Vivo", costo: 400000,

						descripcion: `Celular marca vivo, con 32GB de almacenamiento, y 4GB de RAM, android 8`
					}
				],

				televisores: [
					{
						id: 1, nombre: "Televisor Samsung", costo: 200000,

						descripcion: `Pantalla led de 40 pulgadas, con base y soporte para colgar en la pared, de color negro`
					}, 

					{
						id: 2, nombre: "Televisor LG", costo: 300000,

						descripcion: `De color rojo, con 30 pulgadas y con soporte metalico`
					}
				],

				portatiles: [
					{
						id: 1, nombre: "Portatil HP", costo: 2200000,

						descripcion: `Pantalla de 14 pulgadas, con memoria Ram de 8GB, Dsico solido de 100GB, sistema operativo
							windows 10, procesador core i7`
					},

					{
						id: 2, nombre: "Portatil Lenovo", costo: 700000,

						descripcion: `Portatil de color azul, procesador pentium, con 2 procesadores, Amd, 2 GB de RAM
							y Disco duro mecanico de 100GB` 
					},

					{
						id: 3, nombre: "Portail Pc smart", costo: 1000000,

						descripcion: `Portatil de color rojo, procesador core i3, sistema operativo windows vista, 
							disco solido de 400GB, y 4 GB de RAM`
					},

					{
						id: 4, nombre: "Portatil Lenovo", costo: 1600000,

						descripcion: `Portatil de color gris, de 14 pulgadas, sistema operativo windows 7, disco solido de 160GB,
							 y de 8Gb de RAM`
					}
				]
			},

			mueblesYEnseres: {
				muebles: [
					{
						id: 1, nombre: "Sofa", costo: 300000,

						descripcion: "Sofa de color marron con 4 cogines"
					},

					{
						id: 2, nombre: "Comedor", costo: 200000,

						descripcion: "Comedor de 1.40 metros en madera de 6 posiciones"
					},

					{
						id: 3, nombre: "Comedor de Vidrio", costo: 400000,

						descripcion: "Comedor de vidrio, de 8 posiciones, de 2 metros"
					},

					{
						id: 4, nombre: "Mesa para Computador", costo: 100000,

						descripcion: "Mesa de madera de 1m * 1m, para computador de mesa"
					},

					{
						id: 5, nombre: "Vife", costo: 80000,

						descripcion: "Vife de madera con dos cajones y 4 gavetas"
					},

					{
						id: 6, nombre: "Silla interlocutora", costo: 40000,

						descripcion: "Silla interlocutora, con ajusta brazos y espaldar"
					}
				],

				enseres: [
					{
						id: 1, nombre: "Horno Microondas", costo: 100000,

						descripcion: "horno de color blanco, de (30 * 40)cm, para calentar pizza, papas, entre muchas cosas mas"
					},

					{
						id: 2, nombre: "Estufa", costo: 60000,

						descripcion: "Estufa de color negro, y de 4 posiciones"
					},

					{
						id: 3, nombre: "Equipo de Sonido", costo: 40000,

						descripcion: "Equipo de sonido con dos parlantes y ecualizador"
					},

					{
						id: 4, nombre: "Nevera", costo: 120000,

						descripcion: "Nevera de color gris de 1.60 metros, con dispensador de agua y congelamiento ajustable"
					},

					{
						id: 5, nombre: "Decoracion de Cascada", costo: 20000,

						descripcion: "Decoracion de cascada, de dos puestos de color negro"
					},

					{
						id: 6, nombre: "Baterias de Ollas", costo: 80000,

						descripcion: "Bateria de ollas con 4 ollas y 2 sartenes"
					}
				]


			}
		}
	}, 
	methods: {

		saludar(){
			if (this.persona.nombre != "") {
				alert(`Hola me llamo ${this.persona.nombre}`);
			}
			alert("Asigna un nombre")
		},

		setNombre(){
			this.persona.nombre = prompt("Cual nombre desea poner?");
		},

		setEdad(){
			if (this.persona.nombre == "" && this.persona.apellido == "") {

				this.persona.nombre = prompt("¿Cual es tu nombre?");

				this.persona.apellido = prompt("¿Cual es tu apellido?");

			} else if (this.persona.apellido == "") {

				this.persona.apellido = prompt("¿Cual es tu apellido?")

			} else if(this.persona.nombre == ""){

				this.persona.nombre = prompt("¿Cual es tu nombre?");
			}
			this.persona.edad = parseInt(prompt(`¿Cual es tu edad`));
		},

		setApellido(){
			this.persona.apellido = prompt("¿Cual es tu apellido?");
		},

		setEmpleo(){
			this.persona.trabajo = prompt("Cual es su trabajo y/o empleo?");
		},

		modificarPasatiempo(){
			let index = parseInt(prompt("Indice"))
			let pasatiempoAModificar = prompt("Pasatiempo al que desea modificar");

			if (index == "" || pasatiempoAModificar == "") {
				alert("Completa todos los campos")
			}
			else{
				this.persona.pasatiempos.splice(index, 1, pasatiempoAModificar);
			}
		}, 

		agregarPasatiempo(){
			let pasatiempo = prompt(`Dime un pasatiempo`)

			if (pasatiempo == "") {
				alert(`No escribiste ningun pasatiempo`)
			}else{
				this.persona.pasatiempos.push(pasatiempo)
			}

			
		},

		eliminarPasatiempo(){
			this.persona.pasatiempos.pop();
		}, 

		recibirSueldo(){
			if (this.persona.edad == "") {
				alert("Asigna una edad");
			}
			else if(this.persona.trabajo == ""){
				alert("No estas trabajando")
			}
			else if(this.persona.edad < 18) {
				alert("Tu no puedes recibir sueldo eres menor de edad");
				this.persona.trabajo = "No trabajo";
				this.persona.salarioMensual = 0;
			}else if(this.persona.edad >= 18){

				this.persona.salarioMensual = parseInt(prompt("Salario por recibir"));

				let pension = this.persona.salarioMensual * 0.04;
				let salud = this.persona.salarioMensual * 0.04;

				this.persona.pension = pension;
				this.persona.salud = salud;

				this.persona.salarioMensual -= pension + salud;

			}
			
		}, 

		comprarBebidas(){

			let gastoTotal = 0;
			
			if (document.getElementById("ron").checked) {
				this.persona.bebidasCompradas.push("Ron")
				gastoTotal += this.bebidas.ron.gastoRon
			}
			if (document.getElementById("cerveza").checked) {
				this.persona.bebidasCompradas.push("Cerveza")
				gastoTotal += this.bebidas.cerveza.gastoCerveza
			}
			if (document.getElementById("aguardiente").checked) {
				this.persona.bebidasCompradas.push("Aguardiente")
				gastoTotal += this.bebidas.aguardiente.gastoAguardiente
			}

			if (document.getElementById("sixPack").checked) {
				this.persona.bebidasCompradas.push("SixPack")
				gastoTotal += this.bebidas.sixPack.gastoSixPack
			}
			if (document.getElementById("wisky").checked) {
				this.persona.bebidasCompradas.push("Wisky")
				gastoTotal += this.bebidas.wisky.gastoWisky
			}
			if (document.getElementById("coctel").checked) {
				this.persona.bebidasCompradas.push("Coctel")
				gastoTotal += this.bebidas.coctel.gastoCoctel
			}

			this.persona.salirFiesta = false;

			efectivoActual = this.persona.salarioMensual

			alert("Tus gastos totales fueron: " + gastoTotal + "\n" + efectivoActual + " - " + gastoTotal + " = " + (efectivoActual-gastoTotal) + " Pesos")

			this.persona.salarioMensual -= gastoTotal
		},

		salirDeFiesta(){
			
			if (this.persona.edad == "" || this.persona.salarioMensual == null) {
				
				if (this.persona.edad == "") {

					alert("Asigna una edad")
					this.persona.salirFiesta = false;
				}
				if (this.persona.salarioMensual == null) {

					alert("No tienes plata para salir")
					this.persona.salirFiesta = false;
				}
			}
			else if (this.persona.edad >= 18) {

				alert("Puedes salir de fiesta eres mayor de edad :)")
				alert(`Vas a comprar unas bebidas, ¿cuales prefieres?`)
				this.persona.salirFiesta = true;

			}else{

				this.persona.salirFiesta = false;
				alert("No puedes salir eres menor de edad :(")
				this.persona.trabajo = "No trabajo";
				this.persona.salarioMensual = 0;

			}
			return this.persona.salirFiesta;
		},


		salirCompras(){

			if (this.persona.salarioMensual == null) {

				alert("No tienes plata para salir")
				this.persona.salirCompras = false;

			} else {

				alert("Puedes salir a comprar, ¿que electrodomesticos deseas?")
				this.persona.active = false;
				this.persona.salirCompras = true;
			}
			
			return this.persona.salirCompras;
		},

		traerElectrodomesticos(){
			let lista = document.getElementById("selectElementos");


			if (lista.value == "tecnologia") {
				if (this.persona.listaMuebles === true) this.persona.listaMuebles = false;
				return this.persona.listaTecnologia = true;
			} 

			if (lista.value == "muebles") {
				if (this.persona.listaTecnologia === true) this.persona.listaTecnologia = false;
				return this.persona.listaMuebles = true;
			} 
		},

		mostrarMueblesYEnseres(){
			let mueblesEnseres = document.getElementById("muebles_enseres");


			if (mueblesEnseres.value == "muebles") {
				if (this.persona.mostrarEnseres === true) this.persona.mostrarEnseres = false;
					return this.persona.mostrarMuebles = true;

			} 

			if (mueblesEnseres.value == "enseres") {
				if (this.persona.mostrarMuebles === true) this.persona.mostrarMuebles = false;
				return this.persona.mostrarEnseres = true;
			} 
		},

		//ELEMENTOS DE TECNOLOGIA

		mostrarElementosTecnolgia(){
			let tecnologia = document.getElementById("tecnologia")

			if (tecnologia.value == "") {
				if (this.persona.mostrarPortatiles === true) this.persona.mostrarComputadores = false;
				if (this.persona.mostrarCelulares === true) this.persona.mostrarCelulares = false;
				if (this.persona.mostrarTelevisores === true) this.persona.mostrarTelevisores = false;
				if (this.persona.mostrarComputadores === true) this.persona.mostrarComputadores = false;
			}

			if(tecnologia.value == "computador"){
				if (this.persona.mostrarPortatiles === true) this.persona.mostrarPortatiles = false;
				if (this.persona.mostrarCelulares === true) this.persona.mostrarCelulares = false;
				if (this.persona.mostrarTelevisores === true) this.persona.mostrarTelevisores = false;
				return this.persona.mostrarComputadores = true;
			} 

			if(tecnologia.value == "celular"){
				if (this.persona.mostrarComputadores === true) this.persona.mostrarComputadores = false;
				if (this.persona.mostrarPortatiles === true) this.persona.mostrarPortatiles = false;
				if (this.persona.mostrarTelevisores === true) this.persona.mostrarTelevisores = false;
				return this.persona.mostrarCelulares = true;
			} 

			if (tecnologia.value == "televisor") {
				if (this.persona.mostrarComputadores === true) this.persona.mostrarComputadores = false;
				if (this.persona.mostrarPortatiles === true) this.persona.mostrarPortatiles = false;
				if (this.persona.mostrarCelulares === true) this.persona.mostrarCelulares = false;
				return this.persona.mostrarTelevisores = true;
			}

			if (tecnologia.value == "portatil") {
				if (this.persona.mostrarTelevisores === true) this.persona.mostrarTelevisores = false;
				if (this.persona.mostrarComputadores === true) this.persona.mostrarComputadores = false;
				if (this.persona.mostrarCelulares === true) this.persona.mostrarCelulares = false;
				return this.persona.mostrarPortatiles = true;
			}

		},

		comprarComputador(){
			let opcion = Number(prompt("Cual Computador eligues comprar (Escribe el numero)"))

			if (this.electrodomesticos.tecnologia.computadores.length < opcion) return alert("Opcion incorrecta")
			if (opcion === 0) return alert("La opcion no puede ser 0")

			this.electrodomesticos.tecnologia.computadores.forEach((elemento, index) =>{
				if ((index+1) == opcion) {
					
					let efectivoActual = this.persona.salarioMensual
					
					if (efectivoActual > elemento.costo){


						 let costo = elemento.costo

						 this.persona.salarioMensual -= costo

						 this.persona.elementoComprado = true;

						 this.persona.elementosDeTecnologiaComprados.push({ nombre: elemento.nombre, 
						 													costo: elemento.costo, 
						 													descripcion: elemento.descripcion})

						 return alert("Has comprado el " + elemento.nombre)
					}
					return alert("No tienes suficiente dinero para comprar " + elemento.nombre)
				}
			})
		},

		comprarCelular(){
			let opcion = Number(prompt("Cual Celular eligues comprar (Escribe el numero)"))

			if (this.electrodomesticos.tecnologia.celulares.length < opcion) return alert("Opcion incorrecta")
			if (opcion === 0) return alert("La opcion no puede ser 0")

			this.electrodomesticos.tecnologia.celulares.forEach((elemento, index) =>{
				if ((index+1) == opcion) {
					
					let efectivoActual = this.persona.salarioMensual
					
					if (efectivoActual > elemento.costo){


						 let costo = elemento.costo

						 this.persona.salarioMensual -= costo

						 this.persona.elementoComprado = true;

						 this.persona.elementosDeTecnologiaComprados.push({ nombre: elemento.nombre, 
						 													costo: elemento.costo, 
						 													descripcion: elemento.descripcion})

						 return alert("Has comprado el " + elemento.nombre)
					}
					return alert("No tienes suficiente dinero para comprar " + elemento.nombre)
				}
			})
		},

		comprarTelevisor(){
			let opcion = Number(prompt("Cual Televisor eligues comprar (Escribe el numero)"))

			if (this.electrodomesticos.tecnologia.televisores.length < opcion) return alert("Opcion incorrecta")
			if (opcion === 0) return alert("La opcion no puede ser 0")

			this.electrodomesticos.tecnologia.televisores.forEach((elemento, index) =>{
				if ((index+1) == opcion) {
					
					let efectivoActual = this.persona.salarioMensual
					
					if (efectivoActual > elemento.costo){


						 let costo = elemento.costo

						 this.persona.salarioMensual -= costo

						 this.persona.elementoComprado = true;

						 this.persona.elementosDeTecnologiaComprados.push({ nombre: elemento.nombre, 
						 													costo: elemento.costo, 
						 													descripcion: elemento.descripcion})

						 return alert("Has comprado el " + elemento.nombre)
					}
					return alert("No tienes suficiente dinero para comprar " + elemento.nombre)
				}
			})
		},

		comprarPortatil(){
			let opcion = Number(prompt("Cual Portatil eligues comprar (Escribe el numero)"))

			if (this.electrodomesticos.tecnologia.portatiles.length < opcion) return alert("Opcion incorrecta")
			if (opcion === 0) return alert("La opcion no puede ser 0")

			this.electrodomesticos.tecnologia.portatiles.forEach((elemento, index) =>{
				if ((index+1) == opcion) {
					
					let efectivoActual = this.persona.salarioMensual
					
					if (efectivoActual > elemento.costo){


						 let costo = elemento.costo

						 this.persona.salarioMensual -= costo

						 this.persona.elementoComprado = true;

						 this.persona.elementosDeTecnologiaComprados.push({ nombre: elemento.nombre, 
						 													costo: elemento.costo, 
						 													descripcion: elemento.descripcion})

						 return alert("Has comprado el " + elemento.nombre)
					}
					return alert("No tienes suficiente dinero para comprar " + elemento.nombre)
				}
			})
		}

	}
})


document.addEventListener("DOMContentLoaded", () =>{
	fetch("./data/data.json")
	.then((res) => console.log(res))
})