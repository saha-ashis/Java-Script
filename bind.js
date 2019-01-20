var obj={
    a:1,
    b:2
}
var addToThis=function(c,d,e){
    return this.a+this.b+c+d+e
}
var bound=addToThis.bind(obj);
console.dir(bound(4,5,6));