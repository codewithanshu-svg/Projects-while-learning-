// Create a business name generator combing list of adjective,shop name and onother word

let random = Math.random();

let first,second,third;

if(random<0.33){
    first = "crazy"
}
else if(random<0.66 && random>=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}


 let rand   = Math.random();


if(rand<0.33){
    second = "Engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods"
}
else{
    second = "Garmnets"
}



let rando = Math.random();

if(rando<0.33){
   third  = "Bros"
}
else if(rando<0.66 && rando>=0.33){
    third  = "Limited"
}
else{
    third = "hub"
}


let result = ( first + second + third);
console.log(result);
