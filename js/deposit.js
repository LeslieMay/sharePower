$(document).ready(function(){
	var depositPage = (function(){
		var domEvent = {
			click:function(){
				$(".depositDetail").on("click",function(){
					window.location.href = "withdrawDetail.html"
				})
			}
		}
		var o = {
			init:function(){
				domEvent.click()
			}
		}
		return o;
	})()
	depositPage.init()
})