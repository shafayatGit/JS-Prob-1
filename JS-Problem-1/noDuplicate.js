

function isDuplicate (array){
    let unique = [];
    for( let arr of array){
        if(unique.includes(arr)===false){
            unique.push(arr)
        }
    }
    return unique
}
let dupli = isDuplicate([2, 3, 5, 7, 2, 5, 9])
console.log(dupli)