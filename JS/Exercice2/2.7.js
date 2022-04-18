const n  =  number(prompt("Please your enter number"));
let result =0;

for(let i = 0; i < n; i++) {
    const current = number(prompt("please your enter number"));
    result += current;
}
console.log(result);