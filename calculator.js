"use strict"

function Calculator() {
    
    this.read = function(){
        this.i = +prompt( 'введите число 1', 0);
        this.l = +prompt( 'введите число 2', 0);
    }
    this.sum = function(){
        return this.i + this.l;        
    }
    this.mul = function(){
        return this.i * this.l;
    }
}

let calc = new Calculator ();

//concole.log( typeof calc);

calc.read();
alert ( 'сумма =' + calc.sum() );
alert ( 'умножение =' + calc.mul() );