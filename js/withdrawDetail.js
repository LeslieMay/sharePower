$(document).ready(function(){
	var withdrawPage = (function(){
		var method = {
			initMiniRefreshs: function(index) {
				miniRefreshArr = new MiniRefresh({
					container: '#withdrawContent',
					down: {
						callback: function() {
							setTimeout(function() {
								// 每次下拉刷新后，上拉的状态会被自动重置
								$(".withdrawContentListDiv").prepend("<p>前：" + (new Date()) + "<br/><br/></p>")
								miniRefreshArr.endDownLoading(true);
							}, 600);
						}
					},
					up: {
						isLock:true
					}
				});
			}
		}
		var o = {
			init:function(){
				method.initMiniRefreshs()
			}
		};
		return o;
	})()
	withdrawPage.init()
})
