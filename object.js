// JS function & object assignment

// Daalgavar-1 Ogogdson 2 toonii ihiig oloh function bich

function ihToo(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
let largestNum = ihToo(10, 12);
console.log("Hamgiin ih too:", largestNum);

// Daalgavar-2  Ogogdson array - s ogogdson too baigaa esehiig ol

let array = [10, 20, 30];
let num = 10;

function findIndex(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return -1;
}
console.log("Ogogdson too:", num);

let idx = findIndex(array, 10);

// Daalgavar-3 Ogogdson temdegt moroos ogogdson temdegt mor baigaa esehiig ol

let arraySign = ["!", "@", "#"];
let sign = "!";

function arSign() {
  for (let i = 0; i < arSign.length; i++) {
    if (arSign[i] == sign) {
      sign = arraySign[i];
    }
  }
}

console.log("Ogogdson temdegt:", sign);

arSign();

// Daalgavar-4 Array iin dundajiig oloh /function bich

function findAverage(numbers, sum) {
  let average = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log("sum", sum);
  return (average = sum / numbers.length);
  console.log("average", average);
}

let sum = 0;
let arrayNum = [12, 23, 52, 15];
console.log(findAverage(arrayNum, sum));

// Daalgavar -5 array dotorh niilber oloh

// function sumArray(sumn) {
//   for (let i = 0; i < sumn.length; i++) {
//     sumn = sumn + numbers[i];
//   }
//   console.log("sum", sumn);
// }
// let sumn = 0;
// let sumNum = [23, 42, 11, 80];

// console.log(sumArray(sumNum, sumn));

// Daalgavar -6 anhnii too mon esehiig oloh function bich

function aToo(x, y, z, m) {
  return x / 1 === 1;
}

let anhniiToo = aToo(1, 2, 3);

console.log("Anhnii too:", anhniiToo);

// Daalgavar -7

// Daalgavar-8 string utgiig urvuugaar bich

let string = ["Hello"];

for (let i = 0; i < string.length; i++) {}

let students = [
  {
    name: "Сэд-Эрдэнэ",

    age: 19,

    gender: "male",

    points: 70,
  },

  {
    name: "Индра",

    age: 19,

    gender: "female",

    points: 50,
  },

  {
    name: "Хатнаа ",

    age: 21,

    gender: "male",

    points: 99,
  },

  {
    name: "Тэмүүлэн",

    age: 23,

    gender: "male",

    points: 55,
  },

  {
    name: "Намуун",

    age: 23,

    gender: "female",

    points: 85,
  },

  // eregtei emegtei suragchiin too

  function genderNum(gender) {
    return gender == male;
  },
];

let som = 0;
let sam = 0;

function averageAge() {
  for (let i = 0; i < students.length; i++) {
    sam++;
    som = som + students.age[i];
  }
}
console.log("Average age:", som);

//  Daalgavar-9/1 ehnii objectiig hevlej garga

console.log(students[0]);
