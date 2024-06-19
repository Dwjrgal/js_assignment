//------JS array & string methods assignments-------

//Daalgavar -1

//Ogogdson array ruu too nemj oruuldag function bich 

let array = [ 1, 2, 3, 4,];

let count = array.push( 5 );
console.log ("Too nemj oruulakh:", array);


// Daalgavr-2 Array uusgeh function bich:

let empty = [];

empty.splice(0, 1, '1, 2, 3,' )

console.log ("Array uusgeh:", empty)



// Daalgavar -3 garaas oruulsan toonii sum avg oldog fuction bichih

    
let arr = prompt("Ta ymar negen too oruulna uu:")

function sumAvg ( random ){
let sum = 0;
let avg = 0;

    for (let i =0; i <random.lenght; i++){
        sum +=arr[i];
    }
    avg = sum / random.lenght;
    return avg;

}

let ar = sumAvg(1,2, 3,);
console.log ("Hi", ar) 

// ---- Daalagvar- 4 --- 
// Ogogdson string iin buh usgiig tom bolgoh 

let string = ['the quick brown fox'];

