//------JS array & string methods assignments-------

// ----------- Daalgavar-1 ---------

//Ogogdson array ruu too nemj oruuldag function bich

function addArr(arr, too) {
  arr.push(too);
  return arr;
}

let newArr = addArr([], 10);
console.log("NewArr", newArr);
newArr = addArr([1, 2, 3, 4], 5);
console.log("NewArr:", newArr);

// ------ Daalgavr-2 -------- Array uusgeh function bich:

function createNewArr(arr, len) {
  for (let i = 1; i < len; i++) {
    let rndToo = Math.random;
    arr.push(rndToo);
  }
}

//-------- Daalgavar-3 ------garaas oruulsan toonii sum avg oldog function bichih

let random = prompt("Ta ymar negen too oruulna uu:");
let ogsonToo = random.split(",");
console.log("Garaas oruulsan too:", ogsonToo);

function sum(input) {
  let numb = [];
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    numb.push(Number(input[i]));
    sum += numb[i];
  }
  return sum;
}

let som = sum(ogsonToo);
console.log("SUM:", som);

function avg(input) {
  let numb = [];
  let av = 0;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    numb.push(Number(input[i]));
    sum += numb[i];
  }
  av = sum / input.length;
  return av;
}

let findAvg = avg(ogsonToo);
console.log("Average:", findAvg);

// ------------- Daalagvar- 4 ----------
// Ogogdson string iin buh usgiig tom bolgoh

let string = "the quick brown fox";

let text = string.split(",");
console.log (text);

// function firstLetter(stir) {
//   let son = "";
//   for (let i = 0; i === string.lenght; i--) {
//     son = son - string[i[0]];
//     stir.push("THE QUICK BROWN FOXZ");
//     console.log(stir);
//   }
// }

// let firstle = firstLetter();

// let stir = string.split();

// console.log(stir);

//--------- Daalgavar-5 --------------//Urvuugaar butsaah


function reverseText(text) {
    // "hello world" => split(" ") => ["hello","world"]
    return text.split("").reverse().join("");
    // ["h","e","l","l","o"] =>["o","l","l","e","h"]
  }


const textArr = ["Hello", "World", "Pinecone"];
function reverseArray(inputArr) {
  let r = [];
  for (let i = 0; i < inputArr.length; i++) {
    r.push(reverseText(inputArr[i]));
  }
  return r;
}

let ra = reverseArray(textArr);
console.log(textArr);
console.log("Reversed array:", ra);


//  ---------- Daalgavar-6 ---------Ogogdson text dotor tuhain oruulsan keyword baigaa uguig shalgah function bich:

let rdnText = prompt (" Ta duriin 3-5 amitnii ner oruulna uu:")
function findKeyWord(inputText){
    for (let i =0; i < inputText.length; i++){
        console.log ("Ogogdson amitan baigaa eseh:", inputText.includes("dog"))
    }

}

 let findKey = findKeyWord(rdnText);


 // ---------- Daalgavar-7 --------
// Niit borluulaltiin dung tootsooloh:


const data = [

    {productName:"Bakery", unitPrice:5000, 
        amount: 200,
         totalPrice: 500000 ,
          casherId:1,
          date: '2022-11-01'},

    {productName:"Chocolate", unitPrice:3000,
         amount: 18,
          totalPrice: 54.000, 
          casherId:1,
           date: '2022-11-01'},

];

let niitDun = 0;

for (let i =0; i < data.length; i++ ){
    niitDun += data[i].totalPrice;
}

console.log ("Total Price:",niitDun)