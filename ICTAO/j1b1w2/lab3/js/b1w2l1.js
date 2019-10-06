var x = 6;
var y = 3;

for (var i = 1; i <= 10; i++) {
 	document.write(i + " x " + x + " = " + i * x + "<br/>");
}
document.write("<br/>")
for (var i = 1; i <= 10; i++) {
 	document.write(i + " x " + y + " = " + i * y + "<br/>");
}

var input = prompt ("getal")

var x = parseInt(input);
var y = 6;
var z = x + y;
var w = z * 10
var h = w / 5
var u = h - 12

document.write("<br/>")

document.write(x + " + " + y + " = " + z +  "<br/>");

document.write(z + " x " + 10 + " = " + w +  "<br/>");

document.write(w + " : " + 5 + " = " + h +  "<br/>");

document.write(h + " - " + 12 + " = " + u +  "<br/>");
