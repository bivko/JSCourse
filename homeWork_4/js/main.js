//
//	Task 1
//  Напишите реализацию функции bind, которая позволяет выполнять функцию в передаваемом контексте выполнения и аргументами.
//

var App = function(){
	return {
		init: function() {
			this.nodes = document.querySelectorAll('.node');
			this.setListeners();
		},
		setListeners: function() {
			[].slice.call(this.nodes).forEach(function(n){
			n.onclick = this.onClick.myBind(this);
			}, this);
		},
		onClick: function(e) {
			e = e || window.event;
			var node = e.target || e.srcElement;
			// this - should be the main context - instance of App
			// node - should be the node, that fires event
		}
	};
};
	
if (typeof Function.prototype.myBind === 'undefined') {
    Function.prototype.myBind = function (context) {
        var elem = this;
        return function (e) {
            element.call(context, e);
        }
    };
}
 
(new App()).init();

//
//	Task 2
//  Напишите реализацию конструктора, принимающего на вход объект и создающего аттрибуты\методы по ключам этого объекта:
//
console.log("============== Task 2 ==============");
var Person = function(args){
	this.name = args.name;
	this.age = args.age;
	this.jump = args.jump;
};
 
var p1 = new Person({
	name: 'Jack',
	age: '10',
	jump: function(){ return "My name is " + this.name + " and I can jump.";}
});
console.log(p1.name); // ‘Jack’
console.log(p1.age); // 10
console.log(p1.jump()); // “My name is Jack and I can jump.”

//
//	Task 3
//  Модифицируйте конструктор из прошлой задачи, добавив к нему геттеры\сеттеры для каждого переданного свойства.
//
console.log("============== Task 3 ==============");
var Person2 = function(args){
	//Person.call(this, args);
	this.getName = function(){
		return args.name;
	};
	this.getAge = function(){
		return args.age;
	};
	this.jump = function(){
		return "My name is " + args.name + " and I can jump.";
	}
};

//Person2.prototype.jump =  function(){ return "My name is " + this.name + " and I can jump.";}

var p2 = new Person2({
	name: 'Jack',
	age: '10'
});
console.log(p2.getName()); // ‘Jack’
console.log(p2.name); // undefined
console.log(p2.getAge()); // 10
console.log(p2.age); // undefined
console.log(p2.jump()); // “My name is Jack and I can jump.”
console.log(p2.getJump); // undefined

//
//	Task 4
//  Реализуйте методы width, height которые соответсвенно изменяют ширишу и высоту всех селекторов, которые мы определили ранее.
//
console.log("============== Task 4 ==============");
var $ = function(elem){
	this.element = document.querySelectorAll(elem);
	elem = this.element;
	this.element.width = function(val){
		for (var i=0; i<elem.length ; i++) {
			elem[i].style.width = val + "px";
		};		
	}
	this.element.height = function(val){
        for (var i=0; i<elem.length ; i++) {
			elem[i].style.height = val + "px";
		};
	}

	return this.element;
}
var $div = $('div');
console.log( $div );
var $red = $('.red');
console.log( $red );
$red.width('300');
$div.height('30');