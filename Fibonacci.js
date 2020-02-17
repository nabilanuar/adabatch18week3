//Fibonacci numbers

var x = 1;
var y = 1;

for(var i=0; i<9; i++){
  console.log(x);
  console.log(y);
  
  x = x + y;
  y = x + y;
}
