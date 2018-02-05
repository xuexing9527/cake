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
router.post('/register', function *(next) {
    const ctx = this
    console.log(ctx)
    console.log(ctx.request.body)
    var user={
        uname:ctx.request.body.uname,
        pwd:ctx.request.body.pwd,
        rePwd:ctx.request.body.rePwd
    }
    if(!user.uname){
        ctx.body={
            status: 0,
            msg: '用户名不能为空或格式不正确'
        };
        return
    }
    if(!user.pwd){
        ctx.body={
            status: 0,
            msg: '密码不能为空或格式不正确'
        };
        return
    }
    if(!user.rePwd){
        ctx.body={
            status: 0,
            msg: '重复密码不能为空或格式不正确'
        };
        return
    }
    yield userModel.findDataByName(user.uname)
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
                    data: 1,
                    msg: '用户已存在'
                };
            }else if (user.pwd!==user.rePwd|| user.pass==''){
                ctx.body={
                    data: 2,
                    msg: '两次密码输入不一致'
                };
            }else if(!result.length && !(user.pwd!==user.rePwd|| user.pass=='')){
                ctx.body={
                    status: 3,
                    msg: '注册成功！'

                };
                console.log('注册成功')
                // ctx.session.user=ctx.request.body.name
                userModel.insertData([ctx.request.body.uname,md5(ctx.request.body.pwd)])
            }else{
                ctx.body={
                    status: 0,
                    msg: '未知错误！'

                };
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




// cake
router.get('/cake', function *(next) {
    this.body = {
        "allCake": [
    { "id": 1,
        "src": "images/index/list_2177_1.jpg",
        "price": "2磅/318 RMB",
        "score": "28",
        "iconSrc": "images/index/xp.png",
        "titleEn": "Blanc Amant",
        "titleCh": "白色恋人",
    },
    {
        "id": 2,
        "src": "images/index/1.jpg",
        "price": "2磅/318 RMB",
        "score": "6",
        "iconSrc": "images/index/rq.png",
        "titleEn": "Napoléon aux fraises",
        "titleCh": "拿破仑莓恋",
    },
    {
        "id": 3,
        "src": "images/index/list_1959_1.jpg",
        "price": "2磅/298 RMB",
        "score": "20",
        "iconSrc": "",
        "titleEn": "Fraise-Chantilly",
        "titleCh": "鲜莓印雪",
    },
    {
        "id": 4,
        "src": "images/index/1(4).jpg",
        "price": "2磅/298 RMB",
        "score": "3",
        "iconSrc": "images/index/rq.png",
        "titleEn": "Velour rouge",
        "titleCh": "蔓越莓红丝绒",
    },
    {
        "id": 5,
        "src": "images/index/list_3116_1.jpg",
        "price": "2磅/298 RMB",
        "score": "",
        "iconSrc": "images/index/xp.png",
        "titleEn": "Histoire de pêche",
        "titleCh": "蜜桃物语",
    },
    {
        "id": 6,
        "src": "images/index/1 (1).jpg",
        "price": "2磅/298 RMB",
        "score": "",
        "iconSrc": "images/index/xp.png",
        "titleEn": "Blanche gamine",
        "titleCh": "布兰奇卡曼"	,
    },
    {
        "id": 7,
        "src": "images/index/list_2132_1.jpg",
        "price": "2磅/318 RMB",
        "score": "",
        "iconSrc": "",
        "titleEn": "Mont Blanc",
        "titleCh": "朗姆醇栗",
    },
    {
        "id": 8,
        "src": "images/index/1(5).jpg",
        "price": "2.5磅/318 RMB",
        "score": "",
        "iconSrc": "",
        "titleEn": "lapin détendu",
        "titleCh": "安逸兔",
    }
],
    "napoleonCake": [
        {
            "id": 2,
            "src": "images/index/1.jpg",
            "price": "2磅/318 RMB",
            "score": "6",
            "iconSrc": "images/index/rq.png",
            "titleEn": "Napoléon aux fraises",
            "titleCh": "拿破仑莓恋",
        },
        {
            "id": 7,
            "src": "images/index/list_2132_1.jpg",
            "price": "2磅/318 RMB",
            "score": "",
            "iconSrc": "",
            "titleEn": "Mont Blanc",
            "titleCh": "朗姆醇栗",
        }
    ],
        "milkCake": [
        {
            "id": 6,
            "src": "images/index/1.jpg",
            "price": "2磅/318 RMB",
            "score": "6",
            "iconSrc": "images/index/rq.png",
            "titleEn": "Napoléon aux fraises",
            "titleCh": "拿破仑莓恋",
        },
        {
            "id": 7,
            "src": "images/index/list_2132_1.jpg",
            "price": "2磅/318 RMB",
            "score": "",
            "iconSrc": "",
            "titleEn": "Mont Blanc",
            "titleCh": "朗姆醇栗",
        }
    ]
}
})

module.exports = router;
