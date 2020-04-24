var fs=require('fs')
var wf=require('../WordFreq')

var fname='example/sample_input.txt',    ftextArr, fcellArr;
var keywordCounts=[], keywordPairArr=[],wordRelation=[];


ftextArr=fs.readFileSync('example/sample_input.txt').toString().split('\r\n');
fcellArr=wf.colsTocol(ftextArr);

// 完成單詞出現計算
keywordCounts=wf.Counting(fcellArr);
console.log(keywordCounts);
outstring=wf.outputObj(keywordCounts)
fs.writeFileSync('example/keyword.csv',outstring)

// 計算共現性
console.log(keywordPairArr=wf.wordRelation(ftextArr));
wordRelation=wf.Counting(keywordPairArr);
console.log(wordRelation);

outstring=wf.outputObj(wordRelation)
fs.writeFileSync('example/wordrelation.csv',outstring)
