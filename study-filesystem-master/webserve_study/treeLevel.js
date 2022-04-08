// 遍历二叉树
//
// @author liufeil
// @createdate 2022/4/8 

function treeLevel(node,level){
  const ret = [];
  if(!node){
    return ret;
  }
  const q = [];
  q.push(node);

  // 对二叉树进行层序遍历
  // 使用队列对每层节点进行操作
  // 将每一层的结果存储在ret数组中

  while(q.length !==0){
    const currentLevelSize = q.length;
    ret.push([]);
    for(let i = 1; i<= currentLevelSize; ++i){
      const node = q.shift();
      ret[ret.length -1].push(node.value);
      if(node.left) q.push(node.left);
      if(node.right) q.push(node.right);
    }
  }

  // 将结果输出
  let len = ret[level-1].length;
  let result = '';
  for(let i = 0; i<len; i++){
    result += ret[level-1][i] + '-';
  }
  return result.slice(0,-1);
}

// 二叉树1
// 树形结构：
//     A
//    / \
//   B   D
//  /\   /\
// G  H  C F

let node1 = {
  value: 'A',
  left: {
      value: 'B',
      left: {
        value: 'G',
        left: null,
        right: null
      },
      right: {
        value: 'H',
        left: null,
        right: null
      }
    },
  right: {
      value: 'D',
      left: {
          value: 'C',
          left: null,
          right: null
      },
      right: {
          value: 'F',
          left: null,
          right: null
      }
  }
}

// 二叉树2
// 树形结构：
  //           A
 //         /     \
  //      B        C 
  //     / \      /  \
  //    D   E     F   G  
  //   /     \   / \   \
  // H        I J   K   L
  //           /     \
  //          M      N
  //         / \
  //        O   P

let node2 = {
  value:'A',
  left:{
    value:'B',
    left:{
      value:'D',
      left:{
        value:'H',
        left:null,
        right:null
      },
      right:null
    },
    right:{
      value:'E',
      left:null,
      right:{
        value:'I',
        left:null,
        right:null
      }
    }
  },
  right:{
    value:'C',
    left:{
      value:'F',
      left:{
        value:'J',
        left:{
          value:'M',
          left:{
            value:'O',
            left:null,
            right:null,
          },
          right:{
            value:'P',
            left:null,
            right:null,
          },
        },
        right:null,
      },
      right:{
        value:'K',
        left:null,
        right:{
          value:'N',
          left:null,
          right:null,
        },
      },
    },
    right:{
      value:'G',
      left:null,
      right:{
        value:'L',
        left:null,
        right:null
      },
    },
  }
}
console.log(treeLevel(node1,2))
console.log(treeLevel(node2,5))
