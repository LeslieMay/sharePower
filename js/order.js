$(document).ready(function() {
	var orderPage = (function() {
		var key = getQueryString("page");
		var miniRefreshArr = [],
			current = 0,
			requestDelayTime = 600;
		var domEvent = {

		}
		var method = {
			initSwitch: function() {
				var length = $(".orderTabList").length;
				$(".orderTabList").css("width", 100 / length + "%");
				for(var i = 0; i < $(".minirefresh-wrap").length; i++) {
					$(".minirefresh-wrap").eq(i).css("left", 100 * i + "%")
				}
				$(document).on("click touchstart", ".orderTabList", function() {
					$(".active").removeClass("active");
					$(".activeWrap").removeClass("activeWrap");
					$(this).addClass("active");
					var now = $(this).attr("data-index");
					$(".minirefresh-wrap").eq(now).addClass("activeWrap");
					for(var i = 0; i < $(".minirefresh-wrap").length; i++) {
						$(".minirefresh-wrap").eq(i).css("left", 100 * (i - now) + "%");
					}
				})
			},
			initMiniRefreshs: function(index) {
				miniRefreshArr[index] = new MiniRefresh({
					container: '#orderList' + index,
					down: {
						isAuto:true,
						callback: function() {
							setTimeout(function() {
								// 每次下拉刷新后，上拉的状态会被自动重置
								$(".data-list").eq(index).prepend("<p>前：" + (new Date()) + "</p>")
								miniRefreshArr[index].endDownLoading(true);
							}, requestDelayTime);
						}
					},
					up: {
						isLock:true
					}
				});
			}
		}
		var gainAjax = {

		}
		var o = {
			init: function() {
				method.initSwitch();
				for(var i = 0 ; i<$(".minirefresh-wrap").length;i++){
					method.initMiniRefreshs(i);
				}
				$('.minirefresh-wrap').show();
				setTimeout(function(){
					if(key=="noPayOrder"){
						$(".orderTabList3").click();
					}else if(key=="nowOrder"){
						$(".orderTabList1").click();
					}else if(key=="doneOrder"){
						$(".orderTabList2").click();
					}
				},0)
			}
		}
		return o;
	})()

	orderPage.init();
})