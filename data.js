// data.js
var Mock = require('mockjs')
var Random = Mock.Random

Random.paragraph(1)
Random.word(5,8)
Random.title(8)
Random.email()
Random.domain('http')
Random.name()

// var content = Mock.mock({
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//     'list|5': [{
//         // 属性 id 是一个自增数，起始值为 1，每次增 1
//         'id|+1': 1,
//         'url':'@domain',
//         'title':'@title'
//     }],
//     'author|5':[{
//         'id|+1':1,
//         'name': '@name'
//     }]
// });

var user = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|5': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'url':'@domain',
        'title':'@title'
    }]
});

var author = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'author|5':[{
        'id|+1':1,
        'name': '@name'
    }]
});

var root = Object.assign(user, author);

// export default content
export default root