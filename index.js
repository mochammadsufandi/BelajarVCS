let randomArray = [];
const generateRandomNumber = (multiplier) => {
    const randNum = Math.floor(Math.random()*multiplier);

    return randNum;
}

function arrayPusher (arr,length) {
    for (let i = 0; i < length; i++) {
        const numToPush = generateRandomNumber(50);
        arr.push(numToPush);
    }
    return arr;
}

const arrayDivider = function (arr) {
    let oddArray = [];
    let evenArray = [];
    for (x in arr) {
        if (x%2 === 0) {
            evenArray.push(arr[x]);
        } else {
            oddArray.push(arr[x]);
        }
    }
    return {oddArray,evenArray};
}

const MaxNumInArray = (arr) => {
    let MaxNum = arr[0];
    for (x in arr) {
        if (MaxNum < arr[x]) {
            MaxNum = arr[x];
        }
    }
    return MaxNum;
}

const MinNumInArray = (arr) => {
    let MinNum = arr[0];
    for (x in arr) {
        if (MinNum > arr[x]) {
            MinNum = arr[x];
        }
    }
    return MinNum;
}

const sumArray = (arr) => {
    let sum = 0;
    let average;
    for (x of arr) {
        sum += x;
    }
    average = sum/arr.length;
    return [sum,average];
}

// menambahkan function untuk komparasi nilai 
function comparator (jenis,oddVal,evenVal) { 
    let result;
    if (oddVal > evenVal) {
        result = `${jenis} array ganjil lebih besar daripada ${jenis} array genap`;
    } else if (oddVal < evenVal) {
        result = `${jenis} array genap lebih besar daripada ${jenis} array ganjil`;
    } else {
        result = `${jenis} array genap sama dengan array ganjil`;
    }
    return result;
}

const arr = [1,2,3,4,5,6,7,8,9,10];
let sum = sumArray(arr);
console.log(sum)

arrayPusher (randomArray,100);
const {oddArray,evenArray} = arrayDivider(randomArray);
const maxNumOddArray = MaxNumInArray(oddArray);
const maxNumEvenArray = MaxNumInArray(evenArray);
const minNumOddArray = MinNumInArray(oddArray);
const minNumEvenArray = MinNumInArray(evenArray);
const [totalOddArray,averageOddArray] = sumArray(oddArray);
const [totalEvenArray,averageEvenArray] = sumArray(evenArray);
const minConclusion = comparator('nilai minimum',minNumOddArray,minNumEvenArray);
const maxConclusion = comparator('nilai maksimum',maxNumOddArray,maxNumEvenArray);
const averageConclusion = comparator('nilai rata-rata',averageOddArray,averageEvenArray);
const totalConclusion = comparator('jumlah total',totalOddArray,totalEvenArray);

console.log(randomArray);
console.log(oddArray);
console.log(evenArray);
console.log(maxNumOddArray);
console.log(maxNumEvenArray);
console.log(minNumOddArray);
console.log(minNumEvenArray);
console.log(totalOddArray,averageOddArray);
console.log(totalEvenArray,averageEvenArray);
console.log(minConclusion);
console.log(maxConclusion);
console.log(averageConclusion);
console.log(totalConclusion);
