// Different date every year
var countDownDate=new Date("August 23, 2044 0:0:0").getTime();
var x=setInterval(function(){
var now=new Date().getTime();
var distance=countDownDate-now;
var days=Math.floor(distance/(1000*60*60*24));
var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
var seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("SolarEclipse").innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s ";

if(distance<0){
clearInterval(x);
document.getElementById("SolarEclipse").innerHTML="Have a good time seeing the Solar Eclipse!";
}
},1000);