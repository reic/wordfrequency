var fs=require('fs')
var wq=require('./WordFreq')
var inputfile=['韌性','智慧','產業','活力'];

for (f=0;f<inputfile.length;f++)
{

var Scein=fs.readFileSync('./'+inputfile[f]+'_input.txt').toString().split("\r\n");
var Allin=fs.readFileSync('./All_input.txt').toString().split("\r\n");

// var DataArrObj=dataToArrObj(Allin);
var DataArrObj=wq.dataToArrObj(Allin);

// console.log(DataArrObj[0]);
// refarr 是參考資料全資料集， sce 情境的條目
var getkeyword=(refarr,sce,res=[])=>{
    refarr.forEach(item=>{
        sce.includes(item.name)?res.push(item.value):'';
    })
    return res;
}
var scekey=getkeyword(DataArrObj,Scein)
// Scein.forEach(function(item,index){
//     if(keywordIndex=DataArrObj.findIndex(res=>res.name==item)==-1) console.log(item)
// })
keywordCounts=wq.Counting(wq.colsTocol(scekey))
keywordCounts.sort((a,b)=> b.value-a.value)
console.log(inputfile[f],"\t輸入:",Scein.length,"\t輸出:",scekey.length)
//單詞計算寫檔
fs.writeFileSync('./'+inputfile[f]+'_output.txt',wq.output(keywordCounts));
}
console.log("Program End")