let promiseToCleanTheRoom=new Promise(function(resolve,reject){
let isClean=true;
if(isClean){
    resolve('clean');
}else{
    reject('not clean');
}
});
promiseToCleanTheRoom.then(function(resolveData){
    console.log('It is form resove and the room is '+ resolveData);
}).catch(function(rejectData){
    console.log('This is form reject and the room is '+ rejectData);
})