/*
最少硬币找零问题
给出要找零的钱数，以及可用的硬币面额d1,d2.....dn及其数量,找到所需的最少的硬币个数
*/
function MinCoinChange(coins){
    var coins = coins
    var cache = {}//缓存从1到某个数字的最少硬币数组合

    /*
     * 该方法用于 获取某个 数字的 最少硬币组合
     * @param amount int 指定数字
     */
    this.makeChange = function(amount){
        var that = this
        if(!amount){
            return []
        }
        if(cache[amount]){//如果在缓存中已经存在，则直接拿取
            return cache[amount]
        }
        //min 某个数字的最小组合数组
        //newMin 除去当前coin，剩下newAmount的最小组合
        //newAmount 递归用到的最小组合
        var min = [],newMin,newAmount
        for(var i=0;i<coins.length;i++){
            var coin = coins[i]
            newAmount = amount - coin
            if(newAmount >= 0){
                newMin = that.makeChange(newAmount)
            }
            //3个条件
            //1 newAmount正常值
            //2 newMin是更小的组合或者min还不存在
            //3 newMin的长度为正常值或者newAmount为0
            if(newAmount>=0&&
            (newMin.length<min.length-1 || !min.length)&&
            (newMin.length || !newAmount)){
                min = [coin].concat(newMin)
                console.log('new Min' + min + 'for' + amount)
            }
        }
        return (cache[amount] = min)//拿到这个amount的最小组合并且存入cache缓存
    }
}

var a1 = new MinCoinChange([1,5,10,25])
console.log(a1.makeChange(36))
