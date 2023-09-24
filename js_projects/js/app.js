const endDate="24 September 2023 1:1 PM"
document.getElementById('end-date').innerHTML=endDate;
const inputs=document.querySelectorAll("input")
function clock()
{
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    console.log(diff)
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor((diff/3600)%24);
    inputs[2].value=Math.floor((diff/60)%60%24);
    inputs[3].value=Math.floor(diff%60);
    if(  inputs[0].value==0)
    clearInterval(x)
    ///convert in days
}
x=setInterval(clock,1000);
// 1 day = 24 hr
// 1 hr = 60 min
//1 min = 60 sec