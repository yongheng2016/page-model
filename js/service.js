// 滑动love-do 
headerAnimate('.container','.sign1')
function headerAnimate(objFather,obj,times){	
			$(obj).each(function (counter,obj){
				$(this).delay(counter * 200).animate({top: 0, opacity:1},500)
        	})
}

$(window).scroll(function (){
	var $sTop = $(document).scrollTop()
	//latst-works
	conditionUpDown('.features','.sign2Title',0,0.7)
	conditionLeft('.features','.sign2',0, 0.7)
	 //footer 
	 conditionUpDown('#footer','.sign3',0,0.8)

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

//滑动 footer



//无缝滚动
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