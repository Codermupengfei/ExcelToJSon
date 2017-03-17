/**
 * Created by pengfei.mu on 2017/3/17.
 * 质量信息台账
 * 新八轴牵引模块返厂修台账
 */
var read=require("./readExcelForThree.js");
var pathName="../resource/test3.xls";
var tableHead=[];//表头信息
//序号
tableHead.push("Number");
//登记日期
tableHead.push("registerTime");
//接收日期
tableHead.push("receiveTime");
//故障日期
tableHead.push("faultTime");
//故障发生地点
tableHead.push("faultLocation");
//模块型号
tableHead.push("proType");
//模块编号
tableHead.push("proNumber");
//修理次数
tableHead.push("repairTimes");
//模块版本
tableHead.push("moduleVersion");
//机车编号
tableHead.push("carNum");
//总运行里程
tableHead.push("runKm");
//厂外故障
tableHead.push("outFault");
//故障状态
tableHead.push("faultStatus");
//原因分析
tableHead.push("reasonAnaly");
//故障处理
tableHead.push("solveResult");
//故障部件厂家及版本
tableHead.push("faultPart");
//故障配件序列号(位置）
tableHead.push("faultLocationNumber")
//故障IGBT数量
tableHead.push("igbtNumber");
//是否存在隐患部件改制
tableHead.push("existPart");
//服务订单号
tableHead.push("serviceOrder");
//业务书编号
tableHead.push("bussinessNumber");
//备注
tableHead.push("remarks");
/**
 * 初始化完毕
 * */

//调用excel读取文件
read.readExcel(pathName,tableHead,"FirstTable3.json");