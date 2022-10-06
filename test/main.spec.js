import JSDOMEnvironment from "jest-environment-jsdom";
import { pintarBoton } from "../src/botones"

jest.mock('../src/lib/functions.js');

describe('Pruebas de pintarBoton', () => {

  it('Debe pintarlo rojo', () => {
    //1. asegurar las condicion para ejecutar la prueba
    document.body.innerHTML = '<div id="root"></div>';
    //2. ejecutar la funciona o el procedimiento que me interesa probar
    pintarBoton();
    //3. los expect, confirmar
    const button = document.getElementById('boton');
    expect(button.style.backgroundColor).toBe('red');
  });


  it('Debe pintarlo azul', () => {
    document.body.innerHTML = '<div id="root"></div>';
    pintarBoton();
    const button = document.getElementById('boton');
    expect(button.style.backgroundColor).toBe('blue');
  });
})