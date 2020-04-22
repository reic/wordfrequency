module.exports = {
   // 輸入資料整理
   //   ["aaa\tbbb\tccc\tddd"]=>[{name="aaa",value="bbb\tccc\tddd"}]
   dataToArrObj: function(arr, res = []) { 
      arr.forEach(function(item) { 
         inner = item.split('\t');
         res.push({ name: inner[0], value: inner.slice(1).join('\t') }) 
      });
         return res; 
      },

   // 多欄變單欄
   // ['abc\tabc\tabc\t','cde\tcde\tcdt']=>[abc,abc,abc,cde,cde,cde]
   colsTocol: function(arr, res = []) { 
      arr.forEach(function(item){
         res = res.concat(item.split('\t').map(inner=>inner.trim()))
      }); 
      return res; },

   // 詞頻計算 function
   // ['a','a','b'] = >[{name:'a',value=2},{name:'b',value=1}]
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
   // [{name='aaaa',value=3},{name='bbbb',value=1}]   => string="3\taaaa\n1\tbbbb\n"
   output: function (arr, outputstring = '') {
      arr.forEach(function (item){
         outputstring += item.value + "\t" + item.name + "\n";
         }); 
      return outputstring;
   },


   // 將檔案讀入資料，轉為雙詞資料
   Arraytwkeyword: function(arr, res = []) {
      for (i = 0; i < arr.length - 1; i++) {
         for (j = i + 1; j < arr.length; j++) {
            res.push(arr[i].trim() + ", " + arr[j].trim())
         }
      }
      return res;
   },
   
   // 計算文字關係的函數
   // 輸入的格式為 ["aaa\tbbb\tccc\tddd"] 欄位沒有限定
   wordRelation: function(arr,res=[]){
      arr.forEach(function(item){
         item_extend=item.split('\t').sort()
         let len=item_extend.length,wordPair=[]
         for(i=0;i<len-1;i++){
            for(j=i+1;j<len;j++){
               if(item_extend[i].trim()=='') continue;
               wordPair.push(item_extend[i].trim()+", "+item_extend[j].trim());
            }
         }
         res=res.concat(wordPair);
         })
         return res;
      },
         
   // refarr [{name:'參考值",value:'this is a describe may with symbol \t to separate columns'}]   
   // sce['條目'] 用來和參考值比對，並取得 條目對應的 value ==> like excel vlookup
   // refarr 是參考資料全資料集， sce 情境的條目
   getkeyword: function(refarr, sce, res = []) {
      refarr.forEach(item => {
         sce.includes(item.name) ? res.push(item.value) : '';
      })
      return res;
   }
};  
