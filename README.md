# WordFreq 模組

做 TAB 分隔的詞頻計算，可以計算單詞的數量，雙詞共現的關係，使用的方法為
```javascript
var wf=require('./WordFreq')
```

# 計算 檔案內的詞頻

* 單詞頻計算，用於生成 Tag Cloud
* 雙詞頻計算，用於 Social Network Analysis Plot
* getkeyword 為類似 excel vlookup 的方法，請自行試用

# module 方法介紹

* dataToArrObj: 資料整理，將用 tab 分隔的資料轉換為，第一欄為 name 的索引。 可做為類似 Excel vlookup 的檢索匹配用  ["aaa\tbbb\tccc\tddd"]=>[{name="aaa",value="bbb\tccc\tddd"}]
* getkeyword： 參考 dataToArrObj 的 name 欄位，對應出 Value 。 輸入為 ["aaa","bbb","ccc"]
* colsTocol: 將讀入的多欄料，轉換為單欄的資料，類似正規化的過程。 例：['abc\tabc\tabc\t','cde\tcde\tcdt']=>[abc,abc,abc,cde,cde,cde]
* Counting： 計算矩陣內的字詞出現次數，例 ['a','a','b'] = >[{name:'a',value=2},{name:'b',value=1}]
* Arraytwkeyword： 將 ["aaa","bbb","ccc", "ddd"] 轉換為 ["aaa, bbb", "aaa, ccc", "aaa, ddd", "bbb, ccc", "bbb, ddd", "ccc, ddd"]
* wordRelation: 計算文字關係的函數, 輸入為 ["aaa\tbbb\tccc","bbb\tccc\tddd"] ， tab 分格欄位，欄位數沒限定。轉換為 ["aaa, bbb", "aaa, ccc", .....]
* output： 輸出轉換。將 [{name='aaaa',value=3},{name='bbbb',value=1}] => string="3\taaaa\n1\tbbbb\n"  => 3  aaa 換行 1 bbb 換行

---
使用方法請參考 sample/ 範例檔: