//seTTimeOut Örneği
document.getElementById("btn1").addEventListener("click",function(){
    setTimeout(function(){
        
        if (document.getElementById("demo").innerHTML == ""){
            document.getElementById("demo").innerHTML = "Set Time Out'a basıldı";
        }else{
            document.getElementById("demo").innerHTML = "" 
        }    
    },1000);
});

//setIntervel ve clearInterval Örneği
let value 
function myTimer(){
     let i=0;
     value = setInterval(function(){
         i++;
         document.getElementById("sayac").innerHTML = i;
     },1000)
    
};

document.getElementById("btn2").addEventListener("click", myTimer)

document.getElementById("btn3").addEventListener("click",function(){
    console.log("geldim3")
    clearInterval(value);
});




