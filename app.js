// app.js
import {graphql, buildSchema,GraphQLObjectType,GraphQLSchema,GraphQLInt} from 'graphql'
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
			list : List
			author: Author
		}	

	`);

var text = '';

graphql(schema,'{list{title url} author{ name}}', content)
	.then((response)=>{
	console.log(response)
	text = '<h3>' + response.data.list.title +'(' + response.data.list.url + ')' + response.data.author.name + '</h3>'; 
	document.getElementById('content').innerHTML = text;
})