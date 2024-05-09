//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
a = covid_data.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)[1]
console.log(`Maximum +ve cases district : ${a}`);

//2. district having Highest 1st dose vaccine
b = covid_data.reduce((n1,n2)=>n1[5]>n2[5]?n1:n2)[1]
console.log(`Highest 1st dose vaccine district : ${b}`);

//3. district having lowest death rate
c = covid_data.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)[1]
console.log(`Lowest death rate district : ${c}`);
//4. sort data with +ve case in descending order
d = covid_data.sort((n1,n2)=>n2[2]-n1[2])
console.log(d);
//5. is district with +ve cases > 15000
e = covid_data.filter(n1=>n1[2]>15000).forEach(item=>console.log(item[1]))

//6. sort data with 1st dose vaccine ascending order
f = covid_data.sort((n1,n2)=>n1[5]-n2[5])
console.log(f);

//7. Print Thrissur details
g = covid_data.find(n1=>n1[1]=='Thrissur')
console.log(g);
//8. Print total number of positive cases
h = covid_data.reduce((n1,n2)=>n1+n2[2],0);
console.log(h);
// covid_data.map(n1=>n1[2]).reduce((a,b)=>a+b)


//9. Print total number of curred cases
i = covid_data.reduce((n1,n2)=>n1+n2[4],0);
console.log(i);

//10. Print curred cases in Idukki

let j = covid_data.find(n1 => n1[1] == 'Idukki')[4];
console.log(j);

// p = covid_data.map(n1=>n1[1])
// console.log(p);