//Noor Margana: pizza calculator

var small = prompt("hoeveel small pizza's wilt u (€5,00)"); //vraag aantal pizza's small
var medium = prompt("hoeveel medium pizza's wilt u (€6,00)"); //vraag aantal pizza's medium
var large = prompt("hoeveel large pizza's wilt u (€7,00)"); //vraag aantal pizza's large

var smallprijs = 5 * small //totaal prijs small pizza's
var mediumprijs = 6 * medium //totaal prijs medium pizza's
var largeprijs = 7 * large //totaal prijs large pizza's

document.write(small + " x " + 5 + " = " + " € " + smallprijs + " ,00 " + "<br/>"); //som van small pizza prijs
document.write(medium + " x " + 6 + " = " + " € " + mediumprijs + " ,00 " + "<br/>"); //som van medium pizza prijs
document.write(large + " x " + 7 + " = " + " € " + largeprijs + " ,00 " + "<br/>"); //som van large pizza prijs

document.write("---------------------- +" + "<br/>") //lijn voor het bij elkaar optellen

var totaal = smallprijs + mediumprijs + largeprijs; //totaal prijs alle pizza's bij elkaar opgeteld
document.write("Totaal " + totaal);
