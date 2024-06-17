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

// let arraySign = ["!","@","#"]
// let sign = "!";

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
        nem++;
        sum = (sum +nem)/numbers.length;
    }
}

console.log ("Average:",sum)

average();


// Daalgavar -5 array dotorh niilber oloh 

// let sum2 = o;
// let nem2 = 0; 





// Daalgavar -6 anhnii too mon esehiig oloh function bich




// Daalgavar -7


// Daalgavar-8 string utgiig urvuugaar bich



// Daalgavar-9/1 ehnii objectiig hevlej garga


let students = [

    {

    name: 'Сэд-Эрдэнэ',

    age: 19,

    gender: "male",

points: 70

},

{

    name: 'Индра',

    age: 19,

    gender: "female",

points: 50

},

    {

    name: 'Хатнаа ',

    age: 21,

    gender: "male",

points: 99

},

    {

    name: 'Тэмүүлэн',

    age: 23,

    gender: "male",

points: 55

},

    {

    name: 'Намуун',

    age: 23,

    gender: "female",

points: 85

},

// eregtei emegtei suragchiin too

  function genderNum (male ,female) {
    return male ,female
}

]
 let som =0;
 let sam = 0;


function averageAge(){
    for (let i =0; i <students.length; i++){
        sam++;
        som =som +students.gender[i]
    }
}
console.log ("Average age:", som)

console.log (students[0]);

// let gen = genderNum (3 ,2);

// console.log ("Eregtei emegtei huisiin too:", gen)

