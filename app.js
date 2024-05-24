// import jav from './abcd.js';
// import pp from './pqrs.js';

let a = "rajat";
// console.log(a); 

// jav(); 
// pp();
let obj={
    name:"ravi",
    age:22
}
for(let key in obj){
    // console.log(key);
    // console.log(key,obj[key]);
}
     
let arr=[31,62,4,6,7,12];
for(let j in arr){
    // console.log(j);
}
for(let i of arr){
    // console.log(i);
}
// arr.forEach=((item)=>{
//     console.log(item);
// }
// )

arr.forEach((item)=>{
    console.log(item+1);
})
console.log(arr);

arr.forEach(abcd);

function abcd(ele){
    console.log("abcd called",ele);
}

let variable="some added";
let change = "some changes";
let change2= "some changes";