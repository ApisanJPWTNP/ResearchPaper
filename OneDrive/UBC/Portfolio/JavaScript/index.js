// comment

var number = 5; //in-line comment in JavaScript
/* multi-line comment*/

number = 9;

// DataTypes:
// undefied, null, boolean, string, symbol:immutable, number, and object
// ; is optinal but conventional to know where's the end
// way to declare variable
var myName = "Cesar";
myName = 8;

let outName = "freeCodeCamp";

const pi = 3.14;

var a;
console.log(a);
var b = 2;

a = 7;

b = a;

console.log(a);

var a = 9;

var a = 5;
var b = 10;
var c = "I am a String";
a = a + 1;

var studlyCapVar;
var properCamelCase; // naming convention

var sum = 10 + 10;
console.log(sum);

var quotient = 66/2;

var myVar = 5;
myVar = myVar + 1;
myVar++;
console.log(myVar);

var firstName = "Apisan";
var lastName = "Jongpermwattanapol";

console.log(firstName + " " + lastName);

var myStr = "I am a \"double\" string";
console.log(myStr);
// or you could solve it with single quote
console.log(`'"Hi"'`);

console.log("2\n");
console.log("1\t"); //tab
console.log("as\r");
console.log("\fasdasd\b \\");

var ourString = "I come first.";
ourString += "This is the end.";

console.log(ourString);

console.log(firstName.length);

console.log(firstName[1]);

//String are immutable

var myStr = "Jelly WOrld";
myStr[0] = "H";
console.log(myStr);

console.log(myStr[myStr.length - 1]);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the Store " + myAdverb;
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));
console.log(wordBlanks("cat","charming","fly","gradually"));

var ourArray = ["John", 23, 12, 88];

var ourNestedArray = [[1,42], ["everything", 10110]];
console.log(ourNestedArray[1][0]);

// push add the last one / unshift: add element at the beginning / pop: pop out the last one / .shift: remove the first one 

ourArray.push(["happy","joy"]);
console.log(ourArray);

ourArray.pop(); // pop out the last element
console.log(ourArray);

ourArray.unshift("asd");
console.log(ourArray);

ourArray.shift("mama");
console.log(ourArray);

function ourReuseableFunction(){
    console.log("Heyya, Wolrd!");
}
ourReuseableFunction();

function ourFunctionWithArgs(a, b){
    console.log(a-b);
}
ourFunctionWithArgs(10,5);
// global: when you forgot to name var
// if we have both local and global --> local will take up
function fun1(){
    oopsGolbal = 5; //make the function to be global automatically
}

function minusSeven(num){
    return num-7;
}

console.log(minusSeven(10));


function nextInLine(arr, item){
    arr.push(item);
    return arr.shift(); //return the first item
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); //chanage an array to a string that is easy to recognize
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBooleans(){
    return false;
}
console.log(welcomeToBooleans());

function ourTrueorFalse(isItTrue){
    if (isItTrue){
        return "Yes, it's true";
    }
    return "No, it's false";
}
console.log(ourTrueorFalse(true));

function testEqual(val){
    if (val != '10'){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

/* === also evaluate a type called "strict equality operator"
3 === 3   true
3 === '3' false
*/

function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "Yes";
    }
}

function testLogicalOr(val){
    if (val <= 50 || val >= 25){
        result = "outside";
    } else if (val >= 50){
        result = "inside";
    } else {
        result = "else";
    }
    return result;
}

// switch statement

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1: //strict equality
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;  
        case 4:
            answer = "delta";
            break;
        default:
            ansewr = "stuff";
            break;
    }
    return answer;
}
console.log(caseInSwitch(2));

function isLess(a,b){
    return a < b;
}
console.log(isLess(2,3));

function abTest(a,b) {
    if (a < 0 || b < 0){
        return undefined;
    }
    return "positive"
}
console.log(abTest(1,2));

var count = 0;

function countingCards(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdBet = 'Hold';
    if (count > 0) {
        holdBet = 'Bet';
    }
    return count + " " + holdBet;
}

