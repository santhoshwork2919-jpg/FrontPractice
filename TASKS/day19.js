//promise example how its work
 

function step1()
{
   return new Promise((resolve,reject)=>{
    console.log("step1 was started");

    setTimeout(()=>{
        console.log("step1 was completed");
        resolve();
    },3000);
   });

}

function step2()
{
    return new Promise((resolve,reject)=>{
        console.log("step2 is starting ");

        setTimeout(()=>{
            console.log("step2 was completed");
            resolve()
        },3000)
    });

}

function step3()
{
    return new Promise(
        (resolve,reject)=> {
        console.log("step3 is starting ");

            setTimeout(()=>{
        console.log("error ");
        reject()
    })



    },2000);

}

step1()
.then(step2)
.then(step3)
.then(()=>{
     console.log("all steps are completed");
    })
//if it rejected
.catch(()=>{
    console.log("error occuring");
})
