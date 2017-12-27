$(document).ready(function(){
	var userPage = (function(){
		var domEvent = {
			click:function(){
				//充值押金
				$(".userOptionDeposit").on("click",function(){
					window.location.href = "deposit.html"
				})
				//提现押金
				$(".userOptionRecharge").on("click",function(){
					window.location.href = "recharge.html"
				})
				//我的订单
				$(".userContentListOrder").on("click",function(){
					window.location.href = "order.html"
				})
				//我要申报
				$(".userContentListDeclare").on("click",function(){
					window.location.href = "declare.html"
				})
				//常见问题
				$(".userContentListIssue").on("click",function(){
					window.location.href = "issue.html"
				})
				//常见问题
				$(".userContentListAbout").on("click",function(){
					window.location.href = "about.html"
				})
				//更多 抽屉
				$(".userFooterMoreImg").on("click",function(){
					if(!$(".userFooterMoreImg").hasClass("userFooterMoreImgRoll")){
						$(".userFooterMoreImg").removeClass("animated infinite bounce")
//						$(".userFooter").addClass("userFooterActive")
						$(".userContent").slideUp(400);
						$(".userFooterMoreImg").addClass("userFooterMoreImgRoll");
						$(".userFooterMoreText").hide(200);
						setTimeout(function(){
							$(".userFooterIcon").slideDown(600);
						},400)
						
					}else{
//						$(".userFooter").removeClass("userFooterActive")
						$(".userFooterMoreImg").removeClass("userFooterMoreImgRoll");
						$(".userFooterIcon").slideUp(600);
						setTimeout(function(){
							$(".userFooterMoreText").show(400);
							$(".userContent").slideDown(600);
							setTimeout(function(){
								$(".userFooterMoreImg").addClass("animated infinite bounce")
							},700)
						},600)
						
					}
				})
				//未支付订单
				$(".noPayOrder").on("click",function(){
					window.location.href = "order.html?page=noPayOrder";
				})
				//进行中订单
				$(".nowOrder").on("click",function(){
					window.location.href = "order.html?page=nowOrder";
				})
				//已完成订单
				$(".doneOrder").on("click",function(){
					window.location.href = "order.html?page=doneOrder";
				})
				//充值明细
				$(".detailRecharge").on("click",function(){
					window.location.href = "rechargeDetail.html";
				})
				//提现明细
				$(".detailWithdraw").on("click",function(){
					window.location.href = "withdrawDetail.html";
				})
				//优惠券
				$(".coupon").on("click",function(){
					alert("暂未开放，敬请期待~")
//					window.location.href = "order.html?page=doneOrder";
				})
				//优惠券
				$(".activity").on("click",function(){
					alert("暂未开放，敬请期待~")
//					window.location.href = "order.html?page=doneOrder";
				})
			}
		}
		var o = {
			init:function(){
				domEvent.click();
			}
		}
		return o;
	})()
	userPage.init();
})
