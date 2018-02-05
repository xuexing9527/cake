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
