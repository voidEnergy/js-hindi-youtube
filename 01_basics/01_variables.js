const accountId = 144553
let accountEmail = "voidEnergy@google.com"
var accountPassword = "12345"
accountCity = "Jamshedpur"

// accountId = 2

accountEmail = "rr@rr.com"
accountPassword = "212121"
accountCity = "Bengaluru"
let accountState;


console.log(accountId);

/*
Prefer not to use var because of issue
in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])