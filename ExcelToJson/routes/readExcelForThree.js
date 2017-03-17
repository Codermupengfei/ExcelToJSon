/**
 * Created by pengfei.mu on 2017/3/17.
 * 第三个表格特殊处理类
 *@param filename 文件名
 *@param tableHead 表头
 */
//加载node-xlsx所需包
var xlsx = require('node-xlsx');
//加载文件读取包
var fs = require('fs');
var row;//记录行
var col=-1;//记录列
var max_col=0;//最大记录列
function readExcel(fileName,tableHead,JsonName) {
    var obj = xlsx.parse(fileName);//配置excel文件的路径

    var excelObj = obj[0].data;//excelObj是excel文件里第一个sheet文档的数据，obj[i].data表示excel文件第i+1个sheet文档的全部内容
    var data = [];//存储的数据
    for (var i = 0; i < excelObj.length; i++) {
        var value = excelObj[i];
        for (var j = 0; j < value.length; j++) {
            //处理excel表格中的空数据和脏数据
            if (value[j] == undefined || value[j] == ',' || value[j] == "") {
                value[j] = null;
            }
        }
    }
    var i = 0;
    //由于表格内容中表头一般都小于5但是表格中内容都大于5所以用长度为5去判断是否为表头，如果为表头，则跳过表头同时跳过表的第一格（说明）
    //可根据实际情况调整length大小
    if (excelObj[i].length < 5) {
        i = 2;
    } else {//如果没有表头说明的情况下，把表的第一行说明跳过，如果不需要跳过，则此处i改为0即可
        i = 1;
    }
    //判断如果是表的说明则进行i++
    //因为每个表的第一个说明都是编号信息，所以用编号模糊匹配可以判断是否为表的说明
    if (typeof excelObj[i][0] != "number" == true) {
        if (excelObj[i][0] != null && excelObj[i][0].indexOf('号') > 0) {
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

        var joinString="";//连接后的字符串
        while(value[j]==null)//过滤excel前的空格
            j++;
        //如果第一行不为0 则代表前面有空格 为了防止是表格漂移导致的不为0的情况，再判断一是否上一列小于下一列，如果小于则为合并单元格
        if(j!=0&&excelObj[i].length<excelObj[i+1].length&&i+1<excelObj.length)
        {
            row=i;//将当前行赋予row
            col=j;//将当前有值的列赋值给col以便记录
            max_col=excelObj[i].length;//最后一个有值元素的位置
            continue;
        }

        for(j=j;j<=value.length-1;j++){
            if(j==col&&col!=-1){
                for(j;j<max_col;j++){
                    joinString+=excelObj[row][j]+":"+value[j]+",";//对列中的字符串进行拼接
                }
                value[--j]=joinString;

            }
            excelObject[tableHead[k]]=value[j];
           console.log(i+"行"+j+"列"+value[j]+" "+tableHead[k]);
            k++;

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