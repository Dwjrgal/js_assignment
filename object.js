// JS function & object assignment 


// Daalgavar-1 Ogogdson 2 toonii ihiig oloh function bich

let x =10;
let y = 12;

function ihToo () {
    if ( x >y ){
        console.log("Hamgiin ih too :",x)
    }else  {
        console.log ("Hamgiiin ih too:",y)
    }

}

ihToo();


// Daalgavar-2  Ogogdson array - s ogogdson too baigaa esehiig ol

let array = [ 10, 20, 30,]
let num =10;

function ogsonToo(){
for (let i =0; i < array.length; i++){
if (array[i] === num){
    num = array[i]
}
}

}
console.log ("Ogogdson too:", num)

ogsonToo();


// Daalgavar-3 Ogogdson temdegt moroos ogogdson temdegt mor baigaa esehiig ol

let arraySign = ["!","@","#"]
let sign = "!";

// function arSign(){
//     for (let i = 0; i < arySign.length; i++){
//         if (arSign[i] == sign){
//             sign = arraySign[i]
//         }
//     }
// }

// console.log ("Ogogdson temdegt:",sign);

// arSign();


// Daalgavar-4 Array iin dundajiig oloh /function bich


let sum = 0;
let nem = 0;

function average (){
    let numbers = [ 12, 23, 52, 15,]
    for (let i =0; i < numbers.length; i++){
        nem ++;
        sum = sum +numbers[i];
        sum =sum/numbers.length;
    }
}

console.log ("Average:",sum)

average();