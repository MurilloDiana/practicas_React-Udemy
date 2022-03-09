// funcion normal
function sumar(){
    console.log(10)
}
sumar()

// con parametro
function sumar(nro){
    console.log(nro)
}
sumar(10)
//arrow function

const sumar2 =()=>{
    console.log(20)
}
sumar2()

// con parametro
const sumar2 =(nro)=>{
    console.log(nro)
}
sumar2(20)

// cuando solo es un parametro en la arrow function solo se coloca la variable
// pero si son dos si o si se coloca el parentesis mas la coma como separacion
// y si no se recibe parametros solo se colocan parentesis


const resta=(nro1,nro2)=>{
    console.log(nro1-nro2)
}
resta(5,3)

const multiplicar=(nro1,nro2)=>{
    return (nro1*nro2)
}
let result=multiplicar(5,5)
console.log(result)

// al retornar un valor  se le debe asignar en una variable y luego recien ocupar el
// console log
// tambien se pueden hacer combinaciones de const y let, pero de preferencia no hacerlas
// para evitar confusiones

const div = (nro1,nro2)=> (nro1/nro2)

const result= div(5,1)
console.log(result)

// al ocupar arrow function y que esta solo tenga una simple cita se puede obviar las llaves
// y el return, y funcionara de la misma manera

const mensaje=nombre=>  "hola soy "+ nombre

const rest= mensaje("Diana")
console.log(rest)

// mas ejemplos con arrow functions

const sum3=(num=1)=>{// se puede asignar un valor predeterminado
console.log(num+3)
}

sum3() // si en caso no se le asigna un valor en el llamado de la funcion este se queda
// con el valor que tenia oredeterminado
