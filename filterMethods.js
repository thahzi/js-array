// Array method filter

a = [10,12,15,13,25,2,3,5]

// print all even numbers from given array
even = a.filter(num=>num%2==0)
console.log(even);
// print all numbers >13 from the given array
check = a.filter(b=>b>13)
console.log(check);

c = a.some(num=>num>13)
console.log(c?'Yes':'No');