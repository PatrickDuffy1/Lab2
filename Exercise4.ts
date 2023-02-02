let num: number = 42;
let string1: string = `abc`;
let flag: boolean = false;
let list: number[] = [1, 2, 3];
let looselyTyped: any = 4;

console.log("Boolean: " + flag);
console.log("String: " + string1);
console.log("Number: " + num);

for(let i = 0; i < list.length; i++)
{
    console.log("Array: " + list[i]);
}

console.log("Any: " + looselyTyped);