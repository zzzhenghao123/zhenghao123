

$(function(){




    /*----------------------advice页面-----------------*/

	$('.wait').click(function() {
		$('.wait').removeClass('cl').next().removeClass('bk');
		$(this).addClass('cl').next().addClass('bk');
		var ind=$('.wait').index(this);
		/*console.log(ind);*/
		/*$('.char_info').eq(ind).css({"display":'none'})*/
		$('.info_wait').hide().eq(ind).show();

	});



	/*-------------------lawyerlist页面---------------*/
	$('.casetype').click(function(){
		if ($('.lawtype').is(":hidden")) {
            $('.lawtype').show();
            $('.shadow').show()
		}else{
            $('.lawtype').hide();
            $('.shadow').hide()
		}

	});
	$('.showq').click(function(){
        $('.lawtype').hide();
        $('.shadow').hide();
	});

	$('.experience').click(function () {
		if($('.pai1').attr('src')=='images/up.png'){
            $('.pai1').attr({
                'src':'images/down.png'
            }).css({
				'height':"0.2rem",
				'margin-bottom':"0.1rem"
			})
		}else{
			$('.pai1').attr({
            'src':'images/up.png'
			}).css({
                'height':"0.47rem",
                'margin-bottom':" 0"
			})
		}

    })














































/*结尾处*/
})