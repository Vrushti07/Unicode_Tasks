let str1 = prompt("Enter a sentence : ");
str=str1.toLowerCase();
const uniquechar = new Set();     // creating a set so that no value is repeated

for (let char of str) {
    if (char >= 'a' && char <= 'z') {
        uniquechar.add(char);          // adding each unique letter to the set
    }
}

let n =uniquechar.size;
console.log(n);       // printing total number of unique letters
let uniquechararr = Array.from(uniquechar);      //array of unique letters

let countarr = new Array(n);   // to count occurence of letters

for (let i=0; i<n; i++) {     //initializing to zero
    countarr[i]="0";
}

for (let char of str) {
    for (let i=0; i<n; i++) {
        if (char==uniquechararr[i]) {
            countarr[i]++;     // to update the counter
        }
    }
}

for (let i in countarr) {
    console.log(`${uniquechararr[i]} : ${countarr[i]}`);     // printing values with bonus task
} 