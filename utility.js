var utility = {};

 /* 2017.01.11
  userage:
  date format string like '2017-01-01 09:00:00' (new Date().toLocaleString())
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

// 2017.01.12
utility.downloadData = function (data){
 /*
  // data is a csv format text 
  // run this function it would be download a csv file
  // with the data's value
  // , could be replaced by ;
  data = 
   '"row1col1",\n'
   +'"row2col1","row2col2",\n'
   +'"row3col1", "row3col2", "row3col3",\n'
   ...
 */
    data = encodeURIComponent(data);
 
    var dateStr = new Date().toJSON();

    var a = document.createElement('a');
    a.download = dateStr+'.csv';
    a.href = "data:text/csv;charset=utf-8,"+data;
    document.body.append(a);
    a.click();
    a.remove();
}

module.exports = utility;
