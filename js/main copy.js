var credito = 0;
var aux = 0;
var aposta = 1;
var nSort = 0;
var slt1, slt2, slt3;

function aleatorio(inferior,superior){ 
	numPossibilidades = superior - inferior; 
	aleat = Math.random() * numPossibilidades;
	aleat = Math.floor(aleat);
	return parseInt(inferior) + aleat;
}
function verificaPremio() {
	if (slt1 == 1 && slt2 == 1 && slt3 == 1){
		aposta = parseInt(aposta);
		credito = credito + (aposta * 5);
		document.getElementById('credito').value = 'R$ ' + credito;
		window.alert("Parabéns você ganhou um desconto");
	} else if (slt1 == 2 && slt2 == 2 && slt3 == 2){
		aposta = parseInt(aposta);
		credito = credito + (aposta * 10);
		document.getElementById('credito').value = 'R$ ' + credito;
		window.alert("Parabéns você ganhou um desconto");
	} else if (slt1 == 3 && slt2 == 3 && slt3 == 3){
		aposta = parseInt(aposta);
		credito = credito + (aposta * 20);
		document.getElementById('credito').value = 'R$ ' + credito;
		window.alert("Parabéns você ganhou um desconto");
	} else{
		alert("Infelizmente não foi dessa vez, mas temos várias promoções nessa Black Friday!!");
	}
}

function jogar() {
	if (credito < 1 || credito < aposta) {
		aux = window.prompt("Coloque mais creditos, digite a quantidade em R$:","1");
		aux = parseInt(aux);
		credito = parseInt(credito);
		credito = credito + aux;
		document.getElementById('credito').value = 'R$ ' + credito
	}
	else {
		if(credito > 0 && credito >= aposta){
			credito = credito - aposta;
			document.getElementById('credito').value = 'R$ ' + credito;
			document.getElementById('escud1').src = 'img/giphy.gif';
			document.getElementById('escud2').src = 'img/giphy.gif';
			document.getElementById('escud3').src = 'img/giphy.gif';
			//processamento do slot1
			nSort = aleatorio(1,4);
			switch (nSort) {
				case 1:
				cont = setTimeout("document.getElementById('escud1').src = 'img/bota1.webp'", 4000);
				slt1 = 1;
				break;
				case 2:
				cont = setTimeout("document.getElementById('escud1').src = 'img/bota2.webp'", 4000);
				slt1 = 2;
				break;
				case 3:
				cont = setTimeout("document.getElementById('escud1').src = 'img/bota3.webp'", 4000);
				slt1 = 3;
				break;
			}
			
			//processamento do slot2
			nSort = aleatorio(1,4);
			switch (nSort) {
				case 1:
				cont = setTimeout("document.getElementById('escud2').src = 'img/bota1.webp'", 6000);
				slt2 = 1;
				break;
				case 2:
				cont = setTimeout("document.getElementById('escud2').src = 'img/bota2.webp'", 6000);
				slt2 = 2;
				break;
				case 3:
				cont = setTimeout("document.getElementById('escud2').src = 'img/bota3.webp'", 6000);
				slt2 = 3;
				break;
			}
			
			//processamento do slot3
			nSort = aleatorio(1,4);
			switch (nSort) {
				case 1:
				cont = setTimeout("document.getElementById('escud3').src = 'img/bota1.webp'", 7000);
				slt3 = 1;
				break;
				case 2:
				cont = setTimeout("document.getElementById('escud3').src = 'img/bota2.webp'", 7000);
				slt3 = 2;
				break;
				case 3:
				cont = setTimeout("document.getElementById('escud3').src = 'img/bota3.webp'", 7000);
				slt3 = 3;
				break;
			}
			cont = setTimeout("verificaPremio()", 9000);
		}
	}
}