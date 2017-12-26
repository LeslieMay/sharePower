$(document).ready(function() {
	var mapPage = (function() {
		var geolocation = null,
			map = null,
			markerArr = [],
			info = [],
			markerP = [],
			infoWin = null;
		var options = {
			timeout: 10000
		};
		var positionNum = 0;
		var domEvent = {
			switchMap: function() {
				$(".mapHeaderIcon").on("click", function() {
					//					method.testAnim($(".map"),"zoomOut",false)
					$(".map").animate({
						"opacity": "0"
					}, 300, "swing", function() {
						$(".map").hide()
					})
					setTimeout(function() {
						//						method.testAnim($(".mapList"),"zoomIn",true)
						$(".mapList").show()
						$(".mapList").animate({
							"opacity": "1"
						}, 300, "swing")
					}, 300)
				})
				$(".mapListHeaderIcon").on("click", function() {
					//					method.testAnim($(".mapList"),"zoomOut",false)
					$(".mapList").animate({
						"opacity": "0"
					}, 300, "swing", function() {
						$(".mapList").hide()
					})
					setTimeout(function() {
						//						method.testAnim($(".map"),"zoomIn",true)
						$(".map").show()
						$(".map").animate({
							"opacity": "1"
						}, 300, "swing")
					}, 200)
				})
			},
			clickMap: function() {
				qq.maps.event.addListener(map, 'click', function() {
					$(".infoModal").hide()
				});
			}
		}
		var method = {
			testAnim: function(dom, x, flag) {
				$(dom).removeClass("hiddenDom").addClass(x + ' animated showDom').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					if(!flag) {
						$(this).removeClass('showDom animated ' + x).addClass("hiddenDom")
					} else {
						$(this).removeClass('animated ' + x)
					}

				})
			},
			initMap: function() {
				//				var map = new BMap.Map("mapContent");
				//				map.centerAndZoom("上海", 12);
				//				map.setCurrentCity("上海");
				//				map.enableScrollWheelZoom(true);
				//				var geolocation = new BMap.Geolocation();
				//				geolocation.getCurrentPosition(function(r){
				//					if(this.getStatus() == BMAP_STATUS_SUCCESS){
				//						var mk = new BMap.Marker(r.point);
				//						map.addOverlay(mk);
				//						map.panTo(r.point);
				////						alert('您的位置：'+r.point.lng+','+r.point.lat);
				//					}
				//					else {
				//						alert('failed'+this.getStatus());
				//					}        
				//				},{enableHighAccuracy: true})
				//				var center = new qq.maps.LatLng(39.982163, 116.306070);
				map = new qq.maps.Map(document.getElementById("mapContent"), {
					zoom: 13,
					zoomControl: false,
				});
				geolocation = new qq.maps.Geolocation();
				method.showWatchPosition();
				method.getCurLocation();
				infoWin = new qq.maps.InfoWindow({
					map: map
				});
				//				geolocation.getIpLocation(method.showPosition, method.showErr)
			},
			getCurLocation: function() {
				geolocation.getLocation(method.showPosition, method.showErr, options);
			},
			deleteOverlays: function() {
				if(markerArr) {
					for(var i in markerArr) {
						markerArr[i].setMap(null);
					}
					markerArr.length = 0;
				}
			},
			showPosition: function(position) {            
				positionNum++;   
				console.log(position); 
				map.panTo(new qq.maps.LatLng(position.lat, position.lng));
				var icon1 = new qq.maps.MarkerImage('img/locate.svg');
				var icon2 = new qq.maps.MarkerImage('img/other.svg');
				var marker = new qq.maps.Marker({
					icon: icon1,
					map: map,
					position: new qq.maps.LatLng(position.lat, position.lng),
				});
				method.deleteOverlays()
				markerP = [];
				for(var i = 0; i < 5; i++) {
					var p = new qq.maps.LatLng(position.lat + Math.random() / 20 - 0.025, position.lng + Math.random() / 20 - 0.025);
					var tmp = new qq.maps.Marker({
						icon: icon2,
						map: map,
						position: p,
					});
					markerP.push(p)
					markerArr.push(tmp)
				}
				method.infoOpen()
			},
			infoOpen: function() {
				for(var i = 0; i < markerP.length; i++) {
					(function(n) {
						var marker = markerArr[n];
						qq.maps.event.addListener(marker, 'click', function() {
							$(".test").text("海韵西餐厅" + n)
							$(".infoModal").show()
						});
					})(i);
				}
			},
			showErr: function() {
				positionNum++;
				console.log("定位失败")
			},
			showWatchPosition: function() {
				console.log("开始监听")
				geolocation.watchPosition(method.showPosition);
			},
			showClearWatch: function() {
				geolocation.clearWatch();
				console.log("停止监听")
			}
		}
		var o = {
			init: function() {
				domEvent.switchMap()
				method.initMap();
				//				method.testAnim($(".map"),"zoomIn",true)
				$(".map").show()
				$(".map").animate({
					"opacity": "1"
				}, 300, "swing")
				domEvent.clickMap()
			}
		}
		return o;
	})()
	mapPage.init()
})