export function doUnion(arr1, arr2){
  const filteredArr1 = arr1.filter(item => !arr2.includes(item));
  const filteredArr2 = arr2.filter(item => !arr1.includes(item));
  
  const unionArray = [...filteredArr1, ...filteredArr2];
  return unionArray;
}