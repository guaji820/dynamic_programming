/*
二叉搜索树
*/
function BinarySearchTree(){
    var Node = function(key){
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null
    /*
    插入某个key
    */
    this.insert = function(key){
        var newNode = new Node(key)
        if(root === null){
            root = newNode
        }else{
            insertNode(root,newNode)
        }
    }
    var insertNode = function(node,newNode){
        if(newNode.key<node.key){
            if(node.left === null){
                node.left = newNode
            }else{
                insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                insertNode(node.right,newNode)
            }
        }
    }
    /*
    搜索某个key
    */
    this.search = function(key){
        return searchNode(root,key)
    }
    var searchNode = function(node,key){
        if(node === null){
            return false
        }
        if(node.key>key){
            return searchNode(node.left,key)
        }else if(node.key<key){
            return searchNode(node.right,key)
        }else{
            return true
        }
    }
    /*
    中序遍历
    */
    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root,callback)
    }
    var inOrderTraverseNode = function(node,callback){
        if(node !== null){
            inOrderTraverseNode(node.left,callback)
            callback(node.key)
            inOrderTraverseNode(node.right,callback)
        }
    }
    /*
    先序遍历
    */
    this.preOrderTraverse = function(){
        preOrderTraverseNode(root,callback)
    }
    var preOrderTraverseNode = function(node,callback){
        if(node !== null){
            callback(node.key)
            preOrderTraverseNode(node.left,callback)
            preOrderTraverseNode(node.right,callback)
        }
    }
    /*
    后序遍历
    */
    this.postOrderTraverse = function(){
        postOrderTraverseNode(root,callback)
    }
    var postOrderTraverseNode = function(node,callback){
        if(node !== null){
            postOrderTraverseNode(node.left,callback)
            postOrderTraverseNode(node.right,callback)
            callback(node.key)
        }
    }
    /*
    最小值
    */
    this.min = function(){
        return minNode(root)
    }
    var minNode = function(node){
        if(node){
            while(node && node.left !== null){
                node = node.left
            }
            return node.key
        }
        return null
    }
    /*
    最大值
    */
    this.max = function(){
        return maxNode(root)
    }
    var maxNode = function(node){
        if(node){
            while(node && node.right !== null){
                node = node.right
            }
            return node.key
        }
        return null
    }
    /*
    删除指定key
    */
    var findMinNode = function(node){
        if(node){
            while(node && node.left !== null){
                node = node.left
            }
            return node
        }
        return null
    }
    this.remove = function(key){
        root = removeNode(root,key)
    }
    var removeNode = function(node,key){
        if(node === null){
            return null
        }
        if(key<node.key){
            node.left = removeNode(node.left,key)
            return node.left
        }else if(key>node.key){
            node.right = removeNode(node.right,key)
            return node.right
        }else{
            //等于的时候还要分三种情况
            /*
            1 这个节点下面没有节点
            2 这个节点下面还有一个节点
            3 这个节点下面有两个节点
            */
            if(node.left === null && node.right === null){
                node = null
                return node
            }
            if(node.left === null){
                node = node.right
                return node
            }else if(node.right === null){
                node = node.left
                return node
            }

            var aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right,aux.key)
            return node

        }
    }
}

module.exports = {
    BinarySearchTree,
}