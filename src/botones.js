import { randomNumber } from "./lib/functions.js";

export const pintarBoton =  () => {

  const number = randomNumber();
  console.log(number);
  let color = 'red';

  if(number <= 5){
    color = 'blue';
  }

  const div = document.getElementById('root');
  div.innerHTML = `<button id="boton" style="background-color:${color};">ESTO ES UN BOTON</button>`;

};
