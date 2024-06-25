function analyzeArray() {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("The array is: " + array );
    const max = Math.max(...array);
    console.log(`Max value: ${max}`);
    
    const min = Math.min(...array);
    console.log(`Min value: ${min}`);
    
    const average = array.reduce((a,b) => a+b, 0) / array.length;
    console.log(`Average value: ${average}`);
    
    const evens = [];
    for (const num of array) {
        if(num % 2 === 0) {
            evens.push(num);
        }
    }
    console.log(`The even values are: ${evens}`);
    
    }
    
    analyzeArray();