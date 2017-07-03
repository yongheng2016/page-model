var imgs = document.querySelectorAll('.content')
var btnLeft = document.querySelector('.btn1')
var btnRight = document.querySelector('.btn2')


var num = 0;

function move(obj,num){
	for (var i=0; i<imgs.length; i++){
		imgs[i].classList.remove('active')
	}
	imgs[num].classList.add('active')
}
btnLeft.addEventListener('click',function (){
	num-=1;
	if (num<0){
		num=imgs.length-1
	}
	move(imgs,num)
},false)

btnRight.addEventListener('click',function (){
	num+=1;
	if (num>imgs.length-1){
		num=0
	}
	move(imgs,num)
},false)


//滑动footer
$(window).scroll(function (){
	var $sTop = $(document).scrollTop()
	if ($sTop>$('#footer').offset().top*0.5){
		$('.sign1').each(function (index,obj){
			$(obj).animate({
				top: '0',
				opacity: '1'
			},500*(index+1))
		})
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