/**
 * Chair: 3 CTF
 * Table: 8 CFT
 * Bed: 20 CTF
*/

function woodQuantity(chair, table, bed){
    let total = chair*3 + table*8 + bed*20;
    return total;
}
let totalWood = woodQuantity(2, 4, 1)
console.log('Total wood needed:',totalWood, 'CFT')


/**
 * Shirt: 450;
 * Pant: 900;
 * Shoe: 1600; 
 * */ 

function quantity(shirt, pant , shoe){
    let totalPrice = shirt*450 + pant*900 + shoe*1600;
    return totalPrice;
}
let totalPrice = quantity(3,1,1);
console.log(totalPrice)


//Shopping cart 
let products = [
    {name: 'Shampoo', Brand:'Dove', price: 700, quantity:3},
    {name: 'Conditioner', Brand:'Dove', price: 1500, quantity:2},
    {name: 'Soap', Brand:'Dove', price: 500, quantity:4},
]

function shoppingTotal(item){
    let sum  = 0;
    for(let item of products){
        sum = sum+ (item.price * item.quantity);
    }
    return sum;
}
let productsPrice = shoppingTotal(products);
console.log(productsPrice)



//Layered-Discount
function totalDiscount (quantity){
    let first100 = 100;
    let second100 = 90;
    let above200 = 70;

    if(quantity <= 100){
        let total = quantity * first100;
        return total;
    }
    else if(quantity<=200){
        let after100 = (quantity-100)* 90;
        let first100 = 100* 100;
        let total = first100 + after100;
        return total; 
    }
    else{
        
        
        let first100 = 100 * 100;
        let after100 =100 * 90;
        let after200 = (quantity - 200)*70;
        let total = after100 + first100 + after200;
        return total;
    }
}

let discountedPriceTotal= totalDiscount(230);
console.log(discountedPriceTotal);
