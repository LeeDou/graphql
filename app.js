// app.js
import {graphql, buildSchema,GraphQLObjectType,GraphQLSchema,GraphQLInt} from 'graphql'
import $ from 'jquery';
// import React from 'react';
// import { render } from 'react-dom';
// import NewsList from './NewsList.js';
// import '!style-loader!css-loader!./app.css';
// import './NewsHeader.css';

// function get(url) {
//   return Promise.resolve($.ajax(url));
// }

// get('https://hacker-news.firebaseio.com/v0/topstories.json').then( function(stories) {
//   return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
// }).then(function(items) {
//   render(<NewsList items={items} />, $('#content')[0]);
// }).catch(function(err) {
//   console.log('error occur', err);
// });

// render(<NewsList />, $('#content')[0]);
console.log('hello');

// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random

Random.paragraph(1)
Random.word(5,8)
Random.title(8)
Random.email()
Random.domain('http')
Random.name()

var content = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|5': {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'url':'@domain',
        'title':'@title'
    },
    'author':{
		'id|+1':1,
		'name': '@name'
	}
});

var user = Mock.mock({
	'author|5':{
		'id|+1':1,
		'name': '@word'
	}

})

// var data2 = Mock.mock({
// 	'author':{
// 		'id|+1': 1,
//         'name':'@word',
// 	}
// })

console.log(content);
// 输出结果
console.log(JSON.stringify(content, null, 2))
var schema = buildSchema(`		
		type List {
			title :String
			url: String
			
		}	
		type Author {
			name : String
		}
		type Query {
			list : List
			author: Author
		}	

	`);

var root= {  
    "list": { 
    	"user":{
	        'name': 'username',  
	        'id': '男',  
	        'intro': '资深码农',
	        'friends':[
	        	{'nick': 'lee'},
	        	{'nnick': 'kanrt'}
	        ]
        }
       
    }

    
};

var text = '';

graphql(schema,'{list{title url} author{ name}}', content)
	.then((response)=>{
	console.log(response)
	text = '<h3>' + response.data.list.title +'(' + response.data.list.url + ')' + response.data.author.name + '</h3>'; 
	document.getElementById('content').innerHTML = text;
	// console.log(response.data)
})

// graphql(schema, '{author}', data2).then((response)=>{
// 	console.log(response)
// 	// console.log(response.json())
// 	// console.log(JSON.stringify(response.list, null, 2));
// })
