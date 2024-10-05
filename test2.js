let num=parseInt(prompt("Enter a number"));
multiply(num);
function multiply(num)
    {
     for(let i=0;i<10;i++)
     {
        console.log(num+"*"+i+"="+num*i)
     }
}
let celsius=parseFloat(prompt("Enter a degree"));
converttemp(celsius)
function converttemp(celsius){
    let fahr=(celsius*9/5)+32;
    console.log(fahr);
}
let number=parseFloat(prompt("enter a number"));
if(number>0)
    console.log("number is  positive");
else if(number<0)
    console.log("number is negative");
else{
    console.log("enter a valid number");
}
alert("pleaese visit console for output");


