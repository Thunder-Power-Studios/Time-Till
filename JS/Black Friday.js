// Different date every year
var countDownDate=new Date("Nov 27, 2026 0:0:0").getTime();
var x=setInterval(function(){
var now=new Date().getTime();
var distance=countDownDate-now;
var days=Math.floor(distance/(1000*60*60*24));
var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
var seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("BlackFriday").innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s ";

if(distance<0){
clearInterval(x);
document.getElementById("BlackFriday").innerHTML="Happy Black Friday Shoppimg! Be safe!";
}
},1000);

//November 26, 2027 November 24, 2028	November 23, 2029 November 29, 2030