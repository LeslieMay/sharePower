$(document).ready(function() {
	var declarePage = (function() {
		var domEvent = {
			click: function() {
				$(".declareReasonBtn").on("click", function() {
					$(".declareReasonBtnActive").removeClass("declareReasonBtnActive")
					$(this).addClass("declareReasonBtnActive")
				})
			},
			upload: function() {
				$(".declareFormUpload>input").on("change", function() {
					method.getImg($(".declareFormUpload>input"))
				})
			},
			deleteImg:function(){
				$(".declareUpload").on("click",".close",function(){
					console.log("ll")
					$(this).parent(".declareUploadAlready").remove();
				})
			},
			init: function() {
				domEvent.click();
				domEvent.upload();
				domEvent.deleteImg()
			}
		}
		var method = {
			getImg: function(dom) {
				var arr = ["png", "jpg", "jpeg"];
				var index = dom.val().lastIndexOf(".");
				var ext = dom.val().substr(index + 1);
				if(arr.indexOf(ext) != -1) {
					gainAjax.uploadImg(dom[0].files[0], function(resp) {
						var resp = JSON.parse(resp)
						if(resp.code == 1) {
							console.log("图片上传成功");
							var declareUploadAlready = $("<div class='declareUploadAlready'><img src='"+resp.results.url+"' /><div class='close'><img src='img/close.svg' /></div></div>")
							$(".declareUpload").append(declareUploadAlready);
							$(".declareFormUpload>input").val("")
						} else {
							alert(resp.desc)
						}
					})
				} else {
					alert("请上传png/jpg/jpeg类型的文件！")
				}
			}
		}
		var gainAjax = {
			uploadImg:function(data,fn){
				var fd = new FormData();
				fd.append("file",data);
				loading.show();
				$.ajax({
					type:"post",
					url:"",//上传URL
					async:true,
					dataType:"text",
					data:fd,
					processData:false,
					contentType:false,
					success:function(resp){
						loading.hide();
						typeof fn == 'function' && fn(resp)
					},
					error:function(){
						loading.hide();
						alert("请求网络失败，请重试!")
					}
				})
			},
		}
		var o = {
			init: function() {
				domEvent.init()
			}
		}
		return o;
	})()
	declarePage.init();
})