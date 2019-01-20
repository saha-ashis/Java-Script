// let cleanTheRoom=
    
//         new Promise(function(resolve,reject){
//             resolve("The room is cleaned");
//         });
// let cleanTheGarbage=

function CleanTheRoom(room){
    return new Promise(function(resolve,reject){
        let isClean=false;
        if(isClean){
            resolve(room+" Room is clean")
        }else{
            reject(room+" room is not cleaned");
        }

    })
}

function ClearTheGarbage(){
    return new Promise(function(resolve,reject){
         const error=false;
         if(!error){
             resolve('Garbage is cleaned');
         }else{
             reject('Garbage is not cleaned');
         }
    })
}

function letsGoForTea(){
    return new Promise(function(resolve,reject){
        const error=false;
        if(!error){
            resolve("Enjoying my Tea after cleaning Room and Garbage! Finished");
        }else{
            reject('Will complete next week');
        }
    })
}

//cleanTheRoomObj=new CleanTheRoom('Ashis');
// cleanTheRoomObj.then(function(formresolve){
//     console.log(formresolve)
//     return ClearTheGarbage();
// }).then(function(frmgarbage){
//     console.log(frmgarbage);
//     return letsGoForTea();
// }).then(function(fromreslve){
//     console.log(fromreslve)
// }).catch(function(error){
//     console.log(error)
// })
Promise.all([CleanTheRoom('Ashis'),ClearTheGarbage(),letsGoForTea()])
.then(function(frmresolve){
  console.log(frmresolve);
}).catch(function(error){
console.log(error);
});