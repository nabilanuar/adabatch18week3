//Prime number is divisible by itself and 1
//Prime number is number that is not divisible by number from 2 to itself-1


function isPrime(num){
for (var i = 2; i < num; i++){
  //Check if the num is divisible by i
  //if yes return false
  if(num%i == 0){
    return false;
  }
}  
  return true;
}

//use function that created earlier in if statement 
for (var i = 2; i < 100; i++){
  if(isPrime(i) == true){
    console.log(i);
  }
}







