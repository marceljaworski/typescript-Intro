//  declaratio: let 'variable name' : 'type' = 'value';
let x = 12;
let z = 15;
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
//# sourceMappingURL=index.js.map