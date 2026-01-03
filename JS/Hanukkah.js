// Different date every year  
// (24,2027) (12,2028) (1,2029) (20,2030) 
// Starts at nightfall, need to add
var countDownDate=new Date("December 4, 2026 0:0:0").getTime();
var x=setInterval(function(){
var now=new Date().getTime();
var distance=countDownDate-now;
var days=Math.floor(distance/(1000*60*60*24));
var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
var seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("Hanukkah").innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s ";

if(distance<0){
clearInterval(x);
document.getElementById("Hanukkah").innerHTML="Happy Hanukkah!";
}
},1000);