//
//	Task 1
//  Напишите конструктор my$, который принимает аргументом DOM селектор.
//  Реализуйте методы width, height которые соответсвенно изменяют ширишу и высоту всех селекторов, которые мы определили ранее.
//
var my$ = function(elem){
	this.element = document.querySelectorAll(elem);
	_elem = this.element;
	_elem.width = function(val){
		for (var i=0; i<_elem.length ; i++) {
			_elem[i].style.width = val + "px";
		};
		return _elem;
	}
	_elem.height = function(val){
        for (var i=0; i<_elem.length ; i++) {
			_elem[i].style.height = val + "px";
		};
		return _elem;
	}
	_elem.css = function(){
		var args = Array.prototype.slice.call(arguments);
		if(typeof args[0] === "string"){
			setTimeout(function(){
				for (var i=0; i<_elem.length ; i++) {
					_elem[i].style[args[0]] = args[1];
				};
			},args[2]);
		}else{
			setTimeout(function(){
				for(key in args[0]){
					for (var i=0; i<_elem.length ; i++) {
						var style = _elem[i].getAttribute('style');
						if(style){
							_elem[i].setAttribute('style',style+' '+key+': '+args[0][key]+";");
						}else{
							_elem[i].setAttribute('style',key+': '+args[0][key]+";");
						}
					};
				}
			},args[1]);
		}
		return _elem;	
	}
	return _elem;
}



var $div = my$('div')
console.log( $div ) //показать все div на странице.
var $red = my$('.red')
console.log( $red ) //показать все DOM элементы с классом .red, которые присутсвуют на странице
$red.width('200')
	.height('50') //изменяет текущую высоту до 100px всех DOM элементов с классом .red


//
//	Task 2
//  Написать реализацию CSS геттеро-сеттера в jQuery которая может принимать на вход ключ значение или объект
//  со значениями. Для стилизации текущего селектора: цвет, dimensions и других параметров( стоит
//  огранничиться 5 параметрами, так как их слишком много ). Сделать возможным, чтобы эти методы были
//  chainable. Добавить возможность, передавать второй /третий аргумент как время, чтобы стили
//  применились через какое-то время.
//

my$('span').css('color', 'red')
	.css({'font-size':'20px','height': '20px'})
	.css({'background':'#000','border': '5px solid blue','padding': '10px'},1000)
	.css('color', '#fff', 3000)