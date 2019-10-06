
var antwoord = prompt("Is de kaas geel?");


if(antwoord == 'ja'){
	antwoord=prompt('Zitten er gaten in');
	if(antwoord == 'ja'){
		antwoord=prompt('Is de kaas belachelijk duur');
		if(antwoord == 'ja'){
			alert('Kaas: Emmenthaler');		
		}
		else{
			alert('Kaas: Leerdammer');
		}
	}
	else{
		antwoord=prompt('Is de kaas hard als steen');
		if(antwoord == 'ja'){
			alert('Kaas: Pammigiano Regginiano');
		}
		else{
			alert('Kaas: Goudse kaas')
		}
	}
}	
else{
	antwoord=prompt('Heeft de kaas blauwe schimmels');
	if (antwoord == 'ja'){
		antwoord=prompt('Heeft de kaas een korst');
		if (antwoord == 'ja'){
			alert('Kaas: Blue de Rochbaron')
		}
		else{
			alert("Fourme d'Ambert");

		}

	}
	else{
		antwoord=prompt('Heeft de kaas een korst');
		if (antwoord == 'ja'){
			alert('Kaas: Camembert')
		}
		else{
			alert('Mozarella')
		}
	}
}
