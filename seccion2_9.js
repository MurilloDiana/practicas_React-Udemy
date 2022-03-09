//destructuring javascript object
const mascota ={
    
    nombre:"kitty",
    edad:10,
    vivo:true,
    raza:['negro','conejo']
}

// se puede llamar en console o sino variable

// forma de destructuring  const{propiedad}=objeto
//tambien se puede colocar dentro de la llave una coma para poder
//colocar mas datos
const {nombre} = mascota
console.log(nombre)