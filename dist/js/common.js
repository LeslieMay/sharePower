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
	}
}

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
