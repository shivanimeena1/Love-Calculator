function calculatelove(){
  let yourname=document.getElementById("yourname").value.trim();
  let partnername=document.getElementById("partnername").value.trim();

  if(yourname==='' || partnername===''){
alert ("enter both the name");
return;
  }
let calculatepercent=calculatepercentage();
let result=document.getElementById("result");
result.innerHTML=`${calculatepercent}%`;
let returns=document.getElementById("printresult");
returns.innerHTML=`L♡ve Percent ${yourname} & ${patnername} is ${calculatepercent}%`
}

function calculatepercentage(){
  return Math.floor(Math.random()*101);
}