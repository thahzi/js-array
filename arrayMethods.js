// fine the square of each element in the given

// a = [10,11,12,13,14,15]

// sq = a.map(num=>num**2)
// console.log(sq);

// _______________________________________________________

// Find the cube of a given number using map
// op = [11,12,13,14,13,14]

// cube = op.map(num=>num**3)
// console.log(cube);

// _______________________________________________________
// To create a new array with number <=13 increment by 1 and number>13 decrement bt 1

// op = [11,12,13,14,13,14]
// check = op.map(num=>num<=13?++num:--num)
// console.log(check);

// _______________________________________________________
// Reduce() method 
a = [10,11,2,7,3,6,1]
// Find the highest of the given array
highest = a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);
// Lowest of the given array
lowest = a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);
// Sum of given array
sum = a.reduce((n1,n2)=>n1+n2)
console.log(sum);




 