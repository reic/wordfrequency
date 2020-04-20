var fs =require('fs');
// 讀入檔案，將每一行存在一個陣列中
var datainfile=fs.readFileSync('./input.txt').toString().split("\r\n");
var keywordAll=[];
var keywordCounts=[];

// 將每行 tab 分隔的文字再切割成矩陣，並運用 concat 和 keywordAll 連結
// datainfile.forEach(function(item){ let txt=item.split('\t').forEach(innerItem=>keywordAll.push(innerItem))});
datainfile.forEach(item=>keywordAll=keywordAll.concat(item.split('\t')));
// console.log(keywordAll.slice(0,5))
var outputstring=''
// keywordAll=['環境保護', '智慧農業', '生態永續', '光子晶片', '光子晶片','光子晶片', '光通訊','環境保護']
// keywordAll.forEach(function(item){ 
//     if (item.length==0) return;
//     if ((keywordIndex = keywordCounts.findIndex(keywordCounts=>keywordCounts.name == item)) == -1) { keywordCounts.push({ name: item, value: 1 }); return }
//     keywordCounts[keywordIndex].value++;
// });
var Counting=(arr,res=[])=>{arr.forEach(item=>{
    if (item.length==0) return;
    if ((keywordIndex = res.findIndex(res=>res.name == item)) == -1) { res.push({ name: item, value: 1 }); return }
    res[keywordIndex].value++;
});return res}

keywordCounts=Counting(keywordAll)
keywordCounts.sort((a,b)=> b.value-a.value)
// keywordCounts.forEach(item=>(outputstring+=item.value+"\t"+item.name+"\n"))
var output=(arr,outputstring='')=>{arr.forEach(item=>(outputstring+=item.value+"\t"+item.name+"\n"));return outputstring;}

 fs.writeFileSync('./output.txt',output(keywordCounts));
// console.log(keywordCounts.slice(0,6))
var Arraytwkeyword=(arr)=>{tmp=[]; for (i=0;i<arr.length-1;i++) {
       for(j=i+1;j<arr.length;j++)
       {
        tmp.push(arr[i]+", "+arr[j])
       }}return tmp;}

var keywordTwo=[];
datainfile.forEach(item=>{keywordTwo=keywordTwo.concat(Arraytwkeyword(item.split('\t').sort()))});
keywordTwoCounts=Counting(keywordTwo)
keywordTwoCounts.sort((a,b)=>b.value-a.value)
console.log(keywordTwoCounts.slice(0,9))
 fs.writeFileSync('./output2.txt',output(keywordTwoCounts));

console.log("Program End")
