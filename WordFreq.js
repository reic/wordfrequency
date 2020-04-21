module.exports = {
   // 輸入資料整理
   // var dataToArrObj=(arr,tmp=[])=>{arr.forEach(item=>{inner=item.split('\t');tmp.push({name:inner[0],value:inner.slice(1,).join('\t')})});return tmp;}
   dataToArrObj: function(arr, res = []) { 
      arr.forEach(function(item) { 
         inner = item.split('\t');
         res.push({ name: inner[0], value: inner.slice(1).join('\t') }) 
      });
         return res; 
      },

   // 多欄變單欄
   // var colsTocol=(arr,tmp=[])=>{arr.forEach(item=>tmp=tmp.concat(item.split('\t')));return tmp;}
   colsTocol: function(arr, res = []) { 
      arr.forEach(function(item){
         res = res.concat(item.split('\t'))
      }); 
      return res; },
   // 詞頻計算 function
   // var Counting=(arr,res=[])=>{arr.forEach(item=>{
   Counting: function(arr, res = []) {
      arr.forEach(function(item) {
         if (item.length == 0) return;
         if ((keywordIndex = res.findIndex(res => res.name == item)) == -1) { 
            res.push({ name: item, value: 1 });
            return;
         };
         res[keywordIndex].value++;
      });
      return res;
   },

   // 輸出資料 formating function
   // var output=(arr,outputstring='')=>{arr.forEach(item=>(outputstring+=item.value+"\t"+item.name+"\n"));return outputstring;}
   output: function (arr, outputstring = '') {
      arr.forEach(function (item){
         outputstring += item.value + "\t" + item.name + "\n";
         }); 
      return outputstring;
   },


   // 將檔案讀入資料，轉為雙詞資料
   // var Arraytwkeyword=(arr,tmp=[])=>{for (i=0;i<arr.length-1;i++) {
   Arraytwkeyword: function(arr, res = []) {
      for (i = 0; i < arr.length - 1; i++) {
         for (j = i + 1; j < arr.length; j++) {
            res.push(arr[i] + ", " + arr[j])
         }
      }
      return res;
   },
   // refarr [{name:'參考值",value:1}]   sce['條目']
   // refarr 是參考資料全資料集， sce 情境的條目
   getkeyword: function(refarr, sce, res = []) {
      refarr.forEach(item => {
         sce.includes(item.name) ? res.push(item.value) : '';
      })
      return res;
   }
};  