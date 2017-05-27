//分治法排序
function ArrayList(){
    var array = []

    this.insert = function(ele){
        array.push(ele)
    }
    this.toString = function(){
        return array.join(' ')
    }
    /*
    1 归并法 
    */
    this.mergeSort = function(){
        array = mergeSortRec(array)
    }
    var mergeSortRec = function(array){
        if(!(array instanceof Array)){
            return null
        }
        if(array.length === 1){
            return array
        }
        var l = array.slice(0,Math.floor(array.length/2))
        var r = array.slice(Math.floor(array.length/2),array.length)

        return merge(mergeSortRec(l),mergeSortRec(r))
    }
    var merge = function(left,right){
        var result = [],
            il = 0,
            ir = 0
        while(il<left.length && ir<right.length){
            if(left[il]<right[ir]){
                result.push(left[il++])
            }else{
                result.push(right[ir++])
            }
        }
        while(il<left.length){
            result.push(left[il++])
        }
        while(ir<right.length){
            result.push(right[ir++])
        }
        return result
    }

    /*
    2 快速排序法
    */    
    this.quickSort = function(){
        quick(array,0,array.length-1)
    }

    var quick = function(array,left,right){
        var index
        if(array.length>1){
            index = partition(array,left,right)
            if(left<index-1){
                quick(array,left,index-1)
            }
            if(index<right){
                quick(array,index,right)
            }
        }
    }

    var partition = function(array,left,right){
        var pivot = array[Math.floor((right+left)/2)],
            i = left,
            j = right
        while(i<=j){
            while(array[i]<pivot){
                i++
            }
            while(array[j]>pivot){
                j--
            }
            if(i<=j){
                swap(array,i,j)
                i++
                j--
            }
        }
        return i
    }
    
    var swap = function(array,index1,index2){
        var temp = array[index1]
        array[index1] = array[index2]
        array[index2] = temp
    }
}

var al = new ArrayList()
al.insert(3)
al.insert(1)
al.insert(7)
al.insert(4)
al.insert(2)
// al.mergeSort()
al.quickSort()
console.log(al.toString())