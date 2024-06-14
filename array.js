// Js -ARRAY EXERCISE 1

// Daalgavar-1 

let fruits = ["apple", "banana", "orange", "kiwi", "grape",]

 console.log ("Ehnii element:",fruits[0]);
 console.log ("Suuliin element:",fruits[4]);
 console.log ("3-r element:",fruits[2]);



// Daalgavar-2


let array =[5, 6, 12, 19, 121, 1, 7, 9,63,]

for (let i=0; i <=array.length; i++){
    if (array [i]%2 ===1){
        console.log ("Sondgoi toonuud:",array[i]);
    }else {
        console.log (" Tegsh toonuud:", array[i]);
    }
}



// DAALGAVAR-3

let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]

// daalgavar-3/1 array lenght oloh:

console.log ( "Array length:",arrayOfNumbers.length);

// daalgavar-3/2 array dotorh toonuudiin niilber:

let sum =0;
let nem =0;

for (let  i=0; i<= array.length; i++ ){
    nem++;
    sum=sum +arrayOfNumbers[i];
}

console.log ("SUM:",sum);


// daalgavar-3/3 array dotorh toonuudiin average :

console.log ("Average :",sum/arrayOfNumbers.length);

// daalgavar-3/4 array dotorh  sondgoi toonuudiin niilber  :

let numb =0;
let som =0;

for (let i=0; i <=arrayOfNumbers.length; i++){
    if (arrayOfNumbers [i]%2 ===1){
        numb = numb +arrayOfNumbers[i];
    }
}

console.log ("Sondgoi toonuudiin niilber:",numb);

// daalgavar-3/5 array dotorh  tegsh toonuudiin niilber  :


// let nom =0;
// let sem =0;

for (let i=0; i <=arrayOfNumbers.length; i++){
    if (arrayOfNumbers [i]%2 ===0){
        nom = nom +arrayOfNumbers[i];
    }
}

console.log ("Tegsh toonuudiin niilber:",nom);



// Daalgavar-3/6 array dotorh sondgoi toonuudiin urjver :


let number =1;
let dig =0;

for (let i=0; i <=arrayOfNumbers.length; i++){
    if (arrayOfNumbers [i]%2 ===1){
        number = number *arrayOfNumbers[i];
    }
}


console.log ("Array dotorh sondgoi toonuudiin urjver :", number);


// Daalgavar-3/7 array dotorh hamgiin ih too ? :

let too=0;
let deg =0;

if (arrayOfNumbers[0] != arrayOfNumbers[1]){
    too*=arrayOfNumbers[0];
}

console.log (arrayOfNumbers[0]);
