function maxThree (a, b, c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c ){
        return b;
    }
    return c;
}

let max = maxThree(10, 40, 30)
console.log('Max of these three:', max)



//Max from an Array
// Process: 1st number nibo than porertar sathe compare korbo then jeta boro shetake set korbo. Then porer gular sathe abr compare korbo.   


function maxArray(array){
    let max = array[0] // jei variable e set korbo sheta loop er baire dhorte hobe and array index hishabe dhorte hobe 
    for(let arr of array){
        if(arr>max){
            max=arr;
        }
    }
    return max
}
let max_2 = maxArray([5, 13, 11, 18, 55])
console.log(max_2)



//Cheapest price
function cheapest(array){
    let min = array[0];
    for(let arr of array){
        if(arr<min){
            min=arr;
        }
    }
    return min;
}
let lowest = cheapest([5, 50, 34, 1, 11]);
console.log(lowest)


//Cheapest from object
let mobiles =[
    {brand: 'Samsung', OS: 'samsu OS',model: 'Samsung 22 Ultra', price: 50000},
    {brand: 'Iphone', OS: 'IOS',model: 'Iphone 13 pro' ,price: 60000},
    {brand: 'OPPO', OS: 'OppoOS',model: 'Oppo reno', price: 32000},
    {brand: 'Vivo', OS: 'VivoOS',model: 'Vivo X100pro', price: 80000},
]

function getCheapestPhone(mobiles){
    let min = mobiles[0]
    for(let mobile of mobiles ){
        if(mobile.price<min.price){
            min = mobile;
        }
    }
    return min
}
let cheapOne= getCheapestPhone(mobiles);
console.log(cheapOne)