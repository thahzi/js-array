// Array Splice

a = ['max','miller','mini','manu']
console.log(a);

// remove mini
a.splice(2,1)
console.log(a);

// remove mini and manu
a.splice(2,2)
console.log(a);

// add maxwell as the third item in the array

a.splice(2,0,'maxwell')
console.log(a);

// remove miller and add ken at the same position
a.splice(1,1,'ken')
console.log(a);