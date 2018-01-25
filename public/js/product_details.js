//放大镜
$(()=>{
	var img = $("details_img>img");
	img.onmouseover = () =>{
		mask.style.display = "block";
	}
	img.onmouseout = () => {
		mask.style.dislay = "none";
	}
})