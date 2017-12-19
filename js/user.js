$(document).ready(function(){
	var userPage = (function(){
		var domEvent = {
			click:function(){
				$(".userContentListOrder").on("click",function(){
					window.location.href = "order.html"
				})
				$(".userContentListDeclare").on("click",function(){
					window.location.href = "declare.html"
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
	userPage.init();
})
