
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart :
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/

//Konstanten
const ERROR_STR_DIV = "Man darf nicht durch Null teilen!!";

// test
output(div(2,2));
output(div(2,-2));
output(div(3,-2));
output(div(2,0));


function add(a, b)
{
	return a + b;
}

function sub(a, b)
{
	return a - b;
}

function mult(a, b)
{
	return a * b;
}

function div(a, b)
{
	if(b == 0)
	{
		return ERROR_STR_DIV;
	}

	return a / b;
	
}


// module:  output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}
  