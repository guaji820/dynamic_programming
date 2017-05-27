function ArrayList(){
    var array = []

    this.insert = function(ele){
        array.push(ele)
    }
    this.toString = function(){
        return array.join(' ')
    }
    /*
    插入排序
    */
    this.insertSort = function(){
        var length = array.length
        for(var i=0;i<length-1;i++){
            for(var j=i+1;j>=1;j--){
                if(array[j]<array[j-1]){
                    var temp = array[j]
                    array[j] = array[j-1]
                    array[j-1] = temp
                }
            }
        }
    }
}

var al = new ArrayList()
al.insert(3)
al.insert(1)
al.insert(7)
al.insert(4)
al.insert(2)
al.insertSort()
console.log(al.toString())