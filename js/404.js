
$('.sign1').eq(0).delay(500).animate({top: 0, opacity:1},500)
$('.sign1').eq(1).delay(500).animate({left: 0, opacity:.5},500).delay(500).animate({bottom: 0, opacity: 1})
$('.sign1').eq(2).delay(500).animate({right: 0, opacity:.5},500).animate({bottom: 0, opacity: 1})
$('.sign1').eq(3).delay(500).animate({bottom: 0, opacity:1},500)

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