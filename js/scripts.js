// business logic
function add(number1, number2) {
  return number1 + number2
}

function subtract(number1, number2) {
  return number1 - number2
}

function multiply(number1, number2) {
  return number1 * number2
}

function divide(number1, number2) {
  return number1 / number2
}

// user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

const alert1 = "the addition of your numbers is " + (add(number1, number2)).toString();
const alert2 = "the subtraction of your numbers is " + (subtract(number1, number2)).toString();
const alert3 = "the multiplication of your numbers is " + (multiply(number1, number2)).toString();
const alert4 = "the division of your numbers is " + (divide(number1, number2)).toString();

const additions = number1.toString() + " +" + number2.toString() + " = " + add(number1, number2).toString();
const subtraction = number1.toString() + " -" + number2.toString() + " = " + subtract(number1, number2).toString();
const mult = number1.toString() + " *" + number2.toString() + " = " + multiply(number1, number2).toString();
const division = number1.toString() + " /" + number2.toString() + " = " + divide(number1, number2).toString();

window.alert(additions + " ; " + subtraction + " ; " + mult + " ; " + division);