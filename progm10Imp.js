//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,10]
]
//1. display all product name

// a = products.map(n1=>n1[1])
// console.log(a);


//2. display product whose price < Rs.50
// b = products.filter(n1=>n1[2]<50).map(n1=>n1[1])
// console.log(b);

//3. print price of oreo

// oreoProduct = products.find(product => product[1] == 'oreo')[2]
// console.log(oreoProduct);

//4. print costly product name

// costly = products.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)[1]
// console.log(costly);

//5. display out of stock product

// stock = products.filter(pro=>pro[3]==0).forEach(item=>console.log(item[1])) 

//6. sort products based on stock in decsending order
// descending = products.sort((n1,n2)=> n2[3]-n1[3]).forEach(item=>console.log(item[1]))



//7. print product having maximum available stock

maxstock = products.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)[1]
console.log(maxstock);

//8. is there any product can be purchased by Rs. 10

product10 = products.some((n1=>n1[2]<=10))
console.log(product10?'yes':'no');

//9. Is there any product price in the range of 10 to 30

price = products.some((n1=>n1[2]>=10 && n1[2]<=30))
console.log(price?'yes':'no');

//10. print all products in the range of 10 to 30

pricepro = products.filter(n1=>n1[2]>=10 && n1[2]<=30).forEach(item=>console.log(item[1]))