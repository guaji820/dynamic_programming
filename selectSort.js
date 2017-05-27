function ArrayList(){
    var array = []

    this.insert = function(ele){
        array.push(ele)
    }
    this.toString = function(){
        return array.join(' ')
    }
    /*
    选择排序
    */
    this.selectSort = function(){
        var l = array.length
        for(var i=0;i<l-1;i++){
            var min = i;
            for(var j=i+1;j<l;j++){
                if(array[j]<array[min]){
                    min = j
                }
            }
            if(min !== i){
                var temp = array[min]
                array[min] = array[i]
                array[i] = temp
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
al.selectSort()
console.log(al.toString())