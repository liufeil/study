// 实现intToHex
//
// @author liufeil
// @createdate 2022/4/8 

function intToHex(num){
  // if(num < 0){
  //   num = -num;
  //   return '-' + judge(num);
  // }else{
  //   return judge(num);
  // }
  return num<0?'-'+judge(-num):judge(num);
}
console.log(intToHex(128));
console.log(intToHex(-128));
console.log(intToHex(13324));
console.log(intToHex(-324));
console.log(intToHex(-12345));
console.log(intToHex(-392498));
console.log(intToHex(297427494));


function judge(num){
  let remainder = 0;
  let str = '';
  while(num){
    remainder = num%16;
    num = parseInt(num/16);
    switch(remainder){
      case 10 : 
        str += 'a';
        break;
      case 11 : 
        str += 'b';
        break;
      case 12 : 
        str += 'c';
        break;
      case 13 : 
        str += 'd';
        break;
      case 14 : 
        str += 'e';
        break;
      case 15 : 
        str += 'f';
        break;
      default:
        str += remainder;
        break;
    }
  }
  newstr = str.split('').reverse().join('');
  // let len = str.length;
  // let newstr = '';
  // for(let i = len-1;i>=0;i--){
  //   newstr += str[i];
  // }
  return newstr;
}