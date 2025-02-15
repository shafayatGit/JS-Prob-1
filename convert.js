//  Inch in feet
function inchtoFeet (inch){
    let inchFraction = inch / 12;
    let inchInt = parseInt(inchFraction);
    let inchReminder = inch % 12;
    let result= inchInt + 'ft ' + inchReminder + 'inch';
    return result
}
let myHight = inchtoFeet(68);
console.log(myHight);


//Miles to KM ------> 1 mile = 1.6km
function milesToKm(miles){
    let km = miles * 1.6;
    let kmInt = parseInt(km);
    let kmFrac = parseFloat(km);
    let result = kmInt + 'KM ' + kmFrac +"Meter"
    return result;
}
let DhakaToFeni = milesToKm(89)
console.log(DhakaToFeni)