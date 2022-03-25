const btnRef = document.querySelectorAll(".btnRef");
const draw = document.querySelector(".draw");
const restart = document.querySelector(".restart");
const botonNueva = document.querySelector(".boton_nueva_partida");
const popUp = document.querySelector(".nueva_partida");
const multiplayer = document.querySelector(".dos_jugadores");
const CPU = document.querySelector(".un_jugador");


//Estos son los posibles patrones ganadores
let patronesGanadores = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
  ];

  //4,5,7,8
  //Variable que detecta la opción "Multiplayer" o "CPU"
let modoDeJuego = "";

function jugadaAzar(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  for(let i=0;i<btnRef.length;i++){
    btnRef[i].innerHTML=" ";
}

  //Funcion que activa los botones y resetea los ajustes para una nueva partida. Utilizada en boton Restart y Nueva Partida.
  const activarBotones = ()=>{
      btnRef.forEach((element)=>{
          element.disabled = false;
          element.innerText = "";
          element.innerHTML = " ";
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
      location.reload();
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

  const jugadaAleatoria = ()=>{
      let numero = jugadaAzar(0,9);
        if(btnRef[numero].innerHTML == " "){
            hacerJugada(numero); 
        } else{
            jugadaAleatoria();
        }
  }

  const jugarGanar = ()=>{
    if(btnRef[0].innerText == "O" && btnRef[1].innerText == "O" && btnRef[2].innerText != "X" || btnRef[1].innerText == "O" && btnRef[2].innerText == "O" && btnRef[0].innerText != "X" || btnRef[0].innerText == "O" && btnRef[2].innerText == "O" && btnRef[1].innerText != "X"){
        if(btnRef[0].innerHTML==" "){
            hacerJugada(0);
        } else if(btnRef[1].innerHTML==" "){
            hacerJugada(1);
        } else if(btnRef[2].innerHTML==" "){
            hacerJugada(2);
        }
    } else if (btnRef[0].innerText == "O" && btnRef[3].innerText == "O" && btnRef[6].innerText != "X"|| btnRef[0].innerText == "O" && btnRef[6].innerText == "O" && btnRef[3].innerText != "X" || btnRef[3].innerText == "O" && btnRef[6].innerText == "O" && btnRef[0].innerText != "X"){
        if(btnRef[0].innerHTML==" "){
            hacerJugada(0);
        } else if(btnRef[3].innerHTML==" "){
            hacerJugada(3);
        } else if(btnRef[6].innerHTML==" "){
            hacerJugada(6);
        }
    } else if (btnRef[2].innerText == "O" && btnRef[5].innerText == "O" && btnRef[8].innerText != "X" || btnRef[2].innerText == "O" && btnRef[8].innerText == "O" && btnRef[5].innerText != "X" || btnRef[5].innerText == "O" && btnRef[8].innerText == "O" && btnRef[2].innerText != "X"){
        if(btnRef[2].innerHTML==" "){
            hacerJugada(2);
        } else if(btnRef[5].innerHTML==" "){
            hacerJugada(5);
        } else if(btnRef[8].innerHTML==" "){
            hacerJugada(8);
        }
    } else if (btnRef[6].innerText == "O" && btnRef[7].innerText == "O" && btnRef[8].innerText != "X" || btnRef[6].innerText == "O" && btnRef[8].innerText == "O" && btnRef[7].innerText != "X"|| btnRef[7].innerText == "O" && btnRef[8].innerText == "O" && btnRef[6].innerText != "X"){
        if(btnRef[6].innerHTML==" "){
            hacerJugada(6);
        } else if(btnRef[7].innerHTML==" "){
            hacerJugada(7);
        } else if(btnRef[8].innerHTML==" "){
            hacerJugada(8);
        }
    } else if (btnRef[3].innerText == "O" && btnRef[4].innerText == "O" && btnRef[5].innerText != "X"|| btnRef[3].innerText == "O" && btnRef[5].innerText == "O" && btnRef[4].innerText != "X"|| btnRef[4].innerText == "O" && btnRef[5].innerText == "O" && btnRef[3].innerText != "X"){
        if(btnRef[3].innerHTML==" "){
            hacerJugada(3);
        } else if(btnRef[4].innerHTML==" "){
            hacerJugada(4);
        } else if(btnRef[5].innerHTML==" "){
            hacerJugada(5);
        }
    } else if (btnRef[1].innerText == "O" && btnRef[4].innerText == "O" && btnRef[7].innerText != "X"|| btnRef[1].innerText == "O" && btnRef[7].innerText == "O" && btnRef[4].innerText != "X" || btnRef[4].innerText == "O" && btnRef[7].innerText == "O" && btnRef[1].innerText != "X"){
        if(btnRef[1].innerHTML==" "){
            hacerJugada(1);
        } else if(btnRef[4].innerHTML==" "){
            hacerJugada(4);
        } else if(btnRef[7].innerHTML==" "){
            hacerJugada(7);
        }
    } else if (btnRef[0].innerText == "O" && btnRef[4].innerText == "O" && btnRef[8].innerText != "X" || btnRef[0].innerText == "O" && btnRef[8].innerText == "O" && btnRef[4].innerText != "X" || btnRef[4].innerText == "O" && btnRef[8].innerText == "O" && btnRef[0].innerText != "X"){
        if(btnRef[0].innerHTML==" "){
            hacerJugada(0);
        } else if(btnRef[4].innerHTML==" "){
            hacerJugada(4);
        } else if(btnRef[8].innerHTML==" "){
            hacerJugada(8);
        }
    } else if (btnRef[2].innerText == "O" && btnRef[4].innerText == "O" && btnRef[6].innerText != "X"|| btnRef[2].innerText == "O" && btnRef[6].innerText == "O" && btnRef[4].innerText != "X" || btnRef[4].innerText == "O" && btnRef[6].innerText == "O" && btnRef[2].innerText != "X"){
        if(btnRef[2].innerHTML==" "){
            hacerJugada(2);
        } else if(btnRef[4].innerHTML==" "){
            hacerJugada(4);
        } else if(btnRef[6].innerHTML==" "){
            hacerJugada(6);
        }
    }

  }

  const jugadaInteligente = ()=>{
      jugarGanar();
    if(btnRef[0].innerText == "X" && btnRef[1].innerText == "X" && btnRef[2].innerText != "O" || btnRef[1].innerText == "X" && btnRef[2].innerText == "X" && btnRef[0].innerText != "O" || btnRef[0].innerText == "X" && btnRef[2].innerText == "X" && btnRef[1].innerText != "O"){
        if(btnRef[0].innerHTML==" "){
            hacerJugada(0);
        } else if(btnRef[1].innerHTML==" "){
            hacerJugada(1);
        } else if(btnRef[2].innerHTML==" "){
            hacerJugada(2);
        }
    } else if (btnRef[0].innerText == "X" && btnRef[3].innerText == "X" && btnRef[6].innerText != "O"|| btnRef[0].innerText == "X" && btnRef[6].innerText == "X" && btnRef[3].innerText != "O" || btnRef[3].innerText == "X" && btnRef[6].innerText == "X" && btnRef[0].innerText != "O"){
        if(btnRef[0].innerHTML==" "){
            hacerJugada(0);
        } else if(btnRef[3].innerHTML==" "){
            hacerJugada(3);
        } else if(btnRef[6].innerHTML==" "){
            hacerJugada(6);
        }
    } else if (btnRef[2].innerText == "X" && btnRef[5].innerText == "X" && btnRef[8].innerText != "O" || btnRef[2].innerText == "X" && btnRef[8].innerText == "X" && btnRef[5].innerText != "O" || btnRef[5].innerText == "X" && btnRef[8].innerText == "X" && btnRef[2].innerText != "O"){
        if(btnRef[2].innerHTML==" "){
            hacerJugada(2);
        } else if(btnRef[5].innerHTML==" "){
            hacerJugada(5);
        } else if(btnRef[8].innerHTML==" "){
            hacerJugada(8);
        }
    } else if (btnRef[6].innerText == "X" && btnRef[7].innerText == "X" && btnRef[8].innerText != "O" || btnRef[6].innerText == "X" && btnRef[8].innerText == "X" && btnRef[7].innerText != "O"|| btnRef[7].innerText == "X" && btnRef[8].innerText == "X" && btnRef[6].innerText != "O"){
        if(btnRef[6].innerHTML==" "){
            hacerJugada(6);
        } else if(btnRef[7].innerHTML==" "){
            hacerJugada(7);
        } else if(btnRef[8].innerHTML==" "){
            hacerJugada(8);
        }
    } else if (btnRef[3].innerText == "X" && btnRef[4].innerText == "X" && btnRef[5].innerText != "O"|| btnRef[3].innerText == "X" && btnRef[5].innerText == "X" && btnRef[4].innerText != "O"|| btnRef[4].innerText == "X" && btnRef[5].innerText == "X" && btnRef[3].innerText != "O"){
        if(btnRef[3].innerHTML==" "){
            hacerJugada(3);
        } else if(btnRef[4].innerHTML==" "){
            hacerJugada(4);
        } else if(btnRef[5].innerHTML==" "){
            hacerJugada(5);
        }
    } else if (btnRef[1].innerText == "X" && btnRef[4].innerText == "X" && btnRef[7].innerText != "O"|| btnRef[1].innerText == "X" && btnRef[7].innerText == "X" && btnRef[4].innerText != "O" || btnRef[4].innerText == "X" && btnRef[7].innerText == "X" && btnRef[1].innerText != "O"){
        if(btnRef[1].innerHTML==" "){
            hacerJugada(1);
        } else if(btnRef[4].innerHTML==" "){
            hacerJugada(4);
        } else if(btnRef[7].innerHTML==" "){
            hacerJugada(7);
        }
    } else if (btnRef[0].innerText == "X" && btnRef[4].innerText == "X" && btnRef[8].innerText != "O" || btnRef[0].innerText == "X" && btnRef[8].innerText == "X" && btnRef[4].innerText != "O" || btnRef[4].innerText == "X" && btnRef[8].innerText == "X" && btnRef[0].innerText != "O"){
        if(btnRef[0].innerHTML==" "){
            hacerJugada(0);
        } else if(btnRef[4].innerHTML==" "){
            hacerJugada(4);
        } else if(btnRef[8].innerHTML==" "){
            hacerJugada(8);
        }
    } else if (btnRef[2].innerText == "X" && btnRef[4].innerText == "X" && btnRef[6].innerText != "O"|| btnRef[2].innerText == "X" && btnRef[6].innerText == "X" && btnRef[4].innerText != "O" || btnRef[4].innerText == "X" && btnRef[6].innerText == "X" && btnRef[2].innerText != "O"){
        if(btnRef[2].innerHTML==" "){
            hacerJugada(2);
        } else if(btnRef[4].innerHTML==" "){
            hacerJugada(4);
        } else if(btnRef[6].innerHTML==" "){
            hacerJugada(6);
        }
    } else {
        jugadaAleatoria();
    }

  }

  const hacerJugada = (pos)=>{
    btnRef[pos].innerHTML = "O";
    btnRef[pos].classList.add("turnoO")
    btnRef[pos].disabled = true;
    turnoX = true;
    
  }

//Boton para empezar nueva partida, se encuentra en POP UP que se abre al ganar.
botonNueva.addEventListener("click",()=>{
    contador = 0;
    turnoX = true;
    activarBotones();
    popUp.style.display = "none";

})

const modoMultiplayer = ()=>{
    modoDeJuego = "multiplayer";
    multiplayer.classList.add("boton_encendido");
    CPU.classList.remove("boton_encendido");
    CPU.removeEventListener("click",modoCPU);
    
    if(modoDeJuego==="multiplayer"){
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
      }
}

const modoCPU = ()=>{
    modoDeJuego = "CPU";
    CPU.classList.add("boton_encendido");
    multiplayer.classList.remove("boton_encendido");
    CPU.removeEventListener("click",modoCPU);
    multiplayer.removeEventListener("click",modoMultiplayer);

    if (modoDeJuego==="CPU"){
        //Evento de click a todos los cuadrados del tablero.
   btnRef.forEach((element)=>{
       element.addEventListener("click",()=>{
           if(turnoX){
               //Juega la X
               element.innerHTML = "X";
               turnoX = false;
               element.disabled = true;
               element.classList.add("turnoX")
               contador++;
           } 

           if(!turnoX && contador!=9){
            jugadaInteligente();
            contador++;
            
            }
           
           //Si el contador es 9, declaramos empate. (El maximo de jugadas que puede haber sin ganar es 9.)
           if(contador==9){
               //Llamamos a la funcion de empate, que bloquea la mesa.
               esEmpate();
           }
   
           //chequemos si hay ganador en cada click
           chequearGanador();
       })
   })
   }
}

//Cuando el jugador selecciona CPU
CPU.addEventListener("click",modoCPU);

//Cuando el jugador selecciona Multiplayer
multiplayer.addEventListener("click",modoMultiplayer);
