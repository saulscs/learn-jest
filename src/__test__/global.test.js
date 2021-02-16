/***********  FUNDAMENTOS JEST   ************/

//1. - Debemos poner un titulo muy descriptivo a la prueba.

//const text = "Hello world"

// test('Esto es una cadena', () => {
//     expect(text).toMatch(/hola/);
// });


//2.- Probar test con un arreglo

// const fruits = ['manzana','banana', 'melon'];


// test('¿Tenemos una banana ', () => {
//     expect(fruits).toContain('banana');
// })

// 3.- Probar test con numeros

// test('Mayor que', () => {
//     expect(10).toBeGreaterThan(9);
// })

// 4.- Test con booleans

// test('Verdadero', () => {
//     expect(true).toBeTruthy();
// })

//5.- Reverse string 

// const reverseString = (str, callback) => {
//     callback(str.split("").reverse().join(""));
// }

// test('Probar un callback', () => {
//     reverseString("hola",(str) =>{
//         expect(str).toBe('aloh');
//     });
// })

// 6.- Trabajar con promesas

// const reverseString2 = str =>{
//     return new Promise( (resolve, reject)=>{
//         if(!str){
//             reject(Error('Error'));
//         }
//         resolve(str.split("").reverse().join(""));
//     })
// }

// test('Probar promesa', () => {
//     return reverseString2('hola')
//     .then(string => {
//         expect(string).toBe('aloh')
//     })
// })

// 7.- Async / await

// const reverseString2 = str =>{
//     return new Promise( (resolve, reject)=>{
//         if(!str){
//             reject(Error('Error'));
//         }
//         resolve(str.split("").reverse().join(""));
//     })
// }

// test('Probar async/await ', async () => {
//     const string = await reverseString2('hola')
//     expect(string).toBe('aloh')
// })



// afterEach(()=> console.log("Despues de cada prueba"))
// afterAll(()=> console.log("Despues de todas las pruebas"))

// beforeEach(() => console.log("Antes de cada prueba"))
// beforeAll( ()=> console.log("Antes de todas las pruebas"))



