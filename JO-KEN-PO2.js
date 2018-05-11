var pontpc = 0, pontu = 0;

var pedra = "http://cap.dc.ufscar.br/~727350/images/pedra_jogador.png";
var papel = "http://cap.dc.ufscar.br/~727350/images/papel_jogador.png";
var tesoura = "http://cap.dc.ufscar.br/~727350/images/tesoura_jogador.png";

var result;
var jogadas = [pedra, papel, tesoura]
function Jogada(jus) {
    var i = Math.floor(Math.random() * 3);
    var jpc = jogadas[i];

    var comppc = jpc, compus = jus;
    if (jus == jpc) {
        result = "<b id='game'>Empate!!</b><br>";
        pontpc += 1;
        pontu += 1;
    } else {
        if (jus == pedra) {
            if (jpc == papel) {
                result = "Voce jogou PEDRA, Computador Jogou PAPEL <br><br> <b id='game'  style='color: red;'>Voce Perdeu!!</b><br>";
                pontpc += 2;
            }
            if (jpc == tesoura) {
                result = "Voce jogou PEDRA, Computador Jogou TESOURA <br><br> <b id='game' style='color: green;'>Voce Venceu!!</b><br>";
                pontu += 2;
            }
        }
        if (jus == papel) {
            if (jpc == tesoura) {
                result = "Voce jogou PAPEL, Computador jogou TESOURA <br><br> <b id='game' style='color: red;'>Voce Perdeu!!</b><br>";
                pontpc += 2;
            }
            if (jpc == pedra) {
                result = "Voce jogou PAPEL, Computador Jogou PEDRA <br><br> <b id='game' style='color: green;'>Voce Venceu!!</b><br>";
                pontu += 2;
            }
        }
        if (jus == tesoura) {
            if (jpc == pedra) {
                result = "Voce Jogou TESOURA, Computador Jogou PEDRA <br><br> <b id='game' style='color: red;'>Voce Perdeu!!</b><br>";
                pontpc += 2;
            }
            if (jpc == papel) {
                result = "Voce Jogou TESOURA, Computador Jogou PAPEL <br><br> <b id='game' style='color: green;'>Voce Venceu!!</b><br>";
                pontu += 2;
            }
        }
    }


    document.getElementById("computador").src = jpc;
    document.getElementById("computador").style.transform = "scaleX(-1)"
    document.getElementById("usuario").src = jus;

    document.getElementById("resultado").innerHTML = "<br>"+result+"<br>";
    document.getElementById("resultado").style.border = "2px solid black";
    document.getElementById("resultado").style.borderRadius = "15px 15px 0px 0px";
    document.getElementById("resultado").style.backgroundColor = "rgb(255, 62, 100, 0.1)";

    document.getElementById("placar").style.trasnsform = "translatey(50px)";
    document.getElementById("placar").style.borderTop = "none";
    document.getElementById("placar").style.borderRadius = "0px 0px 15px 15px";

    document.getElementById("pontospc").innerHTML = pontpc;
    document.getElementById("pontosus").innerHTML = pontu;


    if (pontu < pontpc) {
        document.getElementById("pontosus").style.color = "red";
        document.getElementById("pontospc").style.color = "green";
    } else if (pontpc < pontu) {
        document.getElementById("pontospc").style.color = "red";
        document.getElementById("pontosus").style.color = "green";
    } else {
        document.getElementById("pontospc").style.color = "#149de2";
        document.getElementById("pontosus").style.color = "#149de2";
    }
}
