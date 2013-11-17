//
//	Task 1
//

function getObject(str,obj){
	str = str.split('.');
	for( var i=0; i<str.length; i++ ){
        obj=obj[str[i]];
    }
	return obj;
}

var o = {a: {b: 'c'}};
console.log('============================1st task============================');
console.log(getObject('a.b', o));	// ‘c’
console.log(getObject('a', o));		// {b: ‘c’}
console.log(getObject('d', o));		// undefined


//
//	Task 2
//

function deepCopy(obj){
	var newObj = {};
	for( key in obj){
		newObj[key] = obj[key];
	}
	return newObj;
}

var a = {b: 'c', d: {e: 'f'}};
var b = deepCopy(a);
a.d = 12;
console.log('============================2nd task============================');
console.log(b.d); // {e: ‘f’}


//
//	Task 3
//

var people = [
	{id: 1, name: 'Brad', friends: [2,5,6]},
	{id: 2, name: 'John', friends: [1, 3]},
	{id: 3, name: 'Tom', friends: [2, 5]},
	{id: 4, name: 'Fil', friends: null},
	{id: 5, name: 'John', friends: [1, 3]},
	{id: 6, name: 'Jim', friends: [1]}
];
 
var getFriends = function(userId) {
	if(userId <= people.length){
		var friend = [];
		for( var i=0; i<people.length; i++ ){
			if(people[i].friends != null){
				for( var z=0; z<people[i].friends.length; z++ ){
					if( userId == people[i].friends[z] )
						friend.push(people[i]);
				}
			}
		}
		return friend;
	}else{
		return null;
	}
};
 
console.log('============================3d task============================');
console.log(getFriends(2)); // [{id: 1, name: 'Brad', friends: [2,5,6]}, {id: 3, name: 'Tom', friends: [2, 5]}]
console.log(getFriends(4)); // []
console.log(getFriends(100500)); // null