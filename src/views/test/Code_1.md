### 两个顺序排序的数组A和B求B数组是否为A数组的子集？(数组内可能有重复)
```
var A=[1,3,3,4,5,5,6,6,7];
var B=[1,3,4,5,6];
function isSon(A,B){
	for(var i=0;i<B.length;i++){
		if(A.indexOf(B[i])===-1){
			return false;
		}else {
			A.splice(A.indexOf(B[i]),1);
		}
	}
	return true;
}
console.log(isSon(A,B));
```

### 写一个函数方法为指定元素来删除数组元素
```
var arr = [12, 23, 34, 45, 56, 67];
Array.prototype.removeArr = function(str) {
	var index=this.indexOf(str);
	if(index!=-1)
	this.splice(index,1);
};
arr.removeArr(34);
console.log(arr);
```

### 反转一个DOM元素下的直接子元素
```
var ul=document.getElementById('ul');
var lis=ul.children;
for(var i=0;i<lis.length;i++){
	ul.insertBefore(lis[0],lis[lis.length-i]);
}
```
### 编写方法求一个字符的字节长度（一个英文字符占用一个字节，一个中文字符占两个字节）
```
function getByteLength(param){
	var length=0;
	for(var i=0;i<param.length;i++){
		length+=param.charCodeAt(i)<255?1:2;
	}
	return length;
}
console.log(getByteLength('ww呵呵'));
```

### 写一个函数计算字符串中每个字母出现的次数
```    
var str='aabba';
function strCount(str){
	var obj={};
	for(var i=0;i<str.length;i++){
		var char=str[i];
		if(!obj[char]++){
			obj[char]=1;
		}
	}
	return obj;
}
strCount(str);
```

### 判断一个字符串中出现次数最多的字符，统计这个次数
```
var str = "aabbbcccdddd";
var json = {};
for (var i = 0; i < str.length; i++) {
	var string=str.charAt(i);
	if (!json[string]) {
		json[string] = 1;
	} else {
		json[string]++;
	}
}
var s = "";
var num = 0;
for (k in json) {
	if (json[k] > num) {
		num = json[k];
		s = k;
	}
}
console.log("出现最多的字符是:" + s + " 次数为:" + num + "次");
```

### 编写一个去除数组中重复元素的函数
```
//方法一
var array=["1","3","1","2","1","4"];
Array.prototype.removeRepeat=function(){
	var obj={};
	var arr=[];
	for(var i=0;i<this.length;i++){
		if(!obj[this[i]]){
			arr.push(this[i]);
			obj[this[i]]=1;
		}
	}
	//返回一个新数组
	return  arr;
}
//  array=array.removeRepeat();
//  console.log(array);

//方法二
Array.prototype.removeRepeat2=function(){
	var arr=[];
	for(var i=0;i<this.length;i++){
		if(arr.indexOf(this[i])==-1){
			arr.push(this[i]);
		}
	}
	return arr;
}
//  array=array.removeRepeat();
//  console.log(array);
```

### 如何实现数组的随机排序？
```
//方法一：
var arr = [1,2,3,4,5,6,7,8,9,10];
function randomSort1(arr){
	for(var i = 0,len = arr.length;i < len; i++ ){
		var rand = parseInt(Math.random()*len);
		var temp = arr[rand];
		arr[rand] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
console.log(randomSort1(arr));
//方法二：
var arr = [1,2,3,4,5,6,7,8,9,10];
function randomSort2(arr){
	var mixedArray = [];
	while(arr.length > 0){
		var randomIndex = parseInt(Math.random()*arr.length);
		mixedArray.push(arr[randomIndex]);
		arr.splice(randomIndex, 1);
	}
	return mixedArray;
}
console.log(randomSort2(arr));
```

### 实现一个快速排序
```
function quickSort(arr){
	if(arr.length<=1){
		return arr; // 如果数组只有一个数，就直接返回；
	}
	var num = Math.floor(arr.length/2); // 找到中间数的索引值，如果是浮点数，则向下取整
	var numValue = arr.splice(num,1)[0]; // 找到中间数的值
	var left = [];
	var right = [];
	for(var i=0;i<arr.length;i++){
		if(arr[i]<numValue){
			left.push(arr[i]);// 基准点的左边的数传到左边数组
		}
		else{
			right.push(arr[i]);// 基准点的右边的数传到右边数组
		}
	}
	return quickSort(left).concat([numValue],quickSort(right));// 递归不断重复比较
}
console.log(quickSort([32,45,37,16,2,87]));
```

### 判断对象的类型
```
function judge(param){
	var type=Object.prototype.toString.call(param);
	return type.replace(/^\[object (\w+)\]$/,function (re,$1){
		return $1;
	});
}
```

### 在字符串指定位置插入新字符串
```
String.prototype.insertStr=function(str,index) {
	var reg=new RegExp("(.{"+index+"})");
	return this.replace(reg,'$1'+str);
};
console.log('abcdef'.insertStr('ss',2));
```

### 有字符串foo=”get-element-by-id”,写一个方法转化成驼峰表示法”getElementById”
```
var foo='get-element-by-id';
var str='';
var f=foo.replace(/\b\w+\b/g, function(word,index){
	return str+=index==0?word:word.substr(0,1).toUpperCase()+word.substring(1);
});
f=f.replace(/-/g,'');
```

### 字符串替换
```
var str = 'as-df-js-kl-qw-wd';
var str1 = '';
str.replace(/([^-]+)-([^-]+)/gi, function (re, $1, $2) {
	str1 += $1.slice(0, 1).toUpperCase() + $1.slice(1) + "-" + $2.slice(0, 1).toUpperCase() + $2.slice(1) + '-';
});

str1=str1.slice(0,str1.length-1);  //As-Df-Js-Kl-Qw-Wd
```