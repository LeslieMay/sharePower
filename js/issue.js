$(document).ready(function(){
	var issuePage = (function(){
		var domEvent = {
			click:function(){
				$(".issueListOne").on("click",function(){
					if($(this).hasClass("activeIssue")){
						$(".activeIssue").removeClass("activeIssue");
					}else{
						$(".activeIssue").children(".issueListOneContent").slideToggle()
						$(".activeIssue").removeClass("activeIssue");
						$(this).addClass("activeIssue")
					}
					$(this).children(".issueListOneContent").slideToggle()
					
				})
			}
		}
		var o = {
			init:function(){
				domEvent.click()
			}
		};
		return o;
	})()
	issuePage.init()
})
