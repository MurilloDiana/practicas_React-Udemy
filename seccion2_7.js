// template string

const numero =(num)=> {
    return "el nro es: "+num
}


const numero = (num) => {
    return `el numero es: ${num}` // ${nro1+nro2}
  }
  const resultado = numero(10)
  console.log(resultado) 

  // esas comillas se consiguen con alt+96 es para unir con javascript y ademas 
  // no tener el manejo de dos tipos de variables

  const numero = (num) => ( `el numero es: ${num}`) // ${nro1+nro2}
  
  const resultado = numero(10)
  console.log(resultado) 

  // tambien se puede cerrar con parentesis