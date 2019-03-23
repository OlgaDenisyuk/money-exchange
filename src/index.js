// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = { 
        'H': 50,
        'Q': 25,
        'D': 10,
        'N': 5,
        'P': 1
    };
    var result = {};
    var errorString = {error:"You are rich, my friend! We don't have so much coins for exchange"}; 

    for (var key in coins) {
        var n = Math.floor(currency / coins[key]);
        if (n > 0) { 
            result[key] = n; 
            currency -= n * coins[key]; 
        }
    }

   
    if(currency > 10000){ 
       return errorString;
    } else { return result;}
}
