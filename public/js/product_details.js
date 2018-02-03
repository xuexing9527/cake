//+  -
$(()=>{
	// $("#num").on("click","b",function(e){
	// 	var $val = $(this).find('input').val();
	// 	console.log($val)
	// })
	$("#num").click(function(e){
		var elem = e.target?e.target:e.srcElement;
		var $val = parseInt($(this).find('input').val());
		if(elem.tagName === 'B'){
			console.log(elem.className)
			if(elem.className === "btn1"){
				// -
				if($val>1){
					$(this).find('input').val(--$val);
				}
			}
			if(elem.className === "btn2"){
				if($val<10){
					$(this).find('input').val(++$val);
				}else{
					alert("库存不足")
				}

			}
		}
	})
})