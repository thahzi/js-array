// Binary search
a= [3,1,6,9,4,2,8]

// assecending and descending sorting

// console.log(a.sort((n1,n2) =>n1-n2)); /* ascending order*/
asort = a.sort((n1,n2) =>n1-n2)

// console.log(a.sort((n1,n2)=>n2-n1));/* descending order */

// Binary search
console.log(`The sorted array is ${asort}`);
searchItem = 8

low = 0
up = a.length - 1
flag = false
// low and up are the index of the array
while(low<=up){
    mid = Math.floor((low+up)/2)
    midValue = a[mid]

    if(midValue==searchItem){
        console.log(`The item is found at index ${mid}`);
        flag = true
        break;
    }

    else if(midValue<searchItem){
        low = mid + 1
    }

    else{
        up = mid -1
    }
}

    !flag && console.log(`Searched item is not found`);


    // Get the search item
    // Initialize lower and upper index
    // Find the mid valye 
    // mid = search item => Item found
    // mid > search item
            // up = mid -1
    // mid < search item 
            // low = mid + 1