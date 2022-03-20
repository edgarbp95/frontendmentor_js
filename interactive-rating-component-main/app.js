const buttonSubmit = document.querySelector(".button-submit");

const numberRate = document.querySelectorAll(".number-rate");

const container = document.querySelector(".container");

const rateSelected = document.getElementById("rate-selected");

let selectActive = false;

let res = "";

console.log(res);

const selectRate = ()=>{
        for(let i=0; i<numberRate.length;i++){
            numberRate[i].addEventListener("click",()=>{
                if(!selectActive){
                    numberRate[i].classList.add("number-rate-active")
                    numberRate[i].classList.remove("hover")
                    rateSelected.innerHTML = numberRate[i].innerHTML;
                    selectActive = true;

                    
                } else{
                    for(let i=0;i<numberRate.length;i++){
                    numberRate[i].classList.remove("number-rate-active")
                    numberRate[i].classList.add("hover")                   
                    }
                    numberRate[i].classList.add("number-rate-active")
                    numberRate[i].classList.remove("hover")
                    rateSelected.innerHTML = numberRate[i].innerHTML;
                }
            })
    
        }
        
}



const submitFeedback = ()=>{
    buttonSubmit.addEventListener("click",()=>{
        document.querySelector(".state-start").style.display = "none";
        document.querySelector(".state-end").style.display = "flex";
    })
}

selectRate();
submitFeedback();

