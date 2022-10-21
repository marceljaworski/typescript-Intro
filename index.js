//  declaratio: let 'variable name' : 'type' = 'value';
let x = 12;
let z = 12;
let y = 'Marcel';
let a; //avoid
const addition = (n1, n2) => {
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        return n1 + n2;
    }
    else {
        console.log("Error not a number");
    }
};
console.log(addition(x, z));
const obj = {
    shape: "circle",
    color: "red",
    size: 100,
};
//Arrays
let list = [1, 2, 3, 4, 5, 6];
let list2 = [1, 2, "4"];
const scrabbleHand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 1 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
];
const calcMaxScrabbleScore = (tiles) => {
    let sum = 0;
    tiles.forEach((el) => {
        sum += el.score;
    });
    return sum;
};
console.log(calcMaxScrabbleScore(scrabbleHand));
const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
};
console.log(isEmptyObject({}));
console.log(isEmptyObject({ a: 1 }));
const countLetters = (str) => {
    const splited = str.split("");
    let result = {};
    for (let i = 0; i < splited.length; i++) {
        if (result.hasOwnProperty(splited[i])) {
            result[splited[i]]++;
        }
        else {
            result[splited[i]] = 1;
        }
    }
    return result;
};
console.log(countLetters("tree"));
//# sourceMappingURL=index.js.map