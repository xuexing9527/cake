$(function(){
    $('#headerNav>ul>li').eq(0).addClass('active')
    // index效果
    const url = '/users/cake'
    // 全部蛋糕
    function allCake(){
        $('#allCake').unbind('click',allCake)
        $.ajax({
            url: url,
            type: 'GET',
            data: {},
            success: function(data){
                // 动画打印函数
                animateFun( JSON.parse( JSON.stringify( data.allCake ) ))
            },
            error: function(err){
                console.log(err)
            }
        })
        function animateFun(data){
            var opts = {
                containerId: '#cakeList',
                n: 5,// 二维数组内数组的length
                time: 666, // 淡出的时间
                width: 220,
                height: 266,
                arr: []
            }
            // 打印函数
            function printView(arr){
                var str = ''
                for(var i = 0; i < arr.length; i++){
                    for(var r = 0; r < arr[i].length; r++){
                        str += '<li data-x="' + arr[i][r].x + '" data-y="' + arr[i][r].y + '" data-id="' + arr[i][r].id + '"><div class="t"><a href="javascript:;"><img src="' + arr[i][r].src + '"></a><div class="f"><a href="#"><div><p>' + arr[i][r].price + '</p><p class="i">甜品指数：<i>' + arr[i][r].score + '</i></p></div><div></div></a></div></div><div class="text"><img src="' + arr[i][r].iconSrc + '"><a href="#"><span>' + arr[i][r].titleEn + '</span><span>' + arr[i][r].titleCh + '</span></a></div></li>'
                    }
                }
                // 渐隐没有id重复的li
                $('#cakeList li').fadeToggle(opts.time)
                // 移动id重复的li
                $('#cakeList li').each(function(i){
                    for(var i = 0; i < arr.length; i++){
                        for(var r = 0; r < arr[i].length; r++){
                            if( $(this).data('id') == arr[i][r].id ){
                                const x = parseInt( $(this).data('x') ),
                                    y = parseInt( $(this).data('y') ),
                                    goX = parseInt( arr[i][r].x ) * opts.width,
                                    goY = parseInt( arr[i][r].y ) * opts.height;
                                // 移动他们

                                $(this).css({visibility: 'hidden'})
                                var s = '<li style="position:absolute;left:' + (x*opts.width) + 'px;top: ' + (y*(opts.height+17)) + 'px; data-x="' + arr[i][r].x + '" data-y="' + arr[i][r].y + '" data-id="' + arr[i][r].id + '"><div class="t"><a href="javascript:;"><img src="' + arr[i][r].src + '"></a><div class="f"><a href="#"><div><p>' + arr[i][r].price + '</p><p class="i">甜品指数：<i>' + arr[i][r].score + '</i></p></div><div></div></a></div></div><div class="text"><img src="' + arr[i][r].iconSrc + '"><a href="#"><span>' + arr[i][r].titleEn + '</span><span>' + arr[i][r].titleCh + '</span></a></div></li>'
                                // 17 高度差配置
                                $('#cakeList').css({position: 'relative',height: arr.length * (opts.height + 17)})
                                $('#cakeList').append(s)
                                $('#cakeList li[data-id=' + arr[i][r].id + ']').each(function(){
                                    console.log($(this).css('position'))
                                    if($(this).css('position').indexOf('absolute') !== -1){
                                        $(this).animate({left: goX,top: goY}, opts.time)
                                    }
                                })
                                break
                            }
                        }
                    }
                })
                setTimeout(function(){
                    $('#cakeList').html(str)
                    $('#allCake').bind('click',allCake)
                }, opts.time)
            }
            // 动画函数, x,y差值 ，移动当前图片块

            // 格式化数据, 记录xy坐标
            function toArr(data, y){
                // 如果data没有length, 退出函数
                if(!data.length) {
                    console.log(opts.arr)
                    // 打印数组内的内容
                    printView(opts.arr)
                    return
                }
                var arr = []
                for(var i = 0; i < opts.n ; i++){
                    if(data.length){
                        var obj = data[0]
                        obj.x = i
                        obj.y = y
                        arr.push(data.shift())
                    }else{
                        break
                    }
                }
                opts.arr.push(arr)
                toArr(data, ++y)
            }
            toArr(data, 0)
        }
    }
    $('#allCake').click(allCake)
    // 拿破仑
    function napoleonCake(){
        $('#napoleonCake').unbind('click',napoleonCake)
        $.ajax({
            url: url,
            type: 'GET',
            data: {},
            success: function(data){
                console.log(data)
                // 动画打印函数
                animateFun( JSON.parse( JSON.stringify( data.napoleonCake ) ))
            },
            error: function(err){
                console.log(err)
            }
        })
        function animateFun(data){
            var opts = {
                containerId: '#cakeList',
                n: 5,// 二维数组内数组的length
                time: 666, // 淡出的时间
                width: 220,
                height: 266,
                arr: []
            }
            // 打印函数
            function printView(arr){
                var str = ''
                for(var i = 0; i < arr.length; i++){
                    for(var r = 0; r < arr[i].length; r++){
                        str += '<li data-x="' + arr[i][r].x + '" data-y="' + arr[i][r].y + '" data-id="' + arr[i][r].id + '"><div class="t"><a href="javascript:;"><img src="' + arr[i][r].src + '"></a><div class="f"><a href="#"><div><p>' + arr[i][r].price + '</p><p class="i">甜品指数：<i>' + arr[i][r].score + '</i></p></div><div></div></a></div></div><div class="text"><img src="' + arr[i][r].iconSrc + '"><a href="#"><span>' + arr[i][r].titleEn + '</span><span>' + arr[i][r].titleCh + '</span></a></div></li>'
                    }
                }

                // 渐隐
                $('#cakeList li').fadeToggle(opts.time)

                // 移动id重复的li
                $('#cakeList li').each(function(i){
                    for(var i = 0; i < arr.length; i++){
                        for(var r = 0; r < arr[i].length; r++){
                            if( $(this).data('id') == arr[i][r].id ){
                                const x = parseInt( $(this).data('x') )
                                const y = parseInt( $(this).data('y') )
                                const goX = parseInt( arr[i][r].x ) * opts.width
                                const goY = parseInt( arr[i][r].y ) * opts.height
                                // 移动他们
                                $(this).css({visibility: 'hidden'})
                                var s = '<li style="position:absolute;left:' + (x*opts.width) + 'px;top: ' + (y*(opts.height+17)) + 'px; data-x="' + arr[i][r].x + '" data-y="' + arr[i][r].y + '" data-id="' + arr[i][r].id + '"><div class="t"><a href="javascript:;"><img src="' + arr[i][r].src + '"></a><div class="f"><a href="#"><div><p>' + arr[i][r].price + '</p><p class="i">甜品指数：<i>' + arr[i][r].score + '</i></p></div><div></div></a></div></div><div class="text"><img src="' + arr[i][r].iconSrc + '"><a href="#"><span>' + arr[i][r].titleEn + '</span><span>' + arr[i][r].titleCh + '</span></a></div></li>'
                                $('#cakeList').css({position: 'relative',height: arr.length * (opts.height + 17)})
                                $('#cakeList').append(s)
                                $('#cakeList li[data-id=' + arr[i][r].id + ']').each(function(){
                                    console.log($(this).css('position'))
                                    if($(this).css('position').indexOf('absolute') !== -1){
                                        $(this).animate({left: goX,top: goY}, opts.time)
                                    }
                                })
                                break
                            }
                        }
                    }
                })
                setTimeout(function(){
                    $('#cakeList').html(str)
                    $('#napoleonCake').bind('click',napoleonCake)
                }, opts.time)
            }
            // 动画函数, x,y差值 ，移动当前图片块

            // 格式化数据, 记录xy坐标
            function toArr(data, y){
                // 如果data没有length, 退出函数
                if(!data.length) {
                    console.log(opts.arr)
                    // 打印数组内的内容
                    printView(opts.arr)
                    return
                }
                var arr = []
                for(var i = 0; i < opts.n ; i++){
                    if(data.length){
                        var obj = data[0]
                        obj.x = i
                        obj.y = y
                        arr.push(data.shift())
                    }else{
                        break
                    }
                }
                opts.arr.push(arr)
                toArr(data, ++y)
            }
            toArr(data, 0)
        }
    }
    $('#napoleonCake').click(napoleonCake)
})
// $(()=>{
//     const config = {
//         n:5,//每列显示的蛋糕个数
//         time:666,//渐变的事件
//         width:220,
//         height:283
//
//     }
//     //页面刷新加载数据
//     $.ajax({
//         url:'users/cake',
//         type:'GET',
//         data:{},
//         success:function(data){
//             obj = data
//             console.log(data.allCake)
//             var allCake = data.allCake
//             var html = ``
//             for(var i=0;i<allCake.length;i++){
//                 allCake[i].y = parseInt(i/config.n)//格式化数组
//                 allCake[i].x = i%config.n
//                 html += `
//                 <li data-id="${allCake[i].id}" data-x="${allCake[i].x}" data-y="${allCake[i].y}">
//                     <div class="t">
//                         <a href="#">
//                          <img src="${allCake[i].src}" >
//                         </a>
//                          <div class="f">
//                             <a href="#">
//                                 <div>
//                                     <p>${allCake[i].price}</p>
//                                     <p class="i">甜品指数：<i></i></p>
//                                     </div>
//                                     <div></div>
//                              </a>
//                          </div>
//                    </div>
//                    <div class="text">
//                         <img src="${allCake[i].iconSrc}">
//                         <a src="#"><span>${allCake[i].titleEn}</span>
//                             <span>${allCake[i].titleCh}</span>
//                         </a>
//                    </div>
//                 </li>
//                 `
//             }
//
//
//             $('#cakeList').html(html)
//         },
//         error:function(err){
//             console.log(err)
//         }
//     })
//
//     $('#asideNav li').on('click','a',function(){//为每个li绑定单击事件
//         switch($(this).html()){
//             case  '拿破仑' :
//                 loadCake('napoleonCake')
//             break;
//             case  '鲜奶' :
//                 loadCake('milkCake')
//                 break;
//             default :
//                 break;
//         }
//     })
//     function loadCake(cakeType){//ajax加载不同类型的蛋糕
//         $.ajax({
//             url:'users/cake',
//             type:'GET',
//             data:{},
//             success:function(data){
//                 var data = data[cakeType]
//                 animateView(data)
//             }
//         })
//     }
//     function animateView(data){//动画打印选择的蛋糕分类
//         for(var i=0;i<data.length;i++){
//             data[i].y = parseInt(i/config.n)//格式化数组
//             data[i].x = i%config.n
//             $('#cakeList li').each(function(){
//                 if($(this).data('id')==data[i].id){
//                     var x = $(this).data('x')
//                     var y = $(this).data('y')
//                     var goX = (x-data[i].x)*config.width
//                     var goY = (y-data[i].y)*config.height
//                     $(this).css({'position':'relative'})
//                 }
//             })
//         }
//
//     }
//
// })