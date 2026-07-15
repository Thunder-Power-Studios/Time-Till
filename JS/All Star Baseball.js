// Different date every year
var countDownDate=new Date("July 13, 2027 20:0:0").getTime();
var x=setInterval(function(){
var now=new Date().getTime();
var distance=countDownDate-now;
var days=Math.floor(distance/(1000*60*60*24));
var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
var seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("AllStarBaseball").innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s ";

if(distance<0){
clearInterval(x);
document.getElementById("AllStarBaseball").innerHTML="All Star Game is live! Team American League or Team National League?";
}
},1000);