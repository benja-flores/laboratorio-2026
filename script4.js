let numeros = [1,2,3,4,5]
for (let index = 0; index < numeros.length; index++){
    console.log (numeros[index]);
}

numeros.forEach(i => console.log(i));

// Devuelve un array nuevo modificado
numeros_por_dos = numeros.map(num => num * 2 )
console.log(numeros_por_dos);

// filter = saca o filtra lo que no queremos 
numeros_pares = numeros.filter(num => num%2 == 0 )
console.log(numeros_pares);