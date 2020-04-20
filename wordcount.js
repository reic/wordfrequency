var fs =require('fs');
// 讀入檔案，將每一行存在一個陣列中
var datainfile=fs.readFileSync('./input.txt').toString().split("\r\n");
var keywordAll=[];
var keywordCounts=[];

// 將每行 tab 分隔的文字再切割成矩陣，並運用 concat 和 keywordAll 連結
// datainfile.forEach(function(item){ let txt=item.split('\t').forEach(innerItem=>keywordAll.push(innerItem))});
datainfile.forEach(item=>keywordAll=keywordAll.concat(item.split('\t')));

// 多欄變單欄
var colsTocol=(arr,tmp=[])=>{arr.forEach(item=>tmp=tmp.concat(item.split('\t')));return tmp;}
// 詞頻計算 function
var Counting=(arr,res=[])=>{arr.forEach(item=>{
		if (item.length==0) return;
		if ((keywordIndex = res.findIndex(res=>res.name == item)) == -1) { res.push({ name: item, value: 1 }); return }
		res[keywordIndex].value++;});
	return res}

// 輸出資料 formating function
var output=(arr,outputstring='')=>{arr.forEach(item=>(outputstring+=item.value+"\t"+item.name+"\n"));return outputstring;}

keywordCounts=Counting(keywordAll)
keywordCounts.sort((a,b)=> b.value-a.value)

//單詞計算寫檔
fs.writeFileSync('./output.txt',output(keywordCounts));

// 將檔案讀入資料，轉為雙詞資料
var Arraytwkeyword=(arr,tmp=[])=>{for (i=0;i<arr.length-1;i++) {
       for(j=i+1;j<arr.length;j++)
       {
        tmp.push(arr[i]+", "+arr[j])
       }}
	return tmp;}

var keywordTwo=[];
datainfile.forEach(item=>{keywordTwo=keywordTwo.concat(Arraytwkeyword(item.split('\t').sort()))});
keywordTwoCounts=Counting(keywordTwo)
keywordTwoCounts.sort((a,b)=>b.value-a.value)

// 雙詞計算寫檔
fs.writeFileSync('./output2.txt',output(keywordTwoCounts));
// 告訴你執行完了
console.log("Program End")
