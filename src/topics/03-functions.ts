function addNumber(a:number, b:number):number{
    return a + b;
}

const addNumbers = (a:number, b:number):string =>{
    return `${a+b}`
}

function multiply(firstNumber:number, secondNumber?:number, base = 2){
    return firstNumber * base;
}

const numero: number = addNumber(1,2);
const result2: string = addNumbers(3,2);
const result3:number = multiply(5);

console.log(numero, result2, {result3});