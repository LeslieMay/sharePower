if(self != top) {
	// 我们的正常页面
	var url = location.href;
	// 父级页面重定向
	top.location = url;
}
window.loading = {
	show: function() {
		$(".mask_load").show();
		$('#spinners').show();
	},
	hide: function() {
		$(".mask_load").hide();
		$('#spinners').css("display", "none")
	},
	init:function(){
		var mask = $("<div class='mask' style='display: none;'></div>");
		var mask_load = $("<div class='mask_load' style='display: none;'></div>");
		var ul = $("<ul id='spinners'><li data-id='2'><div id='preloader_2'><span></span><span></span><span></span><span></span></div></li></ul>")
		$("body").append(mask);
		$("body").append(mask_load);
		$("body").append(ul);
	}
}
window.loading.init();
window.alert = function(msg) {
	if(document.querySelectorAll('.alertBox').length) {
		clearTimeout(window.alert.time);
		document.querySelector('.alertBox').remove();
	}
	var obj = document.createElement('div')
	obj.setAttribute('class', 'alertBox');
	obj.innerHTML = msg;
	document.body.appendChild(obj);
	window.alert.time = setTimeout(function() {
		document.body.removeChild(document.querySelector('.alertBox'))
	}, 1500);
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
