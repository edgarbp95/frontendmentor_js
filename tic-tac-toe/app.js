const btnRef = document.querySelectorAll(".btnRef");
const draw = document.querySelector(".draw");
const restart = document.querySelector(".restart");
const botonNueva = document.querySelector(".boton_nueva_partida");
const popUp = document.querySelector(".nueva_partida");

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

  const desactivarBotones = ()=>{
      btnRef.forEach((element)=>{
          element.disabled = true;
      })
      
  }

  restart.addEventListener("click",()=>{
      contador = 0;
      turnoX = true;
      activarBotones();
  })

  const esEmpate = ()=>{
      for(let i=0;i<btnRef.length;i++){
          btnRef[i].style.backgroundColor= "hsl(213, 19%, 18%)";
      }
      draw.innerHTML = "¡Es un empate!"
  }

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

  const chequearGanador = ()=>{
    for (ganador of patronesGanadores){
        let [element1,element2,element3] = [
            btnRef[ganador[0]].innerText,
            btnRef[ganador[1]].innerText,
            btnRef[ganador[2]].innerText,
        ]; console.log(ganador[0])
 
        if(element1 != "" && element2 != "" && element3 != ""){
            if(element1 == element2 && element2 == element3){
                funcionGanadora(element1);
            }
        }
 
    }
  }

   

btnRef.forEach((element)=>{
    element.addEventListener("click",()=>{
        if(turnoX){
            element.innerText = "X";
            turnoX = false;
            element.disabled = true;
            element.classList.add("turnoX")
        } else{
            element.innerText = "O";
            turnoX = true;
            element.classList.add("turnoO")
            element.disabled = true;
        }

        contador++;

        if(contador==9){
            //Es un empate
            esEmpate();
        }

        chequearGanador();
    })

})

botonNueva.addEventListener("click",()=>{
    contador = 0;
    turnoX = true;
    activarBotones();
    popUp.style.display = "none";
    
})