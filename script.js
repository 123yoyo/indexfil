let 衣服=300;
let 褲子=700;
let 折扣=0.8
let 總金額=(衣服+褲子)*折扣;

//總金額+=500;
console.log(總金額);
let 句子=`小明今天花了${總金額}元，衣服原價${衣服}元，褲子原價${褲子}元`;
let 字數=句子.length;
let  新句子=句子.replace("今天","昨天");
let 第一句=句子.slice(0,10);
//如何指定保留小數點位數 toFixed  Math.round則是四捨五入
let 總價=120;
let 商品數量=7;
let 平均價格=Math.round(總價/商品數量);
console.log(平均價格.toFixed(2));
//布林值 是否相等為== ，不相等則是!== ，如果要連資料形式也要相符的話要===
let 分數=80;
let 及格=60;
let 出席率=0.7;
console.log(分數!==及格);
//if判斷式 可以用else來處理更細的判斷。&&是「且」，||是「或」。
if(分數>=80 && 出席率>=0.8){
    console.log("恭喜通過！")
}else if(分數>=及格 || 出席率>=0.8){
    console.log("考試通過，但需補交作業彌補出席率的不足喔");
}else{
    console.log("未通過課程")
}
//array陣列  注意！第一位是[0]喔！不是[1]
let 考試成績=[85,90,75,60,95,100]
考試成績.push(100);
//push是在陣列末端加入數值，考試成績[2]則是選取第三位數值的意思。.pop()則是跳出最後一個數值
//indexOf()則是查詢某一個分數的索引位置，比如說75就會跳出[2]，length則是有多少筆資料
console.log(考試成績.pop())
//for迴圈, i++的意思是每執行一次就會加一, i<5代表只會顯示到4
for(let i = 0; i<5 ; i++){
    console.log(考試成績[i]);
}
//如果增加新的陣列，下方的5還要手動加一很麻煩，因此乾脆把它改成.length
for(let i = 0; i<考試成績.length ; i++){
    console.log(`第${i+1}位同學的成績是${考試成績[i]}分`);
}
//函式，在定義後不會執行，需要明確地呼叫它才能運作
function 打招呼(姓名){
    console.log(`${姓名}您好`);
}
打招呼("小明");
//要讓Java找到標籤需要document.querySelector()，如果需要找到li當中特定哪個項目，需要在原本項目設定class

//文字欄
const 文字欄=document.querySelector(".文字欄");
const 清單= document.querySelector(".清單");
const 按鈕= document.querySelector(".按鈕");
function 新任務() {
    if(文字欄.value===""){
        return;
    }
    const 任務=document.createElement("li");
    任務.innerHTML=`
    <input type="checkbox" class="打勾方塊">
    <label>${文字欄.value}</label>
    <button class="垃圾桶">🗑️</botton>
    `
    const 垃圾桶=任務.querySelector(".垃圾桶");
    const 打勾方塊=任務.querySelector(".打勾方塊");

    垃圾桶.addEventListener("click", function(){
        任務.remove();
    })
    打勾方塊.addEventListener("change", function(){
        if(打勾方塊.checked){
            任務.style.textDecoration="line-through"
            任務.style.color="#999";
            清單.append(任務);
        }else{
            任務.style.textDecoration="none"
            任務.style.color="";
            清單.prepend(任務);
        }
    });

    清單.append(任務);
    文字欄.value="";
}
按鈕.addEventListener("click",新任務);

//上面那段的步驟是先把html那邊的清單抓過來，接著給他一個新任務，新任務的目標是要用creatElement這個語法持續新增項目（li）
//而文字欄輸入的數字，會用等號跑到任務這邊的文字內容，並且利用append移動到清單的最上方。此時文字欄的值再清空 " "
//最後則是在下方的function中新增這個新任務，讓使用者每次按Enter時都會產生產生清單並清空文字欄
//因為要避免單純按enter也會產生新項目，所以要用if來說當文字欄是空白時，用return這個公式中斷函式不執行剩下的程式碼
//textContent=文字欄.value;只能使用文字的內容，所以被刪除了，改用innerHTML
//可以變成選取項目，可以偵測使用者的各種操作，如點擊、移動、按鈕
文字欄.addEventListener("keyup",function(e) {
    if(e.key ==="Enter"){
        新任務 ();
    }
});
