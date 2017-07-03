// headerAnimate
headerAnimate('.content','.sign1')
function headerAnimate(objFather,obj,times){
			$(obj).each(function (counter,obj){
        	$(obj).delay(counter * 200).animate({top:'0', opacity:1},500)})
	}

//windowScroll animate 

$(window).scroll(function (){
	var $sTop = $(document).scrollTop()
	//调用函数
	condition('.content','.sign2',1, 0.6)
	condition('.content','.sign3',2, 0.6)
	condition('#footer','.sign4',0, 0.7)

	function condition(objFather,obj,index,times){
		if ($sTop>$(objFather).eq(index).offset().top*times){
			$(obj).each(function (counter,obj){
        	$(obj).delay(counter*200).animate({top:'0', opacity:1},500)})
		}
	}
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
