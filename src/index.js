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

    for (var key in coins) {
        var n = Math.floor(amount / coins[key]);
        if (n > 0) { 
            result[key] = n; 
            amount -= n * coins[key]; 
        }
    }

    return result;
}
