interface PluginConfig{
    readonly selector: string;
    perPage?: number;
    startIndex?: number;
    draggable?: boolean;
}
const config:PluginConfig = {
    selector: '#plugun-1',
    perPage: 2,
    startIndex: 0,
    draggable: false
};

interface Employees{
    [key: string]: number
    //  [key:string]:number[]
}
interface News extends Employees{
    sideLength:number
 }
const employees :Employees = {
    mango: 5,
    ajax: 4,
    poly: 3,
    
}

const entries = Object.entries(employees)
let bestEmployeeName = '';
let bestEmployeeProIndex = 0;

for (const [name, value] of entries) {
    if (bestEmployeeProIndex <= value) {
        bestEmployeeProIndex = value;
        bestEmployeeName = name;;
    }
}
// console.log( bestEmployeeName)
export { }