$(function(){
	var liHeight = $(".nav-list li").height();
	$(".nav-list .first-list").hover(function(){
		var i = $(this).index();
		$(".sec-list").eq(i).show();
	},function(){
		var i = $(this).index();
		$(".sec-list").eq(i).hide();
	});
	$(".sec-list li").hover(function(){
		var j = $(this).index();
		$(".third-list").eq(j).show();
	},function(){
		var j = $(this).index();
		$(".third-list").eq(j).hide();
	});
	//图片信息
	var data = [
		{img:1},{img:2},{img:3},{img:4},{img:5}
	];

	var $imgBox = $("#carousel");
	var imgBox = $imgBox[0];
	var $iconBox = $("#icon_main");
	var iconBox = $iconBox[0];

	var carousel = new Carousel(imgBox,iconBox,data,"first");
	carousel.addSlider();
	carousel.slider(1);
	carousel.setTimes();

	var $secImgBox = $("#carousel2");
	var secImgBox = $secImgBox[0];
	var $secIconBox = $("#icon_main2");
	var secIconBox = $secIconBox[0];

	var seCarousel = new Carousel(secImgBox,secIconBox,data,"sec");
	seCarousel.addSlider();
	seCarousel.slider(1);
	seCarousel.setTimes();
});