
let array1 = [1,2,3,4,5,6,7,8,9];
function mostrar_lista(){
    let lista =  document.getElementById("respuesta");
    lista.textContent = ""
    for(let numero of array1){
        let item = document.createElement("li")
        item.innerText = numero;
        lista.appendChild(item);
    }
}
function promedio() {
    let suma = 0;
    let cont = 0;
    for (let numero of array1) {
        suma += numero;
        cont += 1;
    }
    let pro = suma / cont;
    let lista = document.getElementById("respuesta2");
    lista.textContent = "";  
    let item = document.createElement("li");
    item.innerText = "El Promedio de las calificaciones es : " + pro;
    lista.appendChild(item);
}
// function mayor() {
//     let mayor = array1[0];
//     for (let numero of array1) {
//         if (numero > mayor){
//             mayor = numero;
//         }
        
//     }
//     let lista = document.getElementById("respuesta3");
//     lista.textContent = "";  
//     let item = document.createElement("li");
//     item.innerText = "Mayor: " + mayor;
//     lista.appendChild(item);
// }
function mayor() {
    let mayor = 0;
    let i = 0;
    while (i < array1.length) {
        let calificacionActual = array1[i];
        if (calificacionActual > mayor) {
            mayor = calificacionActual; 
        }
        i++; 
    }
    let lista = document.getElementById("respuesta3");
    lista.textContent = ""; 
    let item = document.createElement("li");
    item.innerText = "La Calificación más alta : " + mayor;
    lista.appendChild(item);  
}


function aplaza() {
    let i = 0;
    let aplazo = false; 
    do {
        if (array1[i] < 4) { 
            aplazo = true;
            break;
        }
        i++; 
    } while (i < array1.length);
    let lista = document.getElementById("respuesta4");
    lista.textContent = ""; 
    let item = document.createElement("li");

    if (aplazo) {
        item.innerText = "¡Tenemos un aplazo!"; 
    } else {
        item.innerText = "No Tenemos un aplazo"; 
    }

    lista.appendChild(item);
}