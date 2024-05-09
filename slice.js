// Slice array method

a = [11,12,13,14,15,16,17,18,19,20]

// Create am array consisting of first 3 numbers from the array

b = a.slice(0,3)
console.log(b);

// Create a new array having the no. 14,15,16,17 

c = a.slice(3,7)
console.log(c);

// Create a new array having the no.s 18,19,20

d = a.slice(7) /* a.slice(-3) */
console.log(d);