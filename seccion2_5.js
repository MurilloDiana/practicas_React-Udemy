//var
// var permite declarar dos veces la misma variable y devuelve el valor de la ultima asignacion
var nro1=10
var nro1=20
console.log(nro1) //return 20

//////////////////////////////////////////////////////

//let 
// let solo permite declarar una variable una vez ya que si no genera error

let edad=10
let edad=20  
console.log(edad)//error de sintaxis

// si en caso se quiere reasignar un valor solo se la declara una vez
let edad=10
 edad=20  
console.log(edad) // return 20

// const
// es una variable definitiva que su valor no cambia con el tiempo
const nro2=20 
console.log(nro2) // return 20

//ejemplos con var

var c1=10
if(true){
    var c1=20
    console.log(c1) // return 20
}
console.log(c1) //return 20

// en este ejemplo se aprecia que el valor de c1 se mantuvo con la ultima asignacion pese a que tambien se imprime
// fuera del if.

//ejemplos con let
let edad =10
if(true){
    let edad2=20
    console.log(edad2)  //return 20
}
console.log(edad) // return 10
console.log(edad2)//error de referencia
//let dentro del if se imprime 20 porque asi fue reasignado pero fuera de ello tiene el valor de 10
//porque ese es el valor principal porque esta de valor global
//existe ese error de referencia,porque edad2 solo existe dentro del if, y al salir de ahi no tiene un valor 
//asignado.

// const
const x=10
if(true){
    const x=20
    console.log(x)//return 20
}
console.log(x) // return 10

// al igual que let la varible x dentro del if se queda con el valor reasignado y si esta fuera queda con su
// valor principal

// pero si se coloca de la misma manera:
const x=30
const x=20 // error de sintaxis
// genera error, no se puede reescribir la variable como let

// array de numeros
//var
var array1=[10,20,30]
var array1=[10,20,30,40]
console.log(array1) // return [10,20,30,40]
// se concatena, no hacer NUNCA 
//let
let array1=[10,20,30]
 array1=[10,20,30,40]
console.log(array1) // return [10,20,30,40]
// se concatena, no hacer NUNCA 

// const
const array1=[10,20,30]
 array1.push(50)
console.log(array1) // return [10,20,30,50]

// otro ejemplo con const
// const no cambia el valor siempre y cuando sea un array u objeto que se este modificando
const persona={
    nombre='Diana',
    edad=22
}

persona.edad=21
persona.pais='Japon'

console.log(persona)  //return object{nombre:"Diana", edad:21, pais:"Japon"}