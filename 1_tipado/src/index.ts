// let username : string | number = 'Leo';

// username = 10;

// console.log('El username es:', username)

let myString: string = "hello";
let myNumber: number = 10;
let myBoolean: boolean = true;

let myUndefinedOrNull: undefined | null;
myUndefinedOrNull = null;
myUndefinedOrNull = undefined;

const splitName = (nameRaw: string): string => {
  return nameRaw.split("_").join("");
};

const myNamewithSpaces = splitName("Leo_Piqueras");
console.log(myNamewithSpaces);

// let myVariable : any;
let myVariable: unknown;

(myVariable as string).split("");
(myVariable as number).toFixed(2);
(myVariable as []).map(() => {});

// const myArr: (string | number)[] = ['a', 'b', 'c'];
// myArr.push(2);
// myArr.push(true); // Falla porque no es un tipo válido en esta const.

const myArr: Array<string | number> = ["a", "b", "c"]; // const myArr: (string | number)[] = ['a', 'b', 'c'];
myArr.push(2);

const mixedArray: [string, number, string] = ["a", 3, "c"];

const myObject = {
  animal: string;
  vehicle: string;
} = {
  animal: 'dog',
  vehicle: 'car',
};
