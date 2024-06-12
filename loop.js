// Bodlogo-1


for (let i = 0; i <=10; i++){
    console.log ("i = ", i);
}


// Bodlogo-2

for (let i =0; i<=10; i++){
    i+=i%2===0;
    console.log ("Sondgoi toonuud:", i);
}


// Bodlogo-3

for (let i =0; i<=10; i++){
    i+=i%2===1;
    console.log ("Tegsh toonuud:", i);
}


// Bodlogo-4

let sum = 0;
let too = 0;
for (let tooluur = 1; tooluur <= 100; tooluur++) {
  too++;
  sum = sum + too;
}
console.log("SUM:", sum);


// Bodlogo-5

let bum = 0;
let mum =0; 

for (let tooluur = 1; tooluur <= 101; tooluur++) {
    mum++;
    bum = bum + mum;
  }
  console.log("SUM:", bum);
  

// Bodlogo-6

let number= 4;
let factorial = 1;

for (i = 1; i <=4; i++) { 
    factorial = factorial*i;
}
console.log ("4-iin factorial:",factorial);



// Bodlogo-7

let a=1, b= 2, c=3;

console.log ("Цифрүүдийн нийлбэр:",a+b+c);