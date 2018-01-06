$(document).ready(function(){
	var browserPage = (function(){
		var $progress = $('.progress'), $bar = $('.progress__bar'), $text = $('.progress__text'), percent = 0, speed = 200, orange = 30, yellow = 55, green = 85, timer;
		var method = {
			resetColors:function () {
			    $bar.removeClass('progress__bar--green').removeClass('progress__bar--yellow').removeClass('progress__bar--orange').removeClass('progress__bar--blue');
			    $progress.removeClass('progress--complete');
			},
			update:function () {
			    timer = setTimeout(function () {
			        percent += Math.random() * 1.8;
			        percent = parseInt(percent.toFixed(1));
			        $text.text(percent + '%');
			        if (percent >= 100) {
			            percent = 100;
			            $progress.addClass('progress--complete');
			            $bar.addClass('progress__bar--blue');
			            $text.text('100%');
			        } else {
			            if (percent >= green) {
			                $bar.addClass('progress__bar--green');
			            } else if (percent >= yellow) {
			                $bar.addClass('progress__bar--yellow');
			            } else if (percent >= orange) {
			                $bar.addClass('progress__bar--orange');
			            }
			            speed = Math.floor(Math.random() * 300);
			            method.update();
			        }
			        $bar.css({ width: percent + '%' });
			    }, speed);
			}
		}
		var o = {
			init:function(){
				setTimeout(function () {
				    $progress.addClass('progress--active');
				    method.update();
				}, 1000);
			}
		}
		return o ;
	})()
	browserPage.init()
})