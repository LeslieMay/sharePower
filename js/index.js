$(document).ready(function() {
	var indexPage = (function() {
		var miniRefreshArr = [],
			current = 0,
			requestDelayTime = 600;
		var domEvent = {

		}
		var method = {
			initSwitch: function() {
				var length = $(".tabList").length;
				$(".tabList").css("width", 100 / length + "%");
				for(var i = 0; i < $(".minirefresh-wrap").length; i++) {
					$(".minirefresh-wrap").eq(i).css("left", 100 * i + "%")
				}
				$(document).on("click touchstart", ".tabList", function() {
					$(".active").removeClass("active");
					$(".activeWrap").removeClass("activeWrap");
					$(this).addClass("active");
					var now = $(this).attr("data-index");
					$(".minirefresh-wrap").eq(now).addClass("activeWrap");
//					if(now != current){
//						if (!miniRefreshArr[current]) {
//	                        method.initMiniRefreshs(current);
//	                    }
//						current = now;
//					}
					for(var i = 0; i < $(".minirefresh-wrap").length; i++) {
						$(".minirefresh-wrap").eq(i).css("left", 100 * (i - now) + "%");
					}
				})
			},
			initMiniRefreshs: function(index) {
				miniRefreshArr[index] = new MiniRefresh({
					container: '#minirefresh' + index,
					down: {
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
				$('.minirefresh-wrap').show()
			}
		}
		return o;
	})()

	indexPage.init();
})