const btnRef = document.querySelectorAll(".btnRef");
const draw = document.querySelector(".draw");
const restart = document.querySelector(".restart");
const botonNueva = document.querySelector(".boton_nueva_partida");
const popUp = document.querySelector(".nueva_partida");


//Estos son los posibles patrones ganadores
let patronesGanadores = [ 
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //Funcion que activa los botones y resetea los ajustes para una nueva partida. Utilizada en boton Restart y Nueva Partida.
  const activarBotones = ()=>{
      btnRef.forEach((element)=>{
          element.disabled = false;
          element.innerText = "";
          draw.innerHTML = "";
          for(let i=0;i<btnRef.length;i++){
            btnRef[i].style.backgroundColor= "white";
            btnRef[i].classList.remove("turnoX");
            btnRef[i].classList.remove("turnoO");
        }
      })
  }

  //Funcion que desactiva botones, utilizada al ganar.
  const desactivarBotones = ()=>{
      btnRef.forEach((element)=>{
          element.disabled = true;
      })
      
  }

  //Boton para resetear el tablero y empezar de 0
  restart.addEventListener("click",()=>{
      contador = 0;
      turnoX = true;
      activarBotones();
  })

  //Funcion que se ejecuta al haber empate. Cambia el color y aparece mensaje de que empate
  const esEmpate = ()=>{
      for(let i=0;i<btnRef.length;i++){
          btnRef[i].style.backgroundColor= "hsl(213, 19%, 18%)";
      }
      draw.innerHTML = "¡Es un empate!"
  }

  //Funcion cuando hay ganador. Se desplega POP UP
  const funcionGanadora = (letra)=>{
      desactivarBotones();
      popUp.style.display = "flex";
      if(letra=="X"){
      document.getElementById("ganador").innerHTML = `<h2 id="ganador">Ha ganado la <span class="turnoX_grande">${letra}</span></h2>`
    } else{
        document.getElementById("ganador").innerHTML = `<h2 id="ganador">Ha ganado la <span class="turnoO_grande">${letra}</span></h2>`
    }
    
  }

  //El jugador de X juega primero
  let turnoX = true;
  let contador = 0;


  //Funcion para recorrer los array de patrones ganadores y verficar coincidencia
  const chequearGanador = ()=>{
    for (ganador of patronesGanadores){
        let [element1,element2,element3] = [
            btnRef[ganador[0]].innerText,
            btnRef[ganador[1]].innerText,
            btnRef[ganador[2]].innerText,
        ];  
        if(element1 != "" && element2 != "" && element3 != ""){
            if(element1 == element2 && element2 == element3){
                funcionGanadora(element1);
            }
        }
    }
  }

//Evento de click a todos los cuadrados del tablero.
btnRef.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(turnoX){
            //Juega la X
            element.innerText = "X";
            turnoX = false;
            element.disabled = true;
            element.classList.add("turnoX")
        } else{
            //Juega la O
            element.innerText = "O";
            turnoX = true;
            element.classList.add("turnoO")
            element.disabled = true;
        }

        //Aumenta el contador
        contador++;

        //Si el contador es 9, declaramos empate. (El maximo de jugadas que puede haber sin ganar es 9.)
        if(contador==9){
            //Llamamos a la funcion de empate, que bloquea la mesa.
            esEmpate();
        }

        //chequemos si hay ganador en cada click
        chequearGanador();
    })

})

//Boton para empezar nueva partida, se encuentra en POP UP que se abre al ganar.
botonNueva.addEventListener("click",()=>{
    contador = 0;
    turnoX = true;
    activarBotones();
    popUp.style.display = "none";
})

