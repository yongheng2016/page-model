
    $('.sign1').each(function(counter,obj) {
        $(obj).delay(counter * 100).animate({left:0, opacity:1},500)
    });

var citys = [
	{id: '01', name:'北京'},
	{id: '02', name:'河北'},
	{id: '03', name:'河南'},
]
var shis = [
	{id:'01', names:[{id: '011', name:'昌平'},{id: '012', name:'朝阳'},{id: '013', name:'海淀'}]},
	{id:'02', names:[{id: '021', name:'唐山'},{id: '022', name:'廊坊'},{id: '023', name:'张家口'}]},
	{id:'03', names:[{id: '031', name:'新乡'},{id: '032', name:'开封'},{id: '033', name:'郑州'}]},
]
var qus = [
	{id: '011', names:[{id: '0111', name: '昌平A区'},{id: '0112', name: '昌平B区'},{id: '0113', name: '昌平C区'}]},
	{id: '012', names:[{id: '0121', name: '朝阳A区'},{id: '0122', name: '朝阳B区'},{id: '0123', name: '朝阳C区'}]},
	{id: '013', names:[{id: '0131', name: '海淀A区'},{id: '0132', name: '海淀B区'},{id: '0133', name: '海淀C区'}]},
	{id: '021', names:[{id: '0211', name: '唐山A区'},{id: '0212', name: '唐山B区'},{id: '0213', name: '唐山C区'}]},
	{id: '022', names:[{id: '0221', name: '廊坊A区'},{id: '0222', name: '廊坊B区'},{id: '0223', name: '廊坊C区'}]},
	{id: '023', names:[{id: '0231', name: '张家口A区'},{id: '0231', name: '张家口B区'},{id: '0231', name: '张家口C区'}]},
	{id: '031', names:[{id: '0311', name: '新乡A区'},{id: '0312', name: '新乡B区'},{id: '0313', name: '新乡C区'}]},
	{id: '032', names:[{id: '0321', name: '开封A区'},{id: '0322', name: '开封B区'},{id: '0323', name: '开封C区'}]},
	{id: '033', names:[{id: '0331', name: '郑州A区'},{id: '0332', name: '郑州B区'},{id: '0333', name: '郑州C区'}]},
]
$(citys).each(function (index,obj){
	$('.city').append('<option value="'+obj.id+'">'+obj.name+'</option>')
})
selector('.city','.shi',shis)
selector('.shi','.qu',qus)
var addressText = ''
function selector(fatherNode,childNode,childArr){
$(fatherNode).change(function (){
	$(childNode)[0].length = 1;
	var $thisValue = $(this).val()
	$(childArr).each(function (index,obj){
		if ($thisValue === obj.id){
			$(obj.names).each(function (index,obj){		
				if (index===0){
				$(childNode).append('<option selected value="'+obj.id+'">'+obj.name+'</option>')
				}else(
				$(childNode).append('<option value="'+obj.id+'">'+obj.name+'</option>')
				)
			})
		}
	})
})
}


//focus view
$('#address').focus(function (){
	$('.selector').css('opacity','1')
})

//地址输入
var cityText;
var shiText;
var quText;
$('.city').change(function (){
	 cityText = $(this).find('option:selected').text()
	 console.log(cityText)
	 $('#address')[0].value = cityText

})
$('.shi').change(function (){
	 shiText = $(this).find('option:selected').text()
	 $('#address')[0].value = cityText+' '+shiText
})
$('.qu').change(function (){
	 quText = $(this).find('option:selected').text()
	 $('#address')[0].value = cityText+' '+shiText+' '+quText
})

//表单验证
//用户名
var sbmName,sbmEml;
$('#name').focus(function (){
	$('.wram').eq(0).val('输入用户名')
})
$('#name').blur(function (){
	var userInput = $('#name').val()
	var reg = /^[A-Za-z]\w{4,10}$/
	if (reg.test(userInput)){
		$('.wram').eq(0).val('✓')
		sbmName=true
	}else{
		$('.wram').eq(0).val('用户名错误')
		sbmName=false
	}
})

//邮箱
$('#email').focus(function (){
	$('.wram').eq(1).val('输入邮箱')
})
$('#email').blur(function (){
	var userInput = $('#email').val()
	var reg = /^[A-Za-z0-9]\w+@\w+\.[a-z]{,5}$/
	if (reg.test(userInput)){
		$('.wram').eq(1).val('✓')
		sbmEml=true;
	}else{
		$('.wram').eq(1).val('邮箱错误')
		sbmEml=false;
	}
})
$('input[type="submit"]').click(function (){
	if (sbmEml&&sbmName){
		$('form').submit()
	}else{
		$('form').submit(function (e){
			e.preventDefault()
			alert('请检查')
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