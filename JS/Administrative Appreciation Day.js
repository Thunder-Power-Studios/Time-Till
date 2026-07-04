// Different date every year
var countDownDate=new Date("April 28, 2027 0:0:0").getTime();
var x=setInterval(function(){
var now=new Date().getTime();
var distance=countDownDate-now;
var days=Math.floor(distance/(1000*60*60*24));
var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
var seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("AdministrativeAppreciationDay").innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s ";

if(distance<0){
clearInterval(x);
document.getElementById("AdministrativeAppreciationDay").innerHTML="Happy Administrative Appreciation Day! You keep everything running. Thank you for all yo do!";
}
},1000);
// April 26, 2028, April 25, 2029, April 24, 2030
// Always on Wednesdays in april early 20ths