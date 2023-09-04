export function doUnion(arr1, arr2){
  const filteredArr1 = arr1.filter(item => !arr2.includes(item));
  
  const unionArray = [...filteredArr1];
  return unionArray;
}