countingCards(2); countingCards('K'); countingCards(7); countingCards('A');
console.log(countingCards(4));

var outDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"] 
};

var myDog = {
    "name": "Jaimai",
    "legs": 3,
    "tails": 2,
    "friends": []
};

myDog.name = "Happy Kong";
console.log(myDog.name); // change property
myDog["barks"] = "woof!"; // adding property to object
delete myDog.name; // deleting the property of an object

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "the drink": "water"
};
// dot notation to get the property in the object
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// some property has a space
var drinkValue = testObj["the drink"];

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "slrigth"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
};

console.log(checkObj("gift")); // like searching in a dictionary
console.log(checkObj("Hello"));

//Manipulating Complex object second object in array and each object hold data similair to JSON
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats":[
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release year": 2003,
        "formats": [
            "Youtube video"
        ]
    }
];

//nested object
var myStorage = {
    "car":{
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//nested array

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

var myArray = [];

var i = 1;
while (i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray);

for (i = 5; i < 10; i+=2){
    myArray.push(i);
}
console.log(myArray);

var ourArr = [9,19,29,39];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++){
    ourTotal += ourArr[i];
}
console.log(ourTotal);

function multiplyAll(arr){
    var product = 1;
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[2,3],[4,5,7]]);
console.log(product);

//do-while loop
do {
    myArray.push(i);
    i++;
} while (i < 5);


// random

var randomNumberBetween0and19 = Math.floor(Math.random()*20); //(0,20) --> floor
console.log(randomNumberBetween0and19)

function RandomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = RandomRange(5,15);
console.log(myRandom);

function convertToInteger(str){
    return parseInt(str);
}

console.log(convertToInteger("56"));

// convert binary number
function convertToBaseInteger(str){
    return parseInt(str, 2);
}
console.log(convertToBaseInteger("1101"));

function checkEqual(a,b){
    return a === b? true : false; //ternary
}

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(0));

// var let const

// var can be override : globally and locally in a function
// let cant declare variable twice : locally inside the block (including if, ...)

let catName = "Quincy";
let quote;

catName = "Beau";

//const is like final in Java you can't redefine it's afterwards but can mutant

const s = [1,2,3,4];
function editInPlace(){
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);

const MATH_CONSTANT = {
    PI: 3.14
};
Object.freeze(MATH_CONSTANT); // to prevent object to change when in const but const itself doesn't change by it's own

//anonymous function
var magic = function(){
    return new Date();
};

//change to

var magic = () => {
    return new Date();
};

// shorten even more

const magic1 = () => new Date();

// for instance convert into arrow function

var myContact1 = function (arr1, arr2) {
    return arr1.concat(arr2);
};

const myContact = (arr1, arr2) => arr1.concat(arr2);

console.log(myContact([1,2], [3,4,5]))

// write higher function with arrow function

const realNumberArray = [4, 5.6, -9.8, 3.14, 9];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}
console.log(squareList(realNumberArray));

// can set default parameter like python

const sum1 = (function(){
    return function sum1(...args) {
        return args.reduce((a,b) => a + b, 0)
    }
})();
console.log(sum1 (1,2,5)); // pass in any arbitary number of arguments with ...args

//spread operator
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function(){
    arr2 = [...arr1]; // fix the element to be exactly like arr1
    arr1[0] = "potato";
})();
console.log(arr2);

var voxel = {x: 3.6, y: 7.4, z: 6.53};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

// const {x : a, y : b, z : c}  = voxel; //quick way to assigning variable in an object

// essentially a=x,b=y,c=z

// destucturing
// const { tomorrow: tempOfTomorrow } = avgTem; 
// means get tomorrow field to the avgTem object and assign it to tempOfTomorrow

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 } 
};

function getMaxOfTmrw(forecast){
    "use strict";

    const { tomorrow: {max :maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

//destructuring from arrays
const [i,j,,k] = [1,2,3,4,5,6]; //switch places by skipping
console.log(i,j,k);