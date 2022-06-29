import { func, number, string } from 'prop-types';

function echo<T>(arg: T): T {
  return arg;
}

const result1 = echo('str');
const arr1 = echo([1, 2, 3]);


function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap([1, '2']);

interface GithupResp {
  name: string;
  counnt: string;
}

interface CountryResp {
  name: string;
  area: string;
  population: string;
}

function withApi<T>(url): Promise<T> {
  return fetch(url).then(res => res.json())
}

withApi('github.com').then(res => {
  console.log(res.counnt)
})
withApi<GithupResp>('github.com').then(res => {
  console.log(res.counnt)
})

withApi<CountryResp>('github.com').then(res => {
  console.log(res.area)
})


// 类型别名
type Sum = (x: number, y: number) => number
const sum: Sum = (x: number, y: number): number => {
  return x + y;
}
const result3 = sum(1, 2)
sum(1, 2)

// 交叉类型
interface IName {
  name: string;
}

type IPerson = IName & { age: number }
let person: IPerson = { name: 'zzhiren', age: 22 }

// 联合类型
let numberOrString: string | number;

// 类型断言
function getLength(input: number | string) {
  const str = input as string;
  if (str.length) {
    return str.length;
  } else {
    return str.toString().length;
  }
}

function getLength2(input: number | string): number {
  const str = input;
  if ( typeof str === 'string' && str.length) {
    return str.length;
  } else {
    return str.toString().length;
  }
}

// TS内置工具类型 Partial
interface IPerson1 {
  name: string;
  age: number
}

const person1: Partial<IPerson1> = {
  name: 'Zzhiren'
}

// keyof
type Keys = keyof IPerson1;
// lookup types
type NameType = IPerson1['name'];
// mapped types
type IPersonTest = {
  [key in Keys]: IPerson1[key]
}

// extends in generics
interface IWithLength {
  length: number
}
function echoWithArr<T>(arg: T): T {
  // 会报类型错误，泛型T不一定包含length
  console.log(arg.length);
  return arg;
}

function echoWithArr2<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

echoWithArr2([1, 2, 3])
echoWithArr2({ width: '100px' }) // 报类型错误，因为没有属性length
echoWithArr2({ length: 10, width: '100px' })


type NonType<T> = T extends null | undefined ? never : T;



