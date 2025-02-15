
//that will be divisible by 4 and not divisible by 100
//OR divisible by 400
function leapYear( year ){
    if((year%4===0 && year%100 !==0) || (year%400===0)){
        return "Leap year";
    }
    return 'Not a leap year'
}
let isLeapYear = leapYear(1900);
console.log(isLeapYear)


//OddAverage
function array (array){
    let oddArray = []
    for(let odd of array){
        
        if(odd%2===1){
            oddArray.push(odd)
        }
    }

    let sum = 0;
    for( let arr of oddArray){
        
        sum = sum + arr;
        
    }
    let avg = sum / oddArray.length;
    return avg;
}
let avg = array ([2, 5, 7, 9, 12, 13, 15]);
console.log(avg)


//TOPIC-------> JS Math
let min = Math.min(23, 33, 66, 1, 4)
console.log(min)

let max = Math.max(23, 33, 66, 1, 4)
console.log(max)


//Absolute used like modulus(||) mane negative thakleo positive kore dibe
let abs = Math.abs(-99)
console.log(abs)
let abs_2 = Math.abs(5-10)
console.log(abs_2)


//Math Round ------> jodi .5 ba er upore jay tahole ceiling kore ar er choto hoile floor kore
let round = Math.round(2.3)
console.log(round)

//Floor---> Mane nicher INTEGER e convert korbe
//Ceil ---> mane uporer INTEGER e convert korbe


//Random mane 1 er choto fraction random digit dibe
console.log(Math.random()) //0.something always
let rounded = Math.round(Math.random()*10) // eta diye bujhay 1-10 er moddhe rounded INT dekhabo tai (*10)
console.log(rounded)

