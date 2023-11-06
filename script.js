
  const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
  }
  
  // Create an object to store the extracted values.
  const result = [];
  
  const extractBiggest = () => {
    let biggest = -Infinity; // Initialize with a very small value.
    let biggestArray = null;
  
    for (const [name, array] of data.lists) {
      const lastValue = array[array.length - 1];
      if (lastValue > biggest) {
        biggest = lastValue;
        biggestArray = array;
      }
    }
  
    if (biggestArray) {
      biggestArray.pop(); // Remove the biggest element from the array.
    }
  
    return biggest;
  }
  
  // Push the biggest elements into the result array.

  // Only edit above
  
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
   
    
    console.log(result)
  
