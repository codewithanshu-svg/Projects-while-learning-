
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let label = document.getElementById("count");

count = 0;

decrease.onclick = function(){
    count--;
    label.textContent = count;

}

reset.onclick = function(){
    count =0 ;
    label.textContent = count;

}


increase.onclick = function(){
    count++;
    label.textContent = count;

}

