// app.js
import {graphql, buildSchema,GraphQLSchema} from 'graphql'
// import $ from 'jquery'

// import  handlebars from 'handlebars' 
// 使用 Mock
import root from './data.js'
// 
const handlebars = require('handlebars');
let compile = handlebars.compile;

let template = compile(document.getElementById('tmpl').innerHTML)

// console.log(JSON.stringify(root, null, 2))
const schema = buildSchema(`		
		type List {
			title :String
			url: String
			id: Int			
		}	
		type Author {
			name : String
			id: Int
		}
		type Query {
			author: [Author]
			list : [List]
			
		}	
	`);
const query = `{
	author {
		name
		id
	}
	list {
		title
		url
		id
	}
	
}` 


let text = '';

graphql(schema, query, root)
	.then((response)=>{
	let rs = [] ;
	let li = response.data.list;
	let aut = response.data.author;
	for(let j=0, le =li.length;j<le;j++){
		if (li[j].id===aut[j].id) {
			obj.url = li[j].url;
			obj.title = li[j].title;
			obj.name = aut[j].name;
			rs.push(obj);
		}else {
			rs.push(1)
		}
	}
	console.log(rs);
	
	for (let i = rs.length-1;i>=0;i--){
		text = text + `
			<h3>${rs[i].title} (${rs[i].url}) ${rs[i].name}
		`
	}	 
	var data = {}
	data.list = rs;	
	document.getElementById('app').innerHTML = template(data);


})