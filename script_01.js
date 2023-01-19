
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart :
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"

startApp();
function startApp()
{
	output(calculator(getNumber1(),getNumber2(),getOp()));
}

function getNumber1()
{
	return parseInt(prompt("Zahl 1 eingeben:"));
}

function getNumber2()
{
	return parseInt(prompt("Zahl 2 eingeben:"));
}

// module: operator input| Test:
// output(getOp());
function getOp() 
{

	let op = prompt("Operator eingeben:");
	
	if (isOpValid(op)) {

		return op;
	
	} else {
	
		return ERROR_STR_GEN;
	
	}
}


// Überprüfung der Gültigkeit des Operators
function isOpValid(op)
{
	return op == "+" || op == "-" || op == "*" || op == "/" || op == ":";
}



// module: calculator

// test Kursversion
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));

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


// test meiner Version
// output(calculator());

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
  