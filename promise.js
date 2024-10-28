const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const success=true;
     if(success){
        resolve({name:"pooji"});
     }
     else{
        reject("error in data")
     }
    },2000)
})
p.then((data)=>console.log(data))
 .catch((error)=>console.log(error))