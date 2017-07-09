// app.js
import {graphql, buildSchema,GraphQLSchema} from 'graphql'
// 使用 Mock
import content from './data.js'
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
			list : [List]
			author: [Author]
		}	

	`);

var text = '';

graphql(schema,'{list{title url} author{ name}}', content)
	.then((response)=>{
	console.log(response)
	let li = response.data.list
	let aut = response.data.author
	for (let i = li.length-1;i>=0;i--){
		text =text + '<h3>' + 
		li[i].title +'(' + li[i].url + ')' + aut[i].name + '</h3>';
	}	 
	document.getElementById('content').innerHTML = text;
})