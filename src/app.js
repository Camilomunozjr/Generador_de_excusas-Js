import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro', 'Mi hermano pequeño'];
  let action = ['se comió', 'se hizo pis en', 'aplastó', 'rompió', 'escondió'];
  let what = ['mi tarea', 'mi teléfono', 'el auto', 'las llaves', 'el informe'];
  let when = ['antes de clase', 'mientras dormía', 'durante el ejercicio', 'en el almuerzo', 'mientras rezaba', 'justo antes de salir'];
  
  let excusa = who[Math.floor(Math.random() * who.length)] + " " + action[Math.floor(Math.random() * action.length)] + " " + what[Math.floor(Math.random() * what.length)] + " " + when[Math.floor(Math.random() * when.length)]
    
  document.getElementById("excusas-random").textContent = excusa;
};
