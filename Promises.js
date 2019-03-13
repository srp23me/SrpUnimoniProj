// callbacks example

var button = document.getElementById("btn")

button.onclick = function(){
    alert("button clicked")
}


// promises example
 var promise1 = new Promise(function(resolve,reject){
     setTimeout(() => {
        //  resolve('foo');
         reject();
     }, 300);
 });


 var promise  = document.getElementById("promise")

 promise.onclick = function(){
     promise1.then(function(value){
         alert("From promise "+value)
     })
     promise1.catch(function(err){
         alert("From promise error "+err)
     })
 }


 // async await example

 var async = document.getElementById("async")
 async function f(){
    // let promise = new Promise((resolve,reject) => {
    //     setTimeout(() => resolve("from async await!!"),1000)
    // });

    let promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("from async await!!")
        }, 1000);
    })

    promise = undefined
    let result = await promise;

    alert(result);
 };

 async.onclick = function(){
     f();
 }

 