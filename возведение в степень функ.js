function pow(x, n) {
  let ne= x**n;
  return ne;
};

let x = prompt ("vvedite chislo",);
let n = prompt ("vvedite stepen",);


if (n>1){
  alert( pow(x, n) );
} else {
  alert ("nevernoe chislo ili stepen");
};

