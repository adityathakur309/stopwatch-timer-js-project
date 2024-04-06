let timer = document.getElementById("timer");
let resetValue = document.querySelector(".reset-value");
let timer1 = 0;
let interval;
let clear;
let newPara;

const startTimer= () => {
    interval =  setInterval(() => {
 timer.innerText = timer1++;
    },1000)
   

    
   
}
const stopTimer = () => {
     clear = clearInterval(interval);
}
const resetTime = () => {
    timer1 = 0;
    timer.innerText = timer1;
    clearInterval(interval)
}
const getTime = () => {
     newPara = document.createElement("p");
    newPara.innerText = `The stop time is ${timer1-1}`;
    resetValue.append(newPara);
}
const clearTime = () => {
    newPara.innerText = ""
    

}

document.querySelector(".start-btn").addEventListener("click",startTimer);
document.querySelector(".stop-btn").addEventListener("click",stopTimer);
document.querySelector(".reset-btn").addEventListener("click",resetTime)
document.querySelector(".get-btn").addEventListener("click",getTime)
document.querySelector(".clear-btn").addEventListener("click",clearTime)
