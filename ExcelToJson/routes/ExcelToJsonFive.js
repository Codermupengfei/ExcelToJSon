/**
 * Created by pengfei.mu on 2017/3/17.
 * 质量信息台账 第五个表格
 * 用户认可责任的及质保外厂外质量信息表
 */
var read=require("./readExcel.js");
var pathName="../resource/test5.xls";
var tableHead=[];//表头信息
//报告编号
tableHead.push("reportNumber");
//发现地点、铁路
tableHead.push("findLocation");
//产品寿命阶段
tableHead.push("proLifeStage");
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
//处理方式
tableHead.push("solveWay");
//现场故障处理完成日期
tableHead.push("faultAccomTime");
/**
 * 初始化完毕
 * */
//调用excel读取文件
read.readExcel(pathName,tableHead,"FirstTable5.json");