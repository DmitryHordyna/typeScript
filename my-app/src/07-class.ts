
interface Params{
    size: string;
    toppings: string[];

}

interface IPizza{
    size: string;
    addToppings(topping: string): void;
    // toppings: string[];
 
    // validateTopping(topping: string): boolean;

}

class Pizza implements IPizza{
    // static Sizes = 5;
    
   public size: string;
    private toppings: string[];


    constructor({size, toppings=[]}:Params) {
        this.size = size;
        this.toppings = toppings;
    }
    public addToppings(toppings:string) {
        this.toppings.push(toppings)
    }
     private validateTopping(toppings:string) {
console.log(toppings)
    }
}

const pizza:IPizza = new Pizza({ size: 'medium', toppings: ['cheese'] });

console.log(pizza);
// const x = pizza.addTopping('cucamber')
// console.log('x')

export { }