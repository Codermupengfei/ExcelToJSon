/**
 * Created by pengfei.mu on 2017/3/15.
 * 质量信息台账 第一个表格
 * 2016年厂外（电器）质量信息处理台帐
 */
var read=require("./readExcel.js");
var pathName="../resource/test.xlsx";
var tableHead=[];//表头信息
/**
 * 表头初始化
 */
//报告编号
tableHead.push("reportNumber");
//发现地点、铁路
tableHead.push("findLocation");
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
//处理方式及解决问题
tableHead.push("solveResult");
//故障初判
tableHead.push("faultJudge");
//备注
tableHead.push("remarks");
/**
 * 初始化完毕
 * */
//调用excel读取文件
read.readExcel(pathName,tableHead,"FirstTable1.json");