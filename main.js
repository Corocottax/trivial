import { preguntas } from "./preguntas";
import "./style.css"

const RESULTADOS = [];

const initHome = () => {

  pintarPreguntas();
};

const pintarPreguntas = () => {
  const app$$ = document.querySelector("#app");

  for (const tarjeta of preguntas) {

    RESULTADOS.push({
      respuestaCorrecta: tarjeta.correcta,
      respuestaElegida: "",
    });

    const tarjeta$$ = document.createElement("div");
    const pregunta$$ = document.createElement("h3");

    tarjeta$$.className = "tarjeta";
    pregunta$$.textContent = tarjeta.pregunta;

    tarjeta$$.appendChild(pregunta$$);

    tarjeta.respuestas.forEach((respuesta) => {
      const respuesta$$ = document.createElement("h4");

      respuesta$$.textContent = respuesta;
      respuesta$$.addEventListener("click", () => elegir(tarjeta, respuesta, respuesta$$));

      tarjeta$$.appendChild(respuesta$$);
    });

    app$$.appendChild(tarjeta$$);
  }

};

const elegir = (tarjeta, respuesta, respuesta$$) => {

  respuesta$$.className = "seleccionada";

  const posicion = preguntas.indexOf(tarjeta);

  RESULTADOS[posicion].respuestaElegida = respuesta;

  let relleno = true;

  for (const resultado of RESULTADOS) {
    if (resultado.respuestaElegida === "") {
      relleno = false;
    }
  }

  if (relleno) {
    const comprobar$$ = document.querySelector("#comprobar");

    comprobar$$.addEventListener("click", comprobar);
  }

}

const comprobar = () => {

  let correctas = 0;
  let incorrectas = 0;

  for (const resultado of RESULTADOS) {
    if (resultado.respuestaCorrecta === resultado.respuestaElegida) {
      correctas++;
    } else {
      incorrectas++;
    }
  }

  alert(`Has sacado un: ${correctas}`)

}

initHome();
