// define fn in ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
// arrow fns
let greetArrow = (name: string): string => {
  return `Hello, ${name}`;
};
//   example 2
function greet23(name: string): void {
  console.log(name);
}

// define object in ts
let pt: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//   optional property==>يعني ممكن يكون موجود وممكن لا و مش هيطلع ايرور لو مش موجود

let pt2: { x: number; y: number; z?: number } = {
  x: 10,
  y: 20,
};

// optional parameters in functions
// بنستعملها كتير في ريأكت في الجزء بتاع ال
// props
function greetz(name: string, greeting?: string) {
  if (!greeting) greeting = "Hello";

  console.log(`${greeting}, ${name}`);
}

//   assign different types to the same variable by |
function greet2(name: string | null): void {
  if (name === null) {
    console.log("Name is not provided");
  } else {
    console.log("Good morning, " + name.toUpperCase());
  }
}
// null==>variable have no value
// undefined==>variable declared but not assigned a value

// difference between void and never in fns
// ---------------------------------------
// void==>return nothing, any function that doesn't return a value returns undefined, void is used to indicate that the function doesn't return a value

// never==>return error or in infinite loop, never is used to indicate that the function return nothing
function error(message: string): never {
  throw new Error(message);
}

//   enums
// غالبا نفس فكرتها في ال
// c++
enum Team {
  Alpha, //0 index
  Beta, //1
  Gamma, //2
  Delta, //3
}
let t: Team = Team.Delta;
console.log(t); // 3

// rest parameters
function add(...values: number[]): number {
  let sum = 0;
  values.forEach((val) => (sum += val));
  return sum;
}

// interfaces
interface Employee {
  name: string;
  salary: number;
}

function process2(employee: Employee) {
  console.log(`${employee.name}'s salary = ${employee.salary}`);
}

// function overloading
function buildDate(timestamp: number): Date;
function buildDate(m: number, d: number, y: number): Date;
function buildDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = buildDate(87654321);
const d2 = buildDate(2, 2, 2);

// ts supports access modifiers
// public, private, protected
// public==>default
// private==>can't be accessed outside the class
// protected==>can be accessed inside the class and its subclasses

// abstract classes in ts
abstract class Writer {
  abstract write(): void;

  greet(): void {
    console.log("Hello, there. I am a writer.");
  }
}

class FictionWriter extends Writer {
  write(): void {
    console.log("Writing a fiction.");
  }
}
