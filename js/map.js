$(document).ready(function(){
	var mapPage = (function(){
		var domEvent = {
			switchMap:function(){
				$(".mapHeaderIcon").on("click",function(){
//					method.testAnim($(".map"),"zoomOut",false)
					$(".map").animate({
						"opacity":"0"
					},300,"swing",function(){
						$(".map").hide()
					})
					setTimeout(function(){
//						method.testAnim($(".mapList"),"zoomIn",true)
						$(".mapList").show()
						$(".mapList").animate({
							"opacity":"1"
						},300,"swing")
					},300)
				})
				$(".mapListHeaderIcon").on("click",function(){
//					method.testAnim($(".mapList"),"zoomOut",false)
					$(".mapList").animate({
						"opacity":"0"
					},300,"swing",function(){
						$(".mapList").hide()
					})
					setTimeout(function(){
//						method.testAnim($(".map"),"zoomIn",true)
						$(".map").show()
						$(".map").animate({
							"opacity":"1"
						},300,"swing")
					},200)
				})
			}
		}
		var method = {
            testAnim: function(dom, x,flag) {
                $(dom).removeClass("hiddenDom").addClass(x + ' animated showDom').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    if(!flag){
                    	$(this).removeClass('showDom animated ' + x).addClass("hiddenDom")
                    }else{
                    	$(this).removeClass('animated ' + x)
                    }
                    
                })
            },
			initMap:function(){
				var map = new BMap.Map("mapContent");
				map.centerAndZoom("上海", 12);
				map.setCurrentCity("上海");
				map.enableScrollWheelZoom(true);
				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r){
					if(this.getStatus() == BMAP_STATUS_SUCCESS){
						var mk = new BMap.Marker(r.point);
						map.addOverlay(mk);
						map.panTo(r.point);
//						alert('您的位置：'+r.point.lng+','+r.point.lat);
					}
					else {
						alert('failed'+this.getStatus());
					}        
				},{enableHighAccuracy: true})
			}
		}
		var o = {
			init:function(){
				domEvent.switchMap()
				method.initMap();
//				method.testAnim($(".map"),"zoomIn",true)
				$(".map").show()
				$(".map").animate({
					"opacity":"1"
				},300,"swing")
			}
		}
		return o;
	})()
	mapPage.init()
})