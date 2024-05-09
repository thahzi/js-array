// Find the lowest, highest and total
// Total expense

expense = [12000,24000,35000,54000,40000,10000]
sum = 0

for(let i of expense){
    sum += i
}

console.log(`Total expense = ${sum}`);

min = expense[0]
max = expense[0]

for(let i of expense){
    if(i<min){
        min = i
    }
    
    if(i>max){
        max = i
    }
   
}

console.log(min);
console.log(max);

// console.log(typeof(expense));