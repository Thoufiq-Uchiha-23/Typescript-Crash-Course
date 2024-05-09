let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

// ANY TYPE
function render(document) {
  console.log(document);
}

// Arrays
// let numbers = [1, 2, 3];
// if we initialize empty array then compiler will throw error
// as it doesn't know so we specify it's datatypes
let numbers: number[] = [];

// Tuples
// Tuples are fixed length of array with diff types
// 1, Thoufiq
let user: [number, string] = [1, 'Mosh'];
user

// Enums
// const small = 1;
// const medium = 2
// const large = 3

// Pascal Case
// to make it more optimized use const
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium
console.log(mySize);

// Function
// function func_name(args):return type {}
// to make arg optional we can add "?" like "taxYear?:"
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2
    // undefined
    return income * 1.3
}

calculateTax(10_000, 2022)

// Objects
let employee: {
  readonly id: number,
  name: string,
  // we use 'retire' object to define how many parameters have and how many args to pass
  retire: (data: Date) => void
} = { 
  id: 1, 
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  }
}
// employee.name = "Thoufiq"
// To avoid changing object properties we use 'readonly' property

// Advanced types
// Type Aliases
type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void
}

// Union Types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if ( typeof weight === 'number')
    return weight * 2.2;
  else
    return parseInt(weight) * 2.2;
}

kgToLbs(10)
kgToLbs('10kg')

// Intersection Types
type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

let textbox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// Literal types
// Literal meaning with (exact, specific) value
type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'

// Nullable types
function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log('Hola!');
}

greet(null)
greet(undefined)

// Optional Chaining
type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null {
  return id == 0? null : { birthday: new Date() }
}

let customer = getCustomer(0)
// if (customer !== null && customer !== undefined)
// Optional property access operator '?.'
  console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log:any = null;
log?.('a')