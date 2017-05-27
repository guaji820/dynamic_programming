function ArrayList(){
    var array = []

    this.insert = function(ele){
        array.push(ele)
    }
    this.toString = function(){
        return array.join(' ')
    }
    /*
    冒泡排序
    */
    this.bubbleSort = function(){
        var length = array.length
        for(var i=0;i<length-1;i++){
            for(var j=0;j<length-i-1;j++){
                if(array[j]>array[j+1]){
                    /*
                    交换算法
                    3种不用中间量的方式
                    1 算术运算 array[j] = array[j+1] + array[j]
                            array[j+1] = array[j] - array[j+1]
                            array[j] = array[j] - array[j+1]
                    2 位运算
                        a = a^b
                        b = a^b
                        a = a^b
                    3 栈操作
                        stack.push(a)
                        stack.push(b)
                        a = stack.pop()
                        b = stack.pop()
                    */
                    var temp = array[j+1]
                    array[j+1] = array[j]
                    array[j] = temp
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
al.bubbleSort()
console.log(al.toString())