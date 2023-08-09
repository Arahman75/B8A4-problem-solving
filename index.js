// problem 1

// function cubeNumber(number) {
//     if (typeof number !== 'number') {
//         return 'please provide me a number';
//     }
//     const cube = number * number * number;
//     return cube;
// }
// console.log(cubeNumber(4));

// problem 2
// “John Doe”, “ohn” “JavaScript”, “Code” “Peter Parker”, “Pen” “Peter Parker”,”pet”

// function matchFinder(string1, string2) {
//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//         return 'please provide me two string'
//     } else {
//         if (string1.includes(string2)) {
//             return true;
//         } else {
//             return false;
//         }
//     }

// }
// console.log(matchFinder('hello world ', 'jarman'));

// problem 3

// function sortMaker(arr) {
//     if (!Array.isArray(arr)) {
//         return 'please provide me an array'

//     }
//     let [num1, num2] = arr;
//     if (num1 < 0 || num2 < 0) {
//         return 'please provide two positive input'
//     } else {
//         if (num1 === num2) {
//             return 'equal'
//         } else {
//             const sortNumber = [Math.max(num1, num2), Math.min(num1, num2)];
//             return sortNumber;
//         }
//     }
//     // for (const item of arr) {
//     //     if (item < 0) {
//     //         return 'please provide two positive input'
//     // } else {
//     //     let [num1, num2] = arr;
//     //     if (num1 === num2) {
//     //         return 'equal'
//     //     } else {
//     //         const sortNumber = [Math.max(num1, num2), Math.min(num1, num2)];
//     //         return sortNumber;
//     //     }
//     // }

//     // }

// }
// console.log(sortMaker([-2, 3]));

// problem 33333

function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return 'please provide me an array'
    }

    let [num1, num2] = arr;
    if (num1 < 0 || num2 < 0) {
        return 'please provide two positive input'
    } else {
        if (num1 === num2) {
            return 'equal'
        } else {
            const sortNumber = [Math.max(num1, num2), Math.min(num1, num2)];
            return sortNumber;
        }
    }

}
console.log(sortMaker([0, 1]));

// problem 4

// const obj = {
//     street: 10, house: '15A', society: 'Earth Perfect'
// }
// function findAddress(info) {
//     const street = info.street || ' __';
//     const house = info.house || ' __';
//     const society = info.society || ' __';
//     const result = street + ',' + house + ',' + society;

//     return result;

// }
// console.log(findAddress(obj));

// problem 5

// function canPay(changeArray, totalDue) {

//     if (!Array.isArray(changeArray) || changeArray.length === 0) {
//         return 'please provide valid input'
//     }

//     let sum = 0;

//     for (let i = 0; i < changeArray.length; i++) {
//         const element = changeArray[i];
//         sum = sum + element;

//     }
//     if (sum > totalDue) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(canPay([8, 3, 6], 10));