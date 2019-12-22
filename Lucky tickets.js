"use strict"

let base = prompt('Введи шестизначное начальное число','');
let fin = 0;
for (; base > 0; --base) {
  let a = ( Math.floor( +base / 100000 ) );
  let n = ( +base % 100000 );// целочмсленный остаток
  let b = ( Math.floor( +n / 10000 ) );
  let n2 = ( +n % 10000 );// целочмсленный остаток
  let c = ( Math.floor( +n2 / 1000 ) );
  let n3 = ( +n2 % 1000 );// целочмсленный остаток
  let d = ( Math.floor( +n3 / 100 ) );
  let n4 = ( +n3 % 100 );// целочмсленный остаток
  let e = ( Math.floor( +n4 / 10 ) );
  let n5 = ( +n4 % 10 );// целочмсленный остаток
  let f = ( Math.floor( +n5 / 1 ) );
  let m1= a+b+c;
  let m2= d+e+f;
  if (m1==m2) fin++ ;
} 
 alert ( fin );