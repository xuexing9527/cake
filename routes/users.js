var router = require('koa-router')();
var userModel=require('../db/user');
var async = require('async');
// 加密
var md5=require('md5')

router.prefix('/users');

router.get('/', function *(next) {
  this.body = 'this is a users response!';
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});


// POST '/signup' 注册页
router.post('/signup', function *(next) {
    const ctx = this
    console.log(ctx)
    console.log(ctx.request.body)
    var user={
        name:ctx.request.body.name,
        pass:ctx.request.body.password,
        repeatpass:ctx.request.body.repeatpass
    }
    yield userModel.findDataByName(user.name)
        .then(result=>{
            // var res=JSON.parse(JSON.stringify(reslut))
            console.log(result)

            if (result.length){
                try {
                    throw Error('用户存在')
                }catch (error){
                    //处理err
                    console.log(error)
                }
                ctx.body={
                    data:1
                };;
            }else if (user.pass!==user.repeatpass || user.pass==''){
                ctx.body={
                    data:2
                };
            }else{
                ctx.body={
                    data:3
                };
                console.log('注册成功')
                // ctx.session.user=ctx.request.body.name
                userModel.insertData([ctx.request.body.name,md5(ctx.request.body.password)])
            }
        })
});
// router.post('/signup',async (ctx,next)=>{
//     console.log(ctx)
//     console.log(ctx.request.body)
//     var user={
//         name:ctx.request.body.name,
//         pass:ctx.request.body.password,
//         repeatpass:ctx.request.body.repeatpass
//     }
//     await userModel.findDataByName(user.name)
//         .then(result=>{
//             // var res=JSON.parse(JSON.stringify(reslut))
//             console.log(result)
//
//             if (result.length){
//                 try {
//                     throw Error('用户存在')
//                 }catch (error){
//                     //处理err
//                     console.log(error)
//                 }
//                 ctx.body={
//                     data:1
//                 };;
//             }else if (user.pass!==user.repeatpass || user.pass==''){
//                 ctx.body={
//                     data:2
//                 };
//             }else{
//                 ctx.body={
//                     data:3
//                 };
//                 console.log('注册成功')
//                 // ctx.session.user=ctx.request.body.name
//                 userModel.insertData([ctx.request.body.name,md5(ctx.request.body.password)])
//             }
//         })
//
// })


module.exports = router;
