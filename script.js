//script.js
"use strict";

//html Objects
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
const dot= document.querySelector('#dot');

//Working variables
const ERROR_MSG= 'ERROR';
const CLEAR_SCREEN= 'CLEAR';
let screenMessage= '';
let number1= '';
let number2= '';
let operator= null;

//number events

one.addEventListener('click', ()=>{
    numberProcess('1');
    updateScreen(screenMessage);
});
two.addEventListener('click', ()=>{
    numberProcess('2');
    updateScreen(screenMessage);
});
three.addEventListener('click', ()=>{
    numberProcess('3');
    updateScreen(screenMessage);
});
four.addEventListener('click', ()=>{
    numberProcess('4');
    updateScreen(screenMessage);
});
five.addEventListener('click', ()=>{
    numberProcess('5');
    updateScreen(screenMessage);
});
six.addEventListener('click', ()=>{
    numberProcess('6');
    updateScreen(screenMessage);
});
seven.addEventListener('click', ()=>{
    numberProcess('7');
    updateScreen(screenMessage);
});
eight.addEventListener('click', ()=>{
    numberProcess('8');
    updateScreen(screenMessage);
});
nine.addEventListener('click', ()=>{
    numberProcess('9');
    updateScreen(screenMessage);
});
zero.addEventListener('click', ()=>{
    numberProcess('0');
    updateScreen(screenMessage);
});
dot.addEventListener('click', ()=>{
    numberProcess('.');
    updateScreen(screenMessage);
})

//operator events

plus.addEventListener('click', ()=>{
    operatorProcess('+');
    updateScreen(screenMessage);
});
minus.addEventListener('click', ()=>{
    operatorProcess('-');
    updateScreen(screenMessage);
});
mult.addEventListener('click', ()=>{
    operatorProcess('*');
    updateScreen(screenMessage);
});
divi.addEventListener('click', ()=>{
    operatorProcess('/');
    updateScreen(screenMessage);
});
equals.addEventListener('click', ()=> {
    evaluate();
    updateScreen(screenMessage);
});
clear.addEventListener('click', ()=>{
    clearAll();
    updateScreen(screenMessage);
});

//sets up numbers in logic and in calculator screen
function numberProcess(num){

    switch(num) {
        case '.':
            if(!operator && !/\./.test(number1)) {
                number1+= num;
                screenMessage+= num;
            }
            else if(operator !== null && !/\./.test(number2)){
                number2+= num;
                screenMessage+= num;
            }
            else updateScreen(ERROR_MSG);
            break;
        default: 
        if(!operator) {
            number1+= num;
            screenMessage+= num;
        }
        else{
            number2+= num;
            screenMessage+= num;
        }
    }
}

//sets up operators in logic and on calculator screen
function operatorProcess(op){
    console.log(number1);
    if(operator===null && number1!=='' && number1 !=='.'){ 
        operator=op;
        screenMessage+=op;
    }
    else if (number2 !== '' && number2!=='.'){
        evaluate();
        screenMessage= number1+op;
        operator=op;
    }
}

function evaluate(){
    if(number2 !==''){
        let res= operate(operator, number1, number2);
        if (res === ERROR_MSG) {
            //CONTINUE HERE//
            clearAll();
            updateScreen(ERROR_MSG);
        }
        number1=res, number2='', operator=null;
        screenMessage=number1;
    }
}

function clearAll(){
    number1='', number2='', operator=null;
    screenMessage='';
}

//Updates calculator screen
function updateScreen(msg){
    calcScreen.textContent= msg;
}

function add(num1, num2){
    return +num1+ +num2;
}

function subtract(num1, num2){
    return +num1- +num2;
}

function multiply(num1, num2){
    return +num1* +num2;
}

function divide(num1, num2){
    //*figure out how to return error without causing other problems
    if (+num2==0) return ERROR_MSG;
    return +num1/ +num2;
}

function operate(op, num1, num2){
    if (op===null) return ERROR_MSG;

    if (op === '+') return add(num1, num2);
    if (op === '-') return subtract(num1, num2);
    if (op === '*') return multiply(num1, num2);
    if (op === '/') return divide(num1, num2);
}