const fs = require('fs');

let buffer = fs.readFileSync(__dirname + '/input');

console.log(buffer);
const numbers = buffer
  .toString()
  .split('\n')
  .filter(n => n.length)
  .map(n => parseInt(n));



//the number of times a depth measurement increases
const getIncreased = (depths) => {
    let increasedCounts = 0;
    for (let i = 1; i < depths.length; i++) {
if(depths[i] > depths[i-1]){
        increasedCounts++;
    }
}
    return increasedCounts;
}

//How many sums are larger than the previous sum?
const getIncreasedbysumof3 = (depths) => {
    let increasedCounts = 0;
    for (let i = 3; i < depths.length; i++) {
        const current = depths[i] + depths[i - 1] + depths[i - 2];
        const previous = depths[i - 1] + depths[i - 2] + depths[i - 3];
        increasedCounts += current > previous;
    }
    return increasedCounts;
}



console.log(numbers);
console.log("the number of times a depth measurement increases" +getIncreased(numbers));
console.log("How many sums are larger than the previous sum?  " +getIncreasedbysumof3(numbers));