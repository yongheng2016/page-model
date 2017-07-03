
$('.introduce-different .wrap img').animate({
			left: '0',
			opacity: '1'
		},1000)

	$('.introduce-different .content h4').animate({
			top: '0',
			opacity: '1'
		},1000)

	$('.introduce-different .content p').animate({
			top: '0',
			opacity: '1'
		},1000)

	$('.introduce-list .wrap').each(function (index,obj){
		$(obj).animate({
			top: '0',
			opacity: '1'
		},400*(index+1))
	})

$(window).scroll(function (){
	var $sTop = $(document).scrollTop()
	

	//滑动 introduce-different
	if ($sTop>$('.team').offset().top*0.5){
		$('.team .team-list li').each(function (index,obj){
			$(obj).animate({
				left: '0',
				opacity: '1'
			},500*(index+1))
		})
	}

//滑动 footer

if ($sTop>$('#footer').offset().top*0.7){
		$('#footer>h3').animate({
			top: '0',
			opacity: '1'
		},500)

		$('#footer>p').animate({
			top: '0',
			opacity: '1'
		},1000)

			$('#footer .btn-contact').animate({
			top: '0',
			opacity: '1'
		},1500)

	}

})

//无缝滚动 client
var num = 0,clock;
clock = setInterval(move,100)
$('.clients .wrap').hover(function (){
	clearInterval(clock)
},
function (){
	clock = setInterval(move,100)
})
function move(){
	num+=1;
	if (num>5){
		$('.clients .clients-logo').css('left','0')
		num=1
	}
	$('.clients .clients-logo').stop().animate({
		left: -num*222+'px'
	},100)
}

//手风琴 introduce-list
// $('.introduce-list .wrap').hover(function (){
// 	$(this).stop().animate({
// 		transform: 'scale(2)'
// 	},1000).siblings('.wrap').stop().animate({
// 		// transform: 'scaleX(0.2)'
// 	})
// }) 

//click ramdom string
$("html,body").click(function(e) {
		console.log('a')
    var gcd = new Array("❤", "^_^", "O.O", "⚕", "♘", "☆", "♕", "☽", "♪", "₯", "♬", "✧");
    var n = Math.floor(Math.random() * gcd.length);
    var $i = $("<b/>").text(gcd[n]);
    var x = e.pageX,
    y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "color": "#02bdd5",
      'font-size': '20px',
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    },
    1500,
    function() {
      $i.remove()
    });
    e.stopPropagation()
 });