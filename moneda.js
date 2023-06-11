const containerImg = document.querySelector(".containerImg");
const headsCont = document.getElementById("headsCont");
const tailsCont = document.getElementById("tailsCont");
const spinBttn = document.getElementById("spin");
const resetBttn = document.getElementById("reset");

let head = 0;
let tail = 0;

function launchCoin() {
    
    let launch = Math.round(Math.random());
    containerImg.style.animation = "none";

    if(launch == 1) {
        setTimeout(function(){
            containerImg.style.animation = "spin-coinHead 2s forwards";
        }, 100);

        setTimeout(function(){
            head += 1;
            headsCont.innerText = `Heads: ${head}`;
        }, 2000)
        

    } else {
        setTimeout(function(){
            containerImg.style.animation = "spin-coinTail 2s forwards";
        }, 100);
        
        setTimeout(function(){
            tail += 1;
            tailsCont.innerText = `Tails: ${tail}`;
        }, 2000)
        
    }
}

function reset() {
    head = 0;
    tail = 0;
    headsCont.innerText = 'Heads: 0';
    tailsCont.innerText = 'Tails: 0';
}

spinBttn.addEventListener("click", function(){
    launchCoin();
}
)

resetBttn.addEventListener("click", function(){
    reset();
})

