//script.js
const calcScreen= document.querySelector('#screen');
const one= document.querySelector('#one');
const two= document.querySelector('#two');
const three= document.querySelector('#three');
const four= document.querySelector('#four');
const five= document.querySelector('#five');
const six= document.querySelector('#six');
const seven= document.querySelector('#seven');
const eight= document.querySelector('#eight');
const nine= document.querySelector('#nine');
const zero= document.querySelector('#zero');
const clear= document.querySelector('#clear');
const equals= document.querySelector('#equals');
const plus= document.querySelector('#plus');
const minus= document.querySelector('#minus');
const mult= document.querySelector('#multiply');
const divi= document.querySelector('#divide');


one.addEventListener('click', ()=>calcScreen.textContent+='1');
two.addEventListener('click', ()=>calcScreen.textContent+='2');
three.addEventListener('click', ()=>calcScreen.textContent+='3');
four.addEventListener('click', ()=>calcScreen.textContent+='4');
five.addEventListener('click', ()=>calcScreen.textContent+='5');
six.addEventListener('click', ()=>calcScreen.textContent+='6');
seven.addEventListener('click', ()=>calcScreen.textContent+='7');
eight.addEventListener('click', ()=>calcScreen.textContent+='8');
nine.addEventListener('click', ()=>calcScreen.textContent+='9');
zero.addEventListener('click', ()=>calcScreen.textContent+='0');
plus.addEventListener('click', ()=>calcScreen.textContent+='+');
minus.addEventListener('click', ()=>calcScreen.textContent+='-');
mult.addEventListener('click', ()=>calcScreen.textContent+='*');
divi.addEventListener('click', ()=>calcScreen.textContent+='/');
clear.addEventListener('click', ()=>calcScreen.textContent='');
equals.addEventListener('click', ()=>evaluate(calcScreen.textContent));

function evaluate(str){

}

function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(op, num1, num2){


    if (op === '+') return add(num1, num2);
    if (op === '-') return subtract(num1, num2);
    if (op === '*') return multiply(num1, num2);
    if (op === '/') return divide(num1, num2);
    return 'ERROR, operator not accepted';
}