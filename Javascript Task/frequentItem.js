function findMostFrequentItem(arr) {
    const freqMap = {};
    let maxCount = 0;
    let mostFrequentItem;
  
    for (const item of arr) {
      if (freqMap[item]) {
        freqMap[item]++;
      } else {
        freqMap[item] = 1;
      }
  
      if (freqMap[item] > maxCount) {
        maxCount = freqMap[item];
        mostFrequentItem = item;
      }
    }
  
    return `${mostFrequentItem} ( ${maxCount} times )`;
  }
  
  // Sample array
  var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  
  // Output
  console.log(findMostFrequentItem(arr1)); // Output: a ( 5 times )
  