 /* Actividad 1 parte1: */
 console.log("Parte #1 de la atividad");

 let nombre = document.getElementById("NombreInput").value;
 let edad = parseInt(
   prompt("Introduzca su edad: ")
 );
 let EsEstudiante = prompt(
   "Introduzca (si ó no) ¿Usted es estuiante?"
 );

 if (EsEstudiante === "si") {
   EsEstudiante = "Estudiante";
 } else {;
   EsEstudiante = "No estudiante";
 }

 console.log("El nombre se inicializó con el texto de: " + nombre);
 console.log("la edad se inicializó con el valor de: " + edad);
 console.log("El etado de estudiante se inicilaizó en " + EsEstudiante);

 nombre = prompt("Introduzca el nombre para cambiar la variable: ");
 edad = parseInt(prompt("Introduzca la edad para cambiar la variable: "));
 EsEstudiante = prompt("Introduzca (si ó no) el estado de estudiante");

 if (EsEstudiante === "si") {
   EsEstudiante = "Estudiante";
 } else {
   EsEstudiante = "No estudiante";
 }
 console.log("\\n El nombre se cambió a: " + nombre);
 console.log("la edad se cambió a: " + edad);
 console.log("El etado se cambió a: " + EsEstudiante);

 /* Actividad 1 parte2: */
 console.log("\\nParte #2 de la atividad");
 let a = parseInt(prompt("introduzca un valor númerico para a"));
 let b = parseInt(prompt("introduzca un valor númerico para b"));

 let suma, resta, mult, divi;

 suma = a + b;
 resta = a - b;
 mult = a * b;
 divi = a / b;

 console.log("La suma entre a y b es de: " + suma);
 console.log("La resta entre a y b es de: " + resta);
 console.log("La multiplicación entre a y b es de: " + mult);
 console.log("La división entre a y b es de: " + divi);

 if (a == b) {
   console.log("\\n a y b tienen MISMO VALOR ==");
 } else {
   console.log("\\n a y b tienen DIFERENTE VALOR !=");
 }
 if (a < b) {
   console.log("\\n b es MAYOR QUE a <");
 } else {
   console.log("\\n a es MAYOR QUE b >");
 }
 if (a <= b) {
   console.log("\\n b es MAYOR QUE a O SON IGUALES <=");
 }
 if (a >= b) {
   console.log("\\n a es MAYOR QUE b O SON IGUALES >=");
 }

 
 /* Actividad 1 parte3: */
 console.log("\\n Parte #3 de la atividad");
 let esMayorDeEdad = false;
 if (edad >= 18) {
   esMayorDeEdad = true;
 }
 let tieneLicencia = prompt("Introduzca (si ó no) ¿Usted tiene licencia?");
 if (tieneLicencia === "si") {
   tieneLicencia = true;
 }else{
   tieneLicencia = false;
 }

 let mensaje_bienvenida = "";

 if (esMayorDeEdad == true && EsEstudiante == "Estudiante") {
   mensaje_bienvenida = `Binvenido señor@ ${nombre}, por su edad ${edad} y su estado ${EsEstudiante} tiene derecho a un descuento`;
 } else {
   mensaje_bienvenida = `Binvenido señor@ ${nombre}, por su edad ${edad} y su estado ${EsEstudiante} no tiene derecho a un descuento`;
 }
 console.log("\\n" + mensaje_bienvenida);
 if (esMayorDeEdad == true && tieneLicencia == true) {
   console.log("Además, tiene licencia por lo tanto puede conducir");
 }