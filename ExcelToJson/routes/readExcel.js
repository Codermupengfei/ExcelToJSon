/**
 * 读取excel文件的内容，并存储到Object对象中
 * @param filename 文件名
 *@param tableHead 表头
 */
//加载node-xlsx所需包
var xlsx = require('node-xlsx');
//加载文件读取包
var fs = require('fs');
/**
 * 表头初始化
 */
function readExcel(fileName, tableHead,JsonName) {
    var obj = xlsx.parse(fileName);//配置excel文件的路径

    var excelObj=obj[0].data;//excelObj是excel文件里第一个sheet文档的数据，obj[i].data表示excel文件第i+1个sheet文档的全部内容
    var data = [];//存储的数据
    for (var i = 0; i < excelObj.length; i++)
    {
        var value=excelObj[i];
        for (var j = 0; j < value.length; j++)
        {
            //处理excel表格中的空数据和脏数据
            if (value[j]== undefined || value[j] == ','||value[j]=="")
            {
                value[j]=null;
            }
        }
    }
    var i=0;
    //由于表格内容中表头一般都小于5但是表格中内容都大于5所以用长度为5去判断是否为表头，如果为表头，则跳过表头同时跳过表的第一格（说明）
    //可根据实际情况调整length大小
    if(excelObj[i].length<5){
        i=2;
    }else {//如果没有表头说明的情况下，把表的第一行说明跳过，如果不需要跳过，则此处i改为0即可
        i=1;
    }
    //判断如果是表的说明则进行i++
    //因为每个表的第一个说明都是编号信息，所以用编号模糊匹配可以判断是否为表的说明
    if(typeof excelObj[i][0]!="number"==true) {
        if (excelObj[i][0] != null && excelObj[i][0].indexOf('号')>0) {
            i++;
        }
    }
    for( i=i;i<excelObj.length;i++){
        var arr=[];
        var key=[];
        var excelObject=new Object();//Excel对象
        var value=excelObj[i];
        var j=0;
        var k=0;//表头下标
        while(value[j]==null)//过滤excel前的空格
            j++;
        for(j=j;j<value.length;j++){
            excelObject[tableHead[k++]]=value[j];

        }
        //若还有null的数据为存入data，进行存入
        while(k<tableHead.length){
            excelObject[tableHead[k++]]=null;
        }
      data.push(excelObject);
    }

     console.log(data);
    //将对象转化为字符串
    writeFile(JsonName,JSON.stringify(data));
}
//将读取数据写入JSON文件
function writeFile(fileName,data)
{
    //写入文件
    fs.writeFile(fileName,data,'utf-8',complete);
    function complete(err)
    {
        if(!err)
        {
            console.log("文件生成成功");
        }
    }
}
exports.writeFile=writeFile;
exports.readExcel=readExcel;