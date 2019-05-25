/**
 * Made by ST-AR15
 * QQ:2862159026
 */

// 封装document.getElementById
 function getDom(DomID) {
    return document.getElementById(DomID);
 }

//  设置cookie
 function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

// 获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

//  快速排序
function quickSort(array){
   // 私有的排序函数
   function sort(arr, left = 0, right = arr.length - 1){
       if (left >= right) {//如果左边的索引大于等于右边的索引,则结束
           return 
       }
       let i = left;
       let j = right;
       let baseNum = arr[j]; // 取数组最后一位为基准
       while (i < j) {//把所有比基准值小的数放在左边,比基准值大的数放在右边，直到左边的索引大于等于右边的索引
           while (i < j && arr[i] <= baseNum) { //找到一个比基准值大的数交换
               i++;
           }
           arr[j] = arr[i] // 将较大的值放在右边，如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
           while (j > i && arr[j] >= baseNum) { //找到一个比基准值小的数交换
               j--;
           }
           arr[i] = arr[j]; // 将较小的值放在左边，如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
       }
       arr[j] = baseNum; // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
       sort(arr, left, j - 1); // 通过递归排序基数的左边
       sort(arr, j + 1, right); // 通过递归排序基数的左边
   }
   // 开始排序
   sort(array);
   // 返回排序结果
   return array;
}