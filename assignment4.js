// problem 1
function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'please provide me a number';
    }
    const cube = number * number * number;
    return cube;
}

// problem 2
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'please provide me two string'
    } else {
        if (string1.includes('ohn') && string2.includes('ohn')) {
            return true;
        } else {
            return false;
        }
    }

}

// problem 3
// problem 4
const obj = {
    street: 10, house: '15A', society: 'Earth Perfect'
}
function findAddress(info) {
    const street = info.street || ' __';
    const house = info.house || ' __';
    const society = info.society || ' __';
    const result = street + ',' + house + ',' + society;

    return result;

}

// problem 5

function canPay(changeArray, totalDue) {

    if (!Array.isArray(changeArray) || changeArray === 0) {
        return 'please provide valid input'
    }

    let sum = 0;

    for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        sum = sum + element;

    }
    if (sum > totalDue) {
        return true;
    } else {
        return false;
    }
}