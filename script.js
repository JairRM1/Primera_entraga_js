


let nombre_usuario = prompt("Ingrese su nombre");

let edad = parseInt(prompt("Hola " + nombre_usuario + " ingresa tu edad: "));

alert("Gracias " + nombre_usuario + " vamos a calcular tu nivel en matemáticas");

const r_1 = 37;
const r_2 = 22000;
const r_3 = 9;
const r_4 = "1/6";
const r_5 = 3;
let acierto = 0;
let error = 0;

function aciertos(respuesta_correcta,respuesta_usuario){
    if(respuesta_correcta==respuesta_usuario){
        acierto++
    }else{
        error++
    }
};

let r_1_usuario = parseFloat(prompt("Primera pregunta; elige y escribe la respuesta correcta con numeros: La bolsa de valores inició sus actividades de la semana con 28 puntos; el lunes ganó 15 puntos, el martes perdió 12, el miercoles perdi{o 16, el jueves ganó 40 y el viernes perdió 18. ¿Concuántos puntos cerró la bolsa? A)37; B)40; c)9; D)32"));

aciertos(r_1,r_1_usuario);

let r_2_usuario = parseFloat(prompt("Segunda pregunta; elige y escribe la respuesta correcta con numeros: Un pueblo sufre una plaga de ratones que encuentran condiciones de reproducción al inicio de la cosecha, por lo que se espera un incremento de 120% de su población. ¿Cuál es el total de ratones al final de la temporada? A)12000 B)22000 C)120000 D)22000"));

aciertos(r_2,r_2_usuario);

let r_3_usuario = parseFloat(prompt("Tercera pregunta; elige y escribe la respuesta correcta con numeros: En la ecuación X-3=6 el valor de X es: A)-3; B)2; c)3; D)9"));

aciertos(r_3,r_3_usuario);

let r_4_usuario = prompt("Cuarta pregunta; elige y escribe la respuesta correcta con numeros: En una caja hay dos bolas rojas, cuatro blancas y 6 azules la probabilidad de extraer una bola y que sea roja, es: A)1/2; B)1/3; c)1/5; D)1/6");

aciertos(r_4,r_4_usuario);

let r_5_usuario = parseFloat(prompt("Quinta pregunta; elige y escribe la respuesta correcta con numeros: A partir del siguiente sistema de ecuaciones obtén el valor de x: 5x - 4y = 19 & 7x + 3y = 18. A)-3; B)-1; c)1; D)3"));

aciertos(r_5,r_5_usuario);

switch(acierto) {
    case 0:
    case 1:   
    case 2:  
    alert(nombre_usuario + " Obtubiste " + acierto + " aciertos" + " y " + error + " errores te recomendamos tomar un curso de aritmetica");
    break;

    case 3:
    case 4: 
    alert(nombre_usuario + " Obtubiste " + acierto + " aciertos" + " y " + error + " errores te recomendamos tomar un curso de algebra");
    break;

    case 5:
    alert(nombre_usuario + " Obtubiste " + acierto + " aciertos" + " y " + error + " errores te recomendamos tomar un curso de cálculo diferencial");
    break;
};


