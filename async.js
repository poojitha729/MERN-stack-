console.log("strat");

setTimeout(function(){
    console.log("This message is displayed after 5 seconds")
},2000);

console.log("end");



const func=(callback)=>{
    setTimeout(()=>{
    let stu={name:"pooji",id:564}
    callback(stu);
    },2000);
}


func((x)=>console.log(x));




let count=0;
let t=setInterval(()=>{
    count++;
    console.log(`count is ${count}`);

    if(count==5){
        clearInterval(t);
        console.log("cleared");
    }
},3000);