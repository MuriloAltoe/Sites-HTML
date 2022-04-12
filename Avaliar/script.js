var voto = 0;

function voto1(){
    voto = 1;
    document.getElementById("1").style.backgroundColor = "rgb(40, 69, 177)";
    document.getElementById("1").style.color = "rgb(240, 248, 255)"
    document.getElementById("2").style = "";
    document.getElementById("3").style = "";
    document.getElementById("4").style = "";
    document.getElementById("5").style = "";

}

function voto2(){
    voto = 2;
    document.getElementById("2").style.backgroundColor = "rgb(40, 69, 177)";
    document.getElementById("2").style.color = "rgb(240, 248, 255)"
    document.getElementById("1").style = "";
    document.getElementById("3").style = "";
    document.getElementById("4").style = "";
    document.getElementById("5").style = "";

}

function voto3(){
    voto = 3;
    document.getElementById("3").style.backgroundColor = "rgb(40, 69, 177)";
    document.getElementById("3").style.color = "rgb(240, 248, 255)"
    document.getElementById("1").style = "";
    document.getElementById("2").style = "";
    document.getElementById("4").style = "";
    document.getElementById("5").style = "";

}

function voto4(){
    voto = 4;
    document.getElementById("4").style.backgroundColor = "rgb(40, 69, 177)";
    document.getElementById("4").style.color = "rgb(240, 248, 255)"
    document.getElementById("1").style = "";
    document.getElementById("2").style = "";
    document.getElementById("3").style = "";
    document.getElementById("5").style = "";

}

function voto5(){
    voto = 2;
    document.getElementById("5").style.backgroundColor = "rgb(40, 69, 177)";
    document.getElementById("5").style.color = "rgb(240, 248, 255)"
    document.getElementById("1").style = "";
    document.getElementById("2").style = "";
    document.getElementById("3").style = "";
    document.getElementById("4").style = "";

}




function alerta(){
    if (voto == 0){
        document.getElementById("ask").innerHTML = "Por favor selecione uma nota!"
    }
    else{
        document.getElementById("ask").innerHTML = "Obrigado"
    }
}