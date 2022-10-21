//  declaratio: let 'variable name' : 'type' = 'value';

let x: number = 12;

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
    


    
