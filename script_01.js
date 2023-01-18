
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
const ERROR_STR_GEN = "Ungültige Eingabe";

// module: calculator

// test Kursversion
output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));

// test meiner Version
// output(calculator());


// Kursversion
function calculator(a,b,op)
{
	switch (op) {
		case "+": // addition
			return add(a,b);
		case "-": // subtraktion
			return sub(a,b);
		case "*": // multiplikation
			return mult(a,b);
		case ":": // divison
		case "/": // divison
			return div(a,b);
		default:
			return ERROR_STR_GEN;
	}
}



// Meine Version!!!
// function calculator()
// {
//     let a = parseInt(prompt("Zahl eingeben"));
//     let op = prompt("Operator eingeben");
//     let b = parseInt(prompt("Weitere Zahl eingeben"));

// 	if(isNaN(a) == true || isNaN(b) == true)
// 	{
// 		return ERROR_STR_GEN;
// 	}

//     switch(op)
//     {
//         case "+":
//             return add(a,b);
//         case "-":
//             return sub(a,b);
//         case "*":
//             return mult(a,b);
//         case "/":
//         case ":":
//             return div(a,b);
//         default:
//             return ERROR_STR_GEN;
//     }
    

// }



// module: Rechenarten

// test
// output(add(2,2));
// output(div(2,-2));
// output(div(3,-2));
// output(div(2,0));

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
  