var fs=require('fs')
var wf=require('../WordFreq')

var fname='example/sample_input.txt',    ftextArr, fcellArr;
var keywordCounts=[], keywordPairArr=[],wordRelation=[];


ftextArr=fs.readFileSync('example/sample_input.txt').toString().split('\r\n');
fcellArr=wf.colsTocol(ftextArr);

// 完成單詞出現計算
keywordCounts=wf.Counting(fcellArr);
console.log(keywordCounts);

// 計算共現性
console.log(keywordPairArr=wf.wordRelation(ftextArr));
wordRelation=wf.Counting(keywordPairArr);
console.log(wordRelation);

