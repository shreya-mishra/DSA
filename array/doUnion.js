export function doUnion(arr1, arr2){
  const unionArray = [...arr1];
  
  for (const item of arr2) {
    if (!arr1.includes(item)) {
      unionArray.push(item);
    }
  }
  
  return unionArray;
}

// remove duplicated values in first arr, then iterate 2nd array and check if that item is there in set array or notif no, then push to unionArr and add the same item in set
export function optimizedDoUnion(arr1, arr2){
   let map = {};
   // Remove the duplicates from arr1[]
   for (let i = 0; i < arr1.length; i++) {
       if (arr1[i] in map) {
           map[arr1[i]] += 1;
       } else {
           map[arr1[i]] = 1;
       }
   }

   // Remove duplicates from arr2[]
   for (let i = 0; i < arr2.length; i++) {
       if (arr2[i] in map) {
           map[arr2[i]] += 1;
       } else {
           map[arr2[i]] = 1;
       }
   }

   // Loading set to list
   let uni = Object.keys(map);

   return uni;
 }