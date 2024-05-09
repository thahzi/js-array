fruits = ['apple','pineapple','mango','orange','kiwi']

// Find mango from the given array

mango = fruits.find(f=>f=='mango')
console.log(mango);

b = fruits.includes('mango')/* Directly pass the element mango */

// Find the index of mango

i = fruits.indexOf('mango')
console.log(i);