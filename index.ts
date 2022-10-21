//  declaratio: let 'variable name' : 'type' = 'value';

let x: number = 12;
let z: number = 12;

let y: string = 'Marcel';

let a: any; //avoid
// type: validType = number | string | boolean | object |  undefeined ;

type validType = number | string ;

const addition = (n1: validType, n2: validType) => {
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        return n1 + n2;
    }else{
        console.log("Error not a number");
    }
}
console.log(addition(x, z));
//interface creates placceholders
interface Inventory {
    shape: string,
    color: string,
    size?: validType, // ? before coln allows it to be optional
}
const obj: Inventory = {
    shape: "circle",
    color: "red",
    size: 100,
}
//Arrays
let list: number[] = [1, 2, 3, 4, 5, 6];
let list2: validType[] = [1, 2, "4"];
interface DciStudsInterface {
    name: string,
    age?: number,
    role: string,
    isTeacher: boolean,
}
    
interface arr{
    tile: string,
    score: number,

}
const scrabbleHand:arr[]=[
    {tile: "N", score: 1},
    {tile: "K", score: 5},
    {tile: "Z", score: 10},
    {tile: "X", score: 8},
    {tile: "D", score: 1},
    {tile: "A", score: 1},
    {tile: "E", score: 1},
]
const calcMaxScrabbleScore = (tiles: arr[])=>{
    let sum: number = 0;
    tiles.forEach((el:any)=>{
        sum+= el.score;
    });
    return sum;

} 
console.log(calcMaxScrabbleScore(scrabbleHand));

const isEmptyObject =(obj:object)=>{
    return Object.keys(obj).length===0;
}
console.log(isEmptyObject({}));
console.log(isEmptyObject({ a: 1}));

const countLetters= ( str: string ) => {
    const splited: Array<string> = str.split("");
    let result: object ={};
    for (let i=0; i<splited.length; i++){
        if (result.hasOwnProperty(splited[i])){
            result[splited[i]]++;

        }else{
            result[splited[i]] = 1;
        }
    }
    return result;
};
console.log(countLetters("tree"));