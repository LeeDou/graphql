// app.js
import {graphql, buildSchema,GraphQLSchema} from 'graphql'
// 使用 Mock
import root from './data.js'
// 输出结果
console.log(JSON.stringify(root, null, 2))
const schema = buildSchema(`		
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
const query = `{
	list {
		title
		url
	}
	author {
		name
	}
}` 


let text = '';

graphql(schema, query, root)
	.then((response)=>{
	console.log(response)
	let li = response.data.list
	let aut = response.data.author
	for (let i = li.length-1;i>=0;i--){
		text = text + `
			<h3>${li[i].title} (${li[i].url}) ${aut[i].name}
		`
	}	 
	document.getElementById('content').innerHTML = text;
})