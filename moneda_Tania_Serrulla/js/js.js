var cara = 0;
var cruz = 0;

function gira1(){
    document.getElementById('moneda2').style.opacity = "100%";
    cara++;
    document.getElementById("ncaras").innerHTML = "";
    document.getElementById("ncaras").innerHTML += cara;
}

function gira2(){
    document.getElementById('moneda2').style.opacity = "0%";
    cruz++;
    document.getElementById("ncruzes").innerHTML = "";
    document.getElementById("ncruzes").innerHTML += cruz;
}