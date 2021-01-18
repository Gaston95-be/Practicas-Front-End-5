const materiasHTML = document.querySelector(".materias");


const materias = [
	{
		nombre: "Fisica II",
		nota: 7
	},
	{
		nombre: "Fisica III",
		nota: 6
	},
	{
		nombre: "Química",
		nota: 8
	},
	{
		nombre: "Matemática",
		nota: 7
	},
	{
		nombre: "Lógica III",
		nota: 9
	},
]




const obtenerMateria = (id)=>{
	return new Promise((resv,rjt)=>{
		materia = materias[id];
		if (materia == undefined) rjt("No existe la materia");
		//Al simular que el pedido de datos es a un servidor le agregue lo que sigue:
		else setTimeout(()=>{resv(materia)},Math.random()*1300);
	})
}

const devolverMaterias = async ()=>{
	let materia = [];
	for (let i = 0; i < materias.length; i++){
		materia[i] = await obtenerMateria(i);
		console.log(materia[i]);
		let newHTMLCode = `<div class="materia">
			<div class="nombre">${materia[i].nombre}</div>
			<div class="nota">${materia[i].nota}</div>
		</div> `;
		materiasHTML.innerHTML += newHTMLCode;
	}

}


devolverMaterias();