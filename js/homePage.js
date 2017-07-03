//header welcome-word banner
!function (){
	var $num = 0;
	setInterval(move,2000)
	function move (){
		$num+=1;
		if ($num>3){
			$('#header .wrap>ul').css('bottom','0px')
			$num=1;
		}
		$('#header .wrap>ul').animate({
			bottom: -$num*48+'px'
		},500)
	}		
}();

// headerAnimate
headerAnimate('.container','.sign1')
function headerAnimate(objFather,obj,times){	
			$(obj).each(function (counter,obj){
				$(this).delay(counter * 200).animate({bottom: 0, opacity:1},500)
        	})
}

//windowScroll animate 
$(window).scroll(function (){
	var $sTop = $(document).scrollTop()
	//about-me
	conditionRight('.about-me','.sign21',0,0.6)
	conditionLeft('.about-me','.sign22',0,0.6)

	//latst-works
	conditionUpDown('.latest-works','.sign3Title',0,0.7)
	conditionLeft('.latest-works','.sign3',0, 0.7)

	//offer-form-me
	conditionUpDown('.offer-form-me','.sign4Title',0,0.7)
	conditionUpDown('.offer-form-me','.sign4',0,0.7)

	//footer
	conditionUpDown('#footer','.sign5',0,0.8)

	function conditionUpDown(objFather,obj,index,times){
		if ($sTop>$(objFather).eq(index).offset().top*times){
			$(obj).each(function (counter,obj){
        	$(obj).delay(counter*400).animate({top:'0', opacity:1},800)}).delay(100)
		}
	}

	function conditionLeft(objFather,obj,index,times){
		if ($sTop>$(objFather).eq(index).offset().top*times){
			$(obj).each(function (counter,obj){
        	$(obj).delay(counter*450).animate({left:'0', opacity:1},800)}).delay(500)
		}
	}
	function conditionRight(objFather,obj,index,times){
		if ($sTop>$(objFather).eq(index).offset().top*times){
			$(obj).each(function (counter,obj){
        	$(obj).delay(counter*450).animate({right: 0, opacity:1},800)}).delay(500)
		}
	}
})

//dialog 定位
$(window).scroll(function (){
	$('.latest-works .photos .demo').click(function (){
		var $sTop = $(document).scrollTop()
		var wScreenHeight = window.screen.availHeight
		var wScreenWidth = window.screen.availWidth
		console.log(wScreenHeight)
		$('.latest-work-modal-dialog').offset({top: $sTop,left: 0})
		$('.latest-work-modal-dialog').height(wScreenHeight)
		$('.latest-work-modal-dialog').width(wScreenWidth)
		$('.latest-work-modal-dialog').show()
	})
})

// 点击轮播右
var demos = $('.latest-works .photos .demo')
var $lis = $('.latest-work-modal-dialog li')
var num = 0;

for (var i=0; i<demos.length; i++){
	demos[i].index = i
	demos[i].onclick = function (){
		$('.latest-work-modal-dialog').show()
		num=this.index
		move($lis,num)
	}
}

function move(obj,num){
	for (var i=0; i<obj.length; i++){
		obj[i].classList.remove('active')
	}
	obj[num].classList.add('active')
}
$('.latest-work-modal-dialog .btn1').click(
		function rightBanner(){
			num+=1;
			if (num>$lis.length-1){
				num=0;
			}
			move($lis,num)
		}
	)
$('.latest-work-modal-dialog .btn2').click(
		function rightBanner(){
			num-=1;
			if (num<0){
				num=$lis.length-1;
			}
			move($lis,num)
		}
	)
// //点击展示
$('.latest-works .photos .demo').on('click',function (){
	$('.latest-work-modal-dialog').show()
	document.body.style.overflowY = 'hidden'
})
// //点击close
$('.latest-work-modal-dialog .close').click(function (){
	$('.latest-work-modal-dialog').hide()
	document.body.style.overflowY = 'auto'
})
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