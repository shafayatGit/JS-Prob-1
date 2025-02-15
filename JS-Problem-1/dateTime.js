let today = new Date()
console.log(today)


//Specific date: year , month(index), day(Index)
let specificDate = new Date(2026 , 0, 10)
console.log(specificDate)

specificDate.setMonth(10) // name.set dile onekkichu set kora jabe
console.log(specificDate)

specificDate.setDate(27) //day and month 1 kom cz egula index 
console.log(specificDate)


console.log(specificDate.toLocaleDateString('en-GB')) //en-GB mane Great britain system jeta bd te use hoy but normally usa er system month/date/year thake
