// Bodlogo-1


for (let i = 0; i <=10; i++){
    console.log ("i = ", i);
}


// Bodlogo-2

for (let i =0; i<=10; i++){
    if(i%2!==0){
        console.log ("Sondgoi toonuud:", i);
    }
    
}


// // Bodlogo-3

for (let i =0; i<=10; i++){
    if(i%2===1){
        console.log ("Tegsh toonuud:", i);
    }
    
}


// // Bodlogo-4

let sum = 0;
let too = 0;
for (let tooluur = 1; tooluur <= 100; tooluur++) {
  too++;
  sum = sum + too;
}
console.log("SUM:", sum);


// // Bodlogo-5

let bum = 0;
let mum =0; 

for (let tooluur = 1; tooluur <= 101; tooluur++) {
    mum++;
    bum = bum + mum;
  }
  console.log("SUM:", bum);
  

// // Bodlogo-6

let number= 4;
let factorial = 1;

for (i = 1; i <=4; i++) { 
    factorial = factorial*i;
}
console.log ("4-iin factorial:",factorial);



// // Bodlogo-7

let numb = 123; 
let digit = 0;
let som =0;

while(numb!== 0){
    digit = numb %10;
    numb =numb -digit;
    numb =numb /10;
    som =som +digit;
}
console.log ("Digit som:",som);


// // Bodlogo-8

let tooo = 1234;
let dig = 0;
let sam = 0;

while (tooo > 0){
    dig = tooo % 10;
    tooo = tooo - dig;
    tooo = tooo / 10;
    if(dig % 2 === 0) {
        console.log("tegsh", dig)
        sam = sam + dig;
    }
}

console.log ("Tegsh tsipriin niilber:",sam);



// // Bodlogo-9

let nom = 1234;
let deg = 0;
let sem = 0;

while (nom > 0){
    deg = nom % 10;
    nom = nom - deg;
    nom = nom / 10;
    if(deg % 2 === 1) {
        console.log("Sondgoi", deg)
        sem = sem + deg;
    }
}

console.log ("Sondgoi tsipriin niilber:",sem);




// // Bodlogo-10

let odd = 0;
let des = 0;
let sim = 0;

while (odd <=20){
    des = odd % 10;
    odd =odd - des;
   odd = odd / 10;
    if(des % 2 === 0) {
        sim = sim + des;
    }
}

console.log ("N hurtelh toonii tegsh tsipruudiin niilber:", sim);


// Bodlogo-11



