$(document).ready(function(){
	var rechargePage = (function(){
		var domEvent = {
			click:function(){
				$(".rechargeChooseBtn").on("click",function(){
					$(".rechargeChooseBtnActive").removeClass("rechargeChooseBtnActive");
					$(this).addClass("rechargeChooseBtnActive")
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
	rechargePage.init()
})