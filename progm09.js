//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]



// print all employee name 
// employee.forEach(emp=>(console.log(emp[1])))


//print developer employee details
// developerEmployee = employee.filter(emp=>emp[2]=='developer').forEach(pro=>console.log(pro))
// console.log(developerEmployee);

// print details of employee Laisha

// laisha = employee.filter(emp=>emp[1]=='Laisha').forEach(pro=>console.log(pro))



//sort employee based on their salary in descending order



//sort employee based on their experience in ascending order




// print the employ name whose have the higest salary
employee.sort((n1,n2)=>n1[4]-n2[4])

employeeSalary = employee.reduce((emp1,emp2)=>emp1[4]>emp1[4]?emp1:emp2)
console.log(employeeSalary[1]);

// Company total salary expensed
