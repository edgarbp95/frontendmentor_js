let daily = [["5hrs","7hrs"],["1hr","2hrs"],["0hrs","1hr"],["1hr","4hrs"],["1hr","3hrs"],["0hrs","1hrs"]];
let weekly = [["32hrs","36hrs"],["10hrs","8hrs"],["4hrs","7hr"],["4hrs","5hrs"],["5hr","10hrs"],["2hrs","2hrs"]];
let monthly = [["103hrs","128hrs"],["23hrs","29hrs"],["13hrs","19hrs"],["11hrs","18hrs"],["21hr","23hrs"],["7hrs","11hrs"]];

const timeDaily = document.getElementById("daily");
const timeWeekly = document.getElementById("weekly");
const timeMonthly = document.getElementById("monthly");
const changeTime = document.querySelectorAll(".change_time");
const previusTime = document.querySelectorAll(".previus_card");

timeDaily.addEventListener("click",()=>{
    timeDaily.classList.add("select_time_active");
    timeWeekly.classList.remove("select_time_active");
    timeMonthly.classList.remove("select_time_active");
    for(let i=0;i<daily.length;i++){
        changeTime[i].innerHTML = daily[i][0];
        previusTime[i].innerHTML = `<p><span>Last Daily</span> - ${daily[i][1]}</p>`
    }
})

timeWeekly.addEventListener("click",()=>{
    timeWeekly.classList.add("select_time_active");
    timeDaily.classList.remove("select_time_active");
    timeMonthly.classList.remove("select_time_active");
    for(let i=0;i<weekly.length;i++){
        changeTime[i].innerHTML = weekly[i][0];
        previusTime[i].innerHTML = `<p><span>Last Weekly</span> - ${weekly[i][1]}</p>`
    }
})

timeMonthly.addEventListener("click",()=>{
    timeMonthly.classList.add("select_time_active");
    timeDaily.classList.remove("select_time_active");
    timeWeekly.classList.remove("select_time_active");
    for(let i=0;i<monthly.length;i++){
        changeTime[i].innerHTML = monthly[i][0];
        previusTime[i].innerHTML = `<p><span>Last Monthly</span> - ${monthly[i][1]}</p>`
    }
})


//   Work
//   5hrs <!-- daily -->
//   Previous - 7hrs <!-- daily -->
//   32hrs <!-- weekly -->
//   Previous - 36hrs <!-- weekly -->
//   103hrs <!-- monthly -->
//   Previous - 128hrs <!-- monthly -->

//   Play
//   1hr <!-- daily -->
//   Previous - 2hrs <!-- daily -->
//   10hrs <!-- weekly -->
//   Previous - 8hrs <!-- weekly -->
//   23hrs <!-- monthly -->
//   Previous - 29hrs <!-- monthly -->

//   Study
//   0hrs <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   4hrs <!-- weekly -->
//   Previous - 7hrs <!-- weekly -->
//   13hrs <!-- monthly -->
//   Previous - 19hrs <!-- monthly -->


//   Exercise
//   1hr <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   4hrs <!-- weekly -->
//   Previous - 5hrs <!-- weekly -->
//   11hrs <!-- monthly -->
//   Previous - 18hrs <!-- monthly -->

//   Social
//   1hr <!-- daily -->
//   Previous - 3hrs <!-- daily -->
//   5hrs <!-- weekly -->
//   Previous - 10hrs <!-- weekly -->
//   21hrs <!-- monthly -->
//   Previous - 23hrs <!-- monthly -->

//   Self Care
//   0hrs <!-- daily -->
//   Previous - 1hr <!-- daily -->
//   2hrs <!-- weekly -->
//   Previous - 2hrs <!-- weekly -->
//   7hrs <!-- monthly -->
//   Previous - 11hrs <!-- monthly -->