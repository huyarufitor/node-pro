'use strict';
let _ = require('lodash');
let xlsxrd = require('node-xlsx');
let excelFilePath = './officeNew.xlsx';

let list = xlsxrd.parse(excelFilePath);

let data = list[0].data;
let result =[];
_.forEach(data.slice(0),(d)=>{
    result.push({name:d[0],age:d[1]});
})
console.log('原始数据:', JSON.stringify(list));

console.log('转换后数据:', JSON.stringify(result));