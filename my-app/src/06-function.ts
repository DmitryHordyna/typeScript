type AddFn =(a:number,b:number)=>number
// interface IAddFn{
//     (a: number, b: number) => number;
// }
const addExpression = function (x: number, y: number): number {
 return x+y
}
const addExpression2:AddFn = function (x,y) {
 return x+y
}

addExpression2(2,4)
addExpression(2, 3);

const addArrow = (x: number, y: number): number => {
    return x+y
}

type Fn = (a: number, b: number, c: number, ...resParams: number[]) => number;

const fn:Fn = (a,b,c, ...resParams) => {
    return 5
}
fn(1, 2, 3, 4, 5, 6)

type logFn = (m: string) => void;

const randomFn:logFn = (message) => {
    return 3
}
randomFn('hello')

enum PizzaSize{
    Small = "s",
    Medium = 'm',
    Large='l'
}

interface IPizza{
    size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
    topping: string[],
    // logSize?:()=>{}
    logSize?(): void;
    getSize?(): string;
    addTopping(topping: string): void;
}

const pizza :IPizza= {
    size: PizzaSize.Small,
    topping: ['sause', 'mushrooms'],
    logSize() {
        console.log(this.size)
    },
    getSize() {
        return this.size
    },
    addTopping(topping) {
        this.topping.push(topping)
    }
}
console.log(pizza)
export { }