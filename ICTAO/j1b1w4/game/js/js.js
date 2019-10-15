var voedsel = 5;
var antwoord = prompt('Er is een invasie in jou gebied en het is niet bekend wanneer het afloopt, dus jij en je vrouw en 2 kinderen zitten opgesloten in een schuilruimte onder de grond. Je hebt soep (5) en water (5).\n\nA: Eet en drink wanneer je honger of dorst hebt met je gezin (-3 soep en water)\n\nB: Probeer niks te eten of drinken voor een paar dagen');


if(antwoord == 'a') {
	voedsel = voedsel-3;
}

alert('Je hebt '+voedsel+' soep en water');
antwoord = prompt('1 van je kinderen is ernstig ziek geworden. Een man klopt aan, hij heeft veel honger en dorst. In ruil voor eten en drinken heeft hij een EHBO set wat handig is om je kind te verhelpen met zijn ziekte.\n\nA: Ruil met de man (-1 soep en water)\n\nB: Weiger');

if(antwoord == 'a') {
	voedsel = voedsel-1;

	alert('Je hebt '+voedsel+' soep en water');

	if(voedsel == 0){
		alert('Game over: Overleden aan verhongering');
	}else{
		antwoord = prompt('Een oude vrouw klopt aan en je doet open. De vrouw heeft een doos met iets erin. Ze zegt niet wat er in zit maar in ruil voor de mysterieuze doos wilt ze 1 soep en water.\n\nA: Ruil met de vrouw (-1 soep en water)\n\nB: Weiger');
		if(antwoord == 'a') {
			voedsel = voedsel-1;
			alert('Game over: Je bent vergiftigd door gifgas in de doos');
		}else{
			alert('Je hebt '+voedsel+' soep en water');
			alert('Je hebt de invasie overleeft!!')
			if(voedsel == 0){
				alert('Game over: Overleden aan verhongering');
			}else{

			}
		}
	}
}else{
	alert('Game over: Je zoon is overleden aan de ziekte')
}


// 	if(antwoord == 'a'){
// 		antwoord=alert('Je hebt 1 soep en water');
// 		antwoord = prompt('Het gezin heeft honger gekregen dus is er 1 soep en water verbruikt. Een oude vrouw klopt aan en je doet open. De vrouw heeft een doos met iets erin. Ze zegt niet wat er in zit maar in ruil voor de mysterieuze doos wilt ze 1 soep en water.\n\nA: Ruil met de vrouw (-1 soep en water)\n\nB: Weiger');
	
// 		if(antwoord == 'a'){
// 			antwoord=alert('Je hebt 0 soep en water');
// 			antwoord=alert('Einde: Overleden aan verhongering');
// 		}else{
// 			antwoord = prompt('Het gezin heeft honger gekregen dus is er 1 soep en water verbruikt. Een oude vrouw klopt aan en je doet open. De vrouw heeft een doos met iets erin. Ze zegt niet wat er in zit maar in ruil voor de mysterieuze doos wilt ze 1 soep en water.\n\nA: Ruil met de vrouw (-1 soep en water)\n\nB: Weiger');

// 			if(antwoord == 'a'){
// 				antwoord=alert('Je hebt 0 soep en water');
// 			} else{
// 				antwoord=alert('Je hebt 1 soep en water');
// 			}
// 		}
// 	}else{
// 		antwoord=alert('Je hebt 2 soep en water');
// 	}
		
// } else {
// 	antwoord=alert('Je hebt 5 soep en water');
// 	antwoord = prompt('1 van je kinderen is ernstig ziek geworden. Een man klopt aan, hij heeft veel honger en dorst. In ruil voor eten en drinken heeft hij een EHBO set wat handig is om je kind te verhelpen met zijn ziekte.\n\nA: Ruil met de man (-1 soep en water)\n\nB: Weiger');

// 	if(antwoord == 'a'){
// 		antwoord=alert('Je hebt 4 soep en water');
// 	} else{
// 		antwoord=alert('Je hebt 5 soep en water');
// 	}
// }








		
// 		antwoord = prompt('Het gezin heeft honger gekregen dus is er 1 soep en water verbruikt. Een oude vrouw klopt aan en je doet open. De vrouw heeft een doos met iets erin. Ze zegt niet wat er in zit maar in ruil voor de mysterieuze doos wilt ze 1 soep en water.\n\nA: Ruil met de vrouw (-1 soep en water)\n\nB: Weiger');

// 		if(antwoord == 'a'){
// 			antwoord=alert('Je hebt 3 soep en water');
// 		}
// 		else{
// 			antwoord=alert('Je hebt 0 soep en water ');
// 		}

// 		