/**
 * Created by pengfei.mu on 2017/3/17.
 * 质量信息台账 第五个表格
 * 2016年4月厂外（电机）质量信息处理台账
 */
var read=require("./readExcel.js");
var pathName="../resource/test7.xls";
var tableHead=[];//表头信息
//序号
tableHead.push("Number");
//信息编号
tableHead.push("reportNumber");
//配属局段
tableHead.push("belongSection");
//产品寿命阶段
tableHead.push("proLifeStage");
//检修地点
tableHead.push("overhaulLocation");
//发现时间
tableHead.push("findTime");
//产品型号
tableHead.push("proType");
//产品编号
tableHead.push("proNumber");
//数量
tableHead.push("number");
//出厂日期
tableHead.push("produceTime");
//最近检修出厂日期
tableHead.push("checkTime");
//机车编号
tableHead.push("carNum");
//总运行里程
tableHead.push("runKm");
//检修后运行里程
tableHead.push("checkRunKm");
//故障部位
tableHead.push("faultPart");
//故障描述
tableHead.push("faultDescrib");
//处理结果
tableHead.push("solveResult");
//处理方式
tableHead.push("solveWay");
//现场故障处理完成日期
tableHead.push("faultAccomTime");
//事故类别
tableHead.push("accientCategory");
//严重度
tableHead.push("severity");
//责任初判
tableHead.push("responsibilityJudge");
//供应商
tableHead.push("supplier");
//备注
tableHead.push("remarks");
/**
 * 初始化完毕
 * */
read.readExcel(pathName,tableHead,"FirstTable7.json");