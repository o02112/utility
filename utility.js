var utility = {};

 /* 
  userage:
  date format like '2017-01-01 09:00:00'
  d = new Date();
  var year = d.getFullYear();
  var month = utility.preZero(d.getMonth()+1);
  
  */
 
utility.preZero = function (num, length){
    length = length || 2;
    num = num +'';
    var str = '';
    if(num.length < length) {
        for(var i=0;i<(length-num.length); i++){
            str += '0';
        }
    }
    return str + num;
}


module.exports = utility;
