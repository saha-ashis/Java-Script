var obj={
    a:1,
    b:2
};
var addToThis=function(c,d,e){
    return this.a+this.b+c+d+e;
}
console.log(addToThis.apply(obj,[2,3,8]));