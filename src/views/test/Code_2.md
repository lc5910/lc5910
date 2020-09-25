### 预解析
```
function foo(){
	getName=function (){ console.log(1); }
	return this;
}
foo.getName=function (){ console.log(2); }
foo.prototype.getName=function (){ console.log(3); }
var getName=function (){ console.log(4); }
function getName(){ console.log(5); }

foo.getName();
getName();
foo().getName();
getName();
new foo.getName();
new foo().getName();
new new foo().getName();

// 2
// 4 var声明的函数不会预解析，function会函数先解析
// 1 window.getName打印1
// 1 改变了this.getName
// 2 // 3 // 3
```

### 闭包
```
function fun(n,o){
	console.log(o);
	return {
		fun:function (m){
			return fun(m,n);
		}
	}
}
var a=fun(0); a.fun(1); a.fun(2);           
var b=fun(0).fun(1).fun(2).fun(3);          
var c=fun(0).fun(1);  c.fun(2); c.fun(3);   

// undefined 0 0  // undefined 0 1 2  // undefined 0 1 1
```

### 变量声明
```
function test(){
	var a=1;
	setTimeout(function(){
		console.log(a);
		a=3;
	},1000);
	a=2;
	setTimeout(function(){
		console.log(a);
		a=4;
	},4000);
}
test();
console.log(0);
var a=1;
function test(){
	a=b=2;
}
test();
console.log(a);
console.log(b);

// 0 // 2 // 2
```

```
var foo={n:1};
var bar=foo;
foo.x=foo={n:2};
console.log(foo.x);

// undefined
```

```
var a=6;
setTimeout(function (){
	console.log(a);
	a=666; 
},100);
a=66;

// 66 a不被预解析
```

### 函数调用
```
var x=5;
o={
	x:10,
	doIt:function doIt() {
		var x=20;
		setTimeout(function(){
			console.log(this.x);
		},10);
	}
}
console.log(o.doIt());

// undefined  5
```

### problem
```
if(!'a' in window){
	var a=1;
}
console.log(a); // undefined

var name ='world';
(function (){
	if(typeof name === 'undefined'){
		var name ="Jack";
		console.log("Goodbye "+name); // Jack
	}else{
		console.log("Hello "+name);
	}
})();

console.log(3.toString());  // error 不会转换成对应类型的包装对象
console.log(3..toString()); // 3
console.log(3...toString());// error


Array.isArray(Array.prototype) //true
```