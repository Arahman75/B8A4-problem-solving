function cubeNumber(input) {
    // Check if the input is a number
    if (typeof input !== 'number') {
        return "Input is not a valid number.";
    }

    // Cube the input number
    const result = input ** 3;

    return result;
}

// Test cases
console.log(cubeNumber(2)); // Output: 8
console.log(cubeNumber(3)); // Output: 27
console.log(cubeNumber("hello")); // Output: Input is not a valid number.

/* Note
In this solution, the cubeNumber() function takes an input parameter input, checks if it's a valid number using the typeof operator, and then cubes the input number using the exponentiation operator **. If the input is not a number, it returns a message indicating that the input is not valid.

The bonus part of the problem is also addressed by checking the type of the input and providing a suitable response when it's not a number. */

// pb-2
function matchFinder(firstString, secondString) {
    // Check if the input strings are valid
    if (typeof firstString !== 'string' || typeof secondString !== 'string') {
        return "Invalid input strings.";
    }

    // Check if the second string is a valid substring of the first string
    const isMatch = firstString.includes(secondString);

    // Return true if there's a match, otherwise return false
    return isMatch;
}

// Test cases
console.log(matchFinder("hello world", "world")); // Output: true
console.log(matchFinder("example text", "sample")); // Output: false
console.log(matchFinder("programming is fun", "is")); // Output: true
console.log(matchFinder(123, "abc")); // Output: Invalid input strings.


/* 
Note 
In this solution, the matchFinder() function takes two input parameters firstString and secondString. It first checks if both input strings are valid using the typeof operator. Then, it uses the includes() method to check if the second string is a valid substring of the first string. The function returns true if there's a match, otherwise it returns false.

The bonus part of the problem is also addressed by checking the type of the input strings and providing a suitable response when they are not valid. */


// pb-3

function sortMaker(arr) {
    // Check if the input array is valid
    if (!Array.isArray(arr) || arr.length !== 2 || typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Invalid Input";
    }

    const [num1, num2] = arr;

    if (num1 === num2) {
        return "equal";
    } else {
        const sortedArr = [Math.min(num1, num2), Math.max(num1, num2)];
        return sortedArr;
    }
}

// Test cases
console.log(sortMaker([5, 3])); // Output: [3, 5]
console.log(sortMaker([2, 2])); // Output: "equal"
console.log(sortMaker([7, "hello"])); // Output: Invalid Input

/* 
Note 
In this solution, the sortMaker() function takes an array arr as input. It first checks if the input is a valid array with two numeric elements using conditional statements and the typeof operator. If the input is not valid, it returns "Invalid Input". If the elements in the array are equal, it returns "equal". Otherwise, it sorts the elements in ascending order and returns the sorted array.

The bonus part of the problem is addressed by checking the type and length of the input array and providing a suitable response when it's not valid. */


// pb-4 

function findAddress(person) {
    // Sample output format
    const sampleOutput = `Name: ${person.name}\nAge: ${person.age}\nAddress: ${person.address.street}, ${person.address.city}, ${person.address.country}`;

    // Check for missing properties and apply bonus formatting
    let bonusOutput = null;

    if (!person.name || !person.age || !person.address || !person.address.street || !person.address.city || !person.address.country) {
        bonusOutput = "__";
        const missingProperties = [];

        if (!person.name) missingProperties.push("Name");
        if (!person.age) missingProperties.push("Age");
        if (!person.address || !person.address.street) missingProperties.push("Street");
        if (!person.address || !person.address.city) missingProperties.push("City");
        if (!person.address || !person.address.country) missingProperties.push("Country");

        bonusOutput += missingProperties.join(", ") + "__ property missing in the input object.";
    }

    return { sampleOutput, bonusOutput };
}

// Test cases
const person1 = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Cityville",
        country: "Countryland"
    }
};

const person2 = {
    name: "Jane Smith",
    age: 25,
    address: {
        street: "456 Elm St"
    }
};

console.log(findAddress(person1));
console.log(findAddress(person2));

/* 
Note 
The findAddress() function takes an input object named person.
It creates a sampleOutput string using string interpolation to display the person's name, age, and address.
It then checks if any property is missing in the input object. If any property is missing, it constructs a bonusOutput message using double underscores (__) to indicate the missing properties.
The bonusOutput message includes a list of the missing properties.
The function returns an object containing both sampleOutput and bonusOutput (if applicable).
Test cases are provided at the end to demonstrate the usage of the function with different input objects. */


// pb-5

function canPay(khuchraTaka, chipPrice) {
    // Check if the input array is empty
    if (khuchraTaka.length === 0) {
        return "Missing input: khuchraTaka array is empty.";
    }

    // Calculate the total khuchra taka
    const totalKhuchraTaka = khuchraTaka.reduce((total, taka) => total + taka, 0);

    // Compare total khuchra taka with chipPrice and return boolean result
    return totalKhuchraTaka >= chipPrice;
}

// Test cases
const khuchraTaka1 = [1, 2, 5];
const chipPrice1 = 6;
console.log(canPay(khuchraTaka1, chipPrice1)); // Output: true

const khuchraTaka2 = [1, 2, 5];
const chipPrice2 = 10;
console.log(canPay(khuchraTaka2, chipPrice2)); // Output: false

const khuchraTaka3 = [];
const chipPrice3 = 5;
console.log(canPay(khuchraTaka3, chipPrice3)); // Output: "Missing input: khuchraTaka array is empty."



/* Note 
The canPay() function takes two inputs: an array khuchraTaka and a number chipPrice.
It first checks if the khuchraTaka array is empty. If it's empty, it returns a message indicating that the input is missing.
It calculates the total khuchra taka by using the reduce() method to sum up the values in the array.
It then compares the total khuchra taka with the chipPrice and returns true if the total is greater than or equal to the chipPrice, otherwise it returns false.
Test cases are provided at the end to demonstrate the usage of the function with different input values. */