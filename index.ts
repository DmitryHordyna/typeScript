// hw2
{
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
    type fnLog = (login: string) => boolean
    type fnUnic = (all: string[], login: string) => boolean;
    type fnAdd = (allLogins: string[], login: string) => string;

    const isLoginValid: fnLog = function (login) {
        return login.length >= 4 && login.length <= 16 
    };
    
    const isLoginUnique: fnUnic = function (allLogins, login) {
        return allLogins.includes(login)
    }

    const addLogin:fnAdd = function (allLogins, login) {
    let message: string;
        message = isLoginValid(login) ? "valid" : 'need more letters';
        message = isLoginUnique(allLogins,login) ? 'good' : "you have";
    return message
};


console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

}
// {
//     let input: any;
//     const numbers: number[] = [];
//     let total: number = 0;
//     do {
//         input = prompt('number')
    
//         numbers.push(Number(input))
//     } while (input)

//     if (numbers.length > 0) alert(`${numbers.reduce((acc, nex) => acc += nex)} horro`)
// else alert('Nothing')

// }
// {
//     type fn=(message:string)=>boolean
//     const checkForSpam: fn = function (message) {
//         console.log(message.split(' '))
//         return message.split(' ').includes('sale'&&'[SPAM]')
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
// }
// {
//     type func = ([])=> void;

//     const logItems:func = function (array) {
//         for (let item of array) {
//             console.log(item)
//         }
//     }
// // logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// // logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// }
// {
//     type fn = (message: string, price: number) => number;
//     const calculateEngravingPrice: fn = function (message, pricePerWord) {
//         return message.split(' ').length * pricePerWord;
  
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120
// }
// {
//     type fn = (string: string) => string;
//     const findLongestWord: fn = function (string) {
//      return   string.split(' ').reduce((acc,next)=>acc=acc.length>next.length?acc:next)
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'
// }
// {
// type fn=(string:string)=>string
//     const formatString: fn = function (string) {
//         if (string.length > 40) return string.slice(0, 40).concat(' ...')
//         else return string
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка
// }
// //hw1
// {
//     let nameItem: string = 'Генератор защитного поля';
//     let price: number = 1000;
//     // console.log(`Вибран "${nameItem}", цена за штуку ${price} кредитов.`);
//     price = 2000;
//     // console.log(`Вибран "${nameItem}", цена за штуку ${price} кредитов.`);
// }
// {
//     let total: number= 100;
//     let ordered: number[] = [20,80,130];
//     const messageSucsess: string = 'Good!You have enough money.This thing ordered.';
//     const messageError: string = 'Sorrry.You don\'t have enough money for this thing.';

//     // for (let item of ordered) {
//     //     if (item <= total) alert(messageSucsess)
//     //     else alert(messageError)
//     // }  
// }
// {
//     // const ADMIN_PASSWORD: string = 'Welcome'
    
//     // let enterMessage = prompt('Password'); 
//     // if (enterMessage === ADMIN_PASSWORD) alert('Welcome')
//     // else if (enterMessage === null) alert('Cancel enter!')
//     // else alert("Wrong password")

// }
// {
//     // let credits: number = 23580;
//     // const pricePerDroid = 3000;
    

//     //     let ask:any = prompt('How do you want order?');

//     // if (ask === null) alert('good bay')
    
//     // let totalPrice: number = ask * pricePerDroid;

//     // if (credits > totalPrice) alert(`You ordered ${ask} droid .Left many is ${credits - totalPrice}`);
//     // else alert(`Need mo money of less droid.You can will ${Math.floor(credits/pricePerDroid)} robots`)

// }
// {

// //     const askCountry: any = prompt('Name is counry?').toLowerCase().trim();
// //     let price: number = 0;

// //     let message:any = `Sorry you country don't have deliver`;

// //     switch (askCountry) {
// //         default:
// //             message = alert(`Sorry you country don't have deliver`);
// //             break;
// //         case 'China'.toLowerCase():
// //             message = alert(`Deliver in ${askCountry} ,it's cost ${100} credits`)
// //             break;
// //             case 'Chili'.toLowerCase():
// //             message = alert(`Deliver in ${askCountry} ,it's cost ${120} credits`)
// //             break;
            
// // }
  
// }
//   let total:number= 0;
// let asked:any;
//     do {
//     asked = prompt('write number')
//     if(typeof asked==='string')total+=Number(asked)
//     } while (asked)
//      alert(total)
    
