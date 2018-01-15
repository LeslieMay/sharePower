$(document).ready(function() {
	var mapPage = (function() {
		var geolocation = null,
			map = null,
			markerArr = [],
			aroundPower = [],
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
				map = new qq.maps.Map(document.getElementById("mapContent"), {
					zoom: 13,
					zoomControl: false,
				});
				geolocation = new qq.maps.Geolocation();
//				method.showWatchPosition();
				infoWin = new qq.maps.InfoWindow({
					map: map
				});
			},
			getCurLocation: function() {
				geolocation.getLocation(method.showPosition, method.showErr, options);
			},
			showPosition: function(position) {            
				positionNum++;   
				console.log(position); 
				map.panTo(new qq.maps.LatLng(position.lat, position.lng));
				var icon1 = new qq.maps.MarkerImage('img/locate.svg');
				var marker = new qq.maps.Marker({
					icon: icon1,
					map: map,
					position: new qq.maps.LatLng(position.lat, position.lng),
				});
				gainAjax.getLocate(position.lng,position.lat);
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
			},
			infoOpen: function() {
				//点击附近商家图标 出来的商家信息弹窗
				for(var i = 0; i < aroundPower.length; i++) {
					(function(n) {
						var marker = markerArr[n];
						qq.maps.event.addListener(marker, 'click', function() {
							$(".mapListName").text(aroundPower[i].postion);//商家的名字
							$(".mapListLocate").text(aroundPower[i].detailedLocation);//商家的详细地址
							$(".infoModal").show()
						});
					})(i);
				}
			},
			deleteOverlays: function() {
				if(markerArr) {
					for(var i in markerArr) {
						markerArr[i].setMap(null);
					}
					markerArr.length = 0;
				}
			},
			initMarker:function(obj){
				//初始化地图marker
				var icon2 = new qq.maps.MarkerImage('img/other.svg');
				method.deleteOverlays()
				markerP = [];
				for(var i = 0; i < obj.length; i++) {
					var p = new qq.maps.LatLng(obj[i].latitude,obj[i].longitude);
					var newMaker = new qq.maps.Marker({
						icon: icon2,
						map: map,
						position: p,
					});
					aroundPower.push(obj[i])
					markerArr.push(newMaker)
				}
				method.infoOpen()
			}
		}
		var gainAjax = {
			getLocate:function(lon,lat){
				//获取定位后拉取周围商家信息
				loading.show();
				$.ajax({
					type:"get",
					url:"http://wudl.nat200.top/map/boxs?lon="+lon+"&lat="+lat,
					async:true,
					success:function(resp){
						if(resp.code!=1){
							return alert(resp.msg)
						}
						method.initMarker(resp.data)
					},
					error:function(){
						loading.hide();
						alert("请求网络失败,请重试~")
					}
				});
			}
		}
		var o = {
			init: function() {
				domEvent.switchMap()
				method.initMap();
				$(".map").show()
				$(".map").animate({
					"opacity": "1"
				}, 300, "swing")
				domEvent.clickMap();
				method.getCurLocation();
			}
		}
		return o;
	})()
	mapPage.init()
})