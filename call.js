var obj={
    a:1,
    b:4
}
var addToThis=function(c){
 return this.a+this.b+c;
}
console.log(addToThis.call(obj,5));

let argToArray=function(){
    console.log([].slice.call(arguments));
}

argToArray(1,2,3,4,5,6,8);