var user = prompt("Biraj: Papir, kamen, makaze.").toLowerCase();
var computer = Math.random();

if (computer <= 0.33) {
	computer = "papir";
}

else if (computer <= 0.66) {
	computer = "kamen";
}

else {
	computer = "makaze";
}


if (user == computer) {
	document.write(" <p style='color:blue; text-align:center; font-size:35px; top-margin: 80px' >Nereseno, igraj ponovo! </p>");
}
else if (user == "papir") {
	if (computer == "makaze") {
		document.write  ("<p style='color: green; text-align:center;font-size:35px; top-margin: 80px' >Izgubio si!</p>" );
	}
	else {
		document.write("<p style='color:purple; text-align:center; font-size:35px; top-margin: 80px'>Pobedio si. </p>");
	}
}

else if (user == "kamen") {
	if (computer == "papir") {
		document.write("<p style='color: green; text-align:center;font-size:35px; top-margin: 80px' >Izgubio si!</p>");
	}
	else {
		document.write("<p style='color:purple; text-align:center; font-size:35px; top-margin:80px'>Pobedio si. </p>");
	}
}

else if (user == "makaze") {
	if (computer == "kamen") {
		document.write("<p style='color: green; text-align:center;font-size:35px; top-margin:80px' >Izgubio si!</p>" );
	}
	else {
		document.write("<p style='color:purple; text-align:center; font-size:35px;top-margin:80px'>Pobedio si. </p>");
	}
}

else {
	alert("Nisi ukucao nista od navedenog. Probaj ponovo :P ");
}