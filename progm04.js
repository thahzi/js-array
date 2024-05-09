//check whether 2 is present or not

// a = [10,11,12,3,2,4]
// temp =0

// for(i of a){
//     if(i==2){
//         console.log(`2 is present in the array`);
//         temp=0
//         break
//     }
//     else{
//         temp ++
//     }
// }

// if(temp>0){
//     console.log(`2 is not present`);
// }

//__________________________________________________________

// Use true or false by creating temp = false as default and inside if{} make it as true with break and outside the loop use if statement

//  input array = [4,5,6]
// output array = [11,10,9]

// a = [4,5,6]
// b =[]
// n=7
// for(i in a){
//    a[i]+=n
//     n-=2
//     b[i] = a[i]
// }
// console.log(b);

//__________________________________________________________

// a=[10,20,30,20,30,40,50,60,10]
// find the duplicate no from the given array = 10,20,30

// a=[10,20,30,20,30,40,50,60,10,20,30]
// b = []
// count = 0
// isDuplication = false

// for(i=0;i<a.length;i++){
//     isduplicateB = false

//     for(k=0;k<b.length;k++){
//         if(b[k]==a[i]){
//             isduplicateB = true
//             break
//         }
//     }

//     if(!isduplicateB){

//          for(j=i+1;j<a.length;j++){
//         if(a[j]==a[i]){
//             b[i] = a[i]
//             isDuplication = true
//         }
//     }

//     }
   
    
// }

// console.log(b);

// !isDuplication && console.log(`No duplications`);

//__________________________________________________________
// Print pairs whose sum is 6
//  b=[2,3,4,5] /* (2,4) */

// for(i=0;i<b.length;i++){
   
//     for(j=i+1;j<b.length;j++){
//         if(b[i]+b[j]==6){
//             console.log(b[i],b[j]);
//         }
//     }
// }

// Using binary search

a = [2,3,4,5]
low = 0
up = a.length -1
sum = 7
flag = false

while(low<up){
    csum = a[low] + a[up] /* current sum */
    if(csum == sum){
        console.log(`${a[low]} , ${a[up]}`);
        low++
        flag = true
    }
    else if(csum<sum){
        low++
    }
    else{
        up--
    }
}

!flag && console.log(`No pairs found`);

//__________________________________________________________

// primt common numbers from the given array 11,20,30

// p = [10,11,12,20,30]
// q = [11,20,25,30,33]

// for(i=0;i<p.length;i++){
//     for(j=0;j<q.length;j++){
//         if(p[i]==q[j]){
//             console.log(p[i]);
//         }
//     }
// }

//__________________________________________________________

// Using binary search the above que

// p = [10,11,12,20,30]
// q = [11,20,25,30,33]

// // index for p
// a=0
// // index for q
// b=0

// flag = false

// while(a<p.length && b<q.length){
//     if(p[a]==q[b]){
//         console.log(p[a]);
//         flag = true
//         a++
//         b++
//     }
//     else if(p[a]>q[b]){
//         b++
//     }
//     else{
//         a++
//     }
// }

// !flag && console.log(`no common numbers`);