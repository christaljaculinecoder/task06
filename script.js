//1-Looping Through an Array

//Using for loop

// const numbers = [10,20,30,40]

// for (let i=0;i<numbers.length;i++) {

//     console.log(numbers[i])
// }


//Using forEach 

// const numbers = [10,20,30,40]

//        numbers.forEach((num) => {
//             console.log((num));
//         })


//Using for of loop

// const numbers =[10,20,30,40]

//      for (let number of numbers){
//         console.log(number);
//      }

//Using for in loop

// const numbers = [10,20,30,40]

//     for (let i in numbers){

//         console.log(numbers[i]);
//     }

//2-Loop Through an Object

// const student = {
//     name: "Bala",
//     age: 21,
//     grade: "A"
// };

//   for (let key in student){

//     console.log (key,student[key]);
//   }

//3 — Using map()

// const marks = [50,60,70,80]

// const finalmarks = marks.map(num=>(num - 10))

// console.log(finalmarks)


//4 — Using filter()

// const values = [ 5, 12, 8, 25, 3, 15]

// const conditionvalue =values.filter(num => num>10)


// console.log (conditionvalue)


//5 — Using reduce()

// const numbs=[5,10,15,20]

// const total= numbs.reduce((sum,numbs) =>
//     sum + numbs,0)

// console.log(total);