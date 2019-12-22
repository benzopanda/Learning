"use strict"

/*let name = "john";

let user = {
    name,
    age: 30,
}

let a=( 6 / 2*(1+2));

alert(a);
/*alert(user.age);
alert(user.name);
[Symbol.toPrimitive](hint)  */
//alert(a);

let str = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

