// Control de Flujo

const edad = 5;

// Condicional IF


if(edad > 5 && edad < 18){
    console.log('El nino puede jugar');
}else{
    console.log('El nino no puede jugar');
}


// Bucle WHILE

let x = 0;
while(x <= 5){ // Bucle hasta que la condicion se deje de cumplir
    console.log(x);
    x++;
}


// Switch
let y = 3;
switch(y){
    case 1: {
        console.log('Yo soy el caso 1');
        break;
    }
    case 2: {
        console.log('Chanchito feliz');
        break;
    }
    case 3: 
        console.log('Chanchito triste');
        break;
    default:
        console.log('No hay chanchitos');
        break;
}


// Bucle FOR
for ( let i = 0 ; i < 10 ; i++ ){
    console.log(i);
}

// Acceder a los elementos de un arreglo usando FOR

const Numeros = [1, 2, 3, 4, 5, 6];

let largo = Numeros.length; // Longitud del arreglo.

for ( let i = 0 ; i < largo ; i++ ){
    console.log(Numeros[i]);
}