export function doUnion(arr1, arr2){
  const unionArray = [...arr1];
  
  for (const item of arr2) {
    if (!arr1.includes(item)) {
      unionArray.push(item);
    }
  }
  
  return unionArray;
}