// storing into and accessing from array

a =[]

for(i=0;i<5.;i++){
    a[i] = i+1
}

// for(i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// in access the index values
for(let i in a){
    console.log(a[i]);
}

// access the direct array values
// for(let i of a){
//     console.log(i);
// }