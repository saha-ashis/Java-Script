let mammal=function(legs){
this.legs=legs;
}

let cat=function(legs,isDomisticated){
    mammal.call(this,legs);
}

let lion=new cat('4',false);
console.log(lion);



