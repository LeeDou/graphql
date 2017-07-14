# graphql + mockjs 来完成的一个demo

## 目录结构
 │ app.js                     入口文件      
 │ data.js    
 │ package-lock.json    
 │ package.json    
 │ README.md    
 │ webpack.config.js        
 ├ build    
 │  │ bundle.js               打包后文件      
 │  │ handlebars.js           handlebarjs文件    
 │  └ index.html              主页    
 └ node_modules      
    ├      



## 所使用到的功能
- Mockjs来生成模拟数据
- 使用graphql 时通过生成schema，query，root数据三个参数来完成grapql函数的调用
- 通过模板字符串来拼接字符串

## 待解决的问题
- graphql 这样一个查询的API官网说明是具有可以查询多个数据并进行处理功能的，在demo中自身并没能利用这一特性对数据进行处理
- 作为查询的API，个人认为传入的参数可以是一个URL地址，或静态资源地址，目前个人并没实现这一功能
- graphql 在使用中比较灵活，诸如schema定义，query使用，包括数据类型还有其他比如增删改查的具体功能还有待在以后的学习中进行使用

