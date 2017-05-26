/*
同最少硬币
贪心算法

当coins进行变化的时候不一定总是正解,比如相差较小
[1,3,4]
amount =6 
正解 为3，3
实际结果为 4，1，1

*/

function MakeChangeCoin(coins){
    var coins = coins

    this.makeChange = function(amount){
        var change = []
        total = 0
        for(var i = coins.length-1;i >= 0;i--){
            var coin = coins[i]
            while(total+coin<=amount){
                change.push(coin)
                total += coin
            }
        }
        return change
    }
}

var mcc = new MakeChangeCoin([1,5,10,25])
console.log(mcc.makeChange(36))
