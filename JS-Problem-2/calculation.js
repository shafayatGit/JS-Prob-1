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


