//------JS array & string methods assignments-------

// ----------- Daalgavar-1 ---------//

//Ogogdson array ruu too nemj oruuldag function bich

function addArr(arr, too) {
  arr.push(too);
  return arr;
}

let newArr = addArr([], 10);
console.log("NewArr", newArr);
newArr = addArr([1, 2, 3, 4], 5);
console.log("NewArr:", newArr);

// ------ Daalgavr-2 --------// Array uusgeh function bich:

function createNewArr(arr, len) {
  for (let i = 1; i < len; i++) {
    let rndToo = Math.random;
    arr.push(rndToo);
  }
}

//-------- Daalgavar-3 ------//garaas oruulsan toonii sum avg oldog function bichih

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

//------------- Daalagvar- 4 ---------//
// Ogogdson string iin buh usgiig tom bolgoh

let string = [" the quick brown fox"];

function convertToUpperCase(str) {
  return str.toUpperCase(string);
}

let lowercaseString = "the quick brown fox";
let uppercaseString = convertToUpperCase(lowercaseString);
console.log(" Upper case  string:", uppercaseString);

//--------- Daalgavar-5 --------------//Urvuugaar butsaah

function reverseText(text) {
  return text.split("").reverse().join("");
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

//  ---------- Daalgavar-6 ---------//Ogogdson text dotor tuhain oruulsan keyword baigaa uguig shalgah function bich:

let rdnText = prompt(" Ta duriin 3-5 amitnii ner oruulna uu:");
function findKeyWord(inputText) {
  for (let i = 0; i < inputText.length; i++) {
    console.log("Ogogdson amitan baigaa eseh:", inputText.includes("dog"));
  }
}

let findKey = findKeyWord(rdnText);

// ---------- Daalgavar-7 --------//
// Niit borluulaltiin dung tootsooloh:

const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "Ice-cream",
    unitPrice: 3000,
    amount: 15,
    totalPrice: 45000,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "Yogurt",
    unitPrice: 5000,
    amount: 12,
    totalPrice: 60000,
    casherId: 1,
    date: "2022-11-01",
  },
];

function findTotalP(marketData) {
  let niitDun = 0;

  for (let i = 0; i < data.length; i++) {
    niitDun += data[i].totalPrice;
  }
  return niitDun;
}
let l = findTotalP(data);
console.log("Total Price:", l);

// ---------- Daalgavar-8 ----------//
// Niit borluulagdsan baraanii toog ol

function findProAmount(marketData) {
  let niitToo = 0;

  for (let i = 0; i < data.length; i++) {
    niitToo += data[i].amount;
  }
  return niitToo;
}

let sh = findProAmount(data);
console.log("Total amount:", sh);

//  --------- Daalgavar-9 --------//
// Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.

function mostSold(marketData) {
  let sol = [];
  for (let i = 0; i < data.length; i++) {
    sol += data[i].totalPrice;
  }
  return sol.split("").join();
}

let totalSales = mostSold(data);
console.log(totalSales);

//----------  Daalgavar-10 ---------//
//  Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.

function leastSold(marketData) {
  let amo = [];
  for (let i = 0; i < data.length; i++) {
    amo += data[i].amount;
  }
  return amo.split("");
}

let least = leastSold(data);
console.log(least);
