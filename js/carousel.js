
function Carousel(imgBox,iconBox,json,prefix){
	this.imgBox = imgBox;
	this.iconBox = iconBox;
	this.json = json;
	this.prefix = prefix;
};
Carousel.prototype = {
	addSlider:function() {
		var typeImg = this.imgBox.innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
		var typeIcon = this.iconBox.innerHTML.replace(/^\s*/,'').replace(/\s*$/,'');
		var imgStore = [];
		var iconStore = [];
		for (var i in this.json) {
			var _html_main = typeImg.replace(/{{index}}/g,this.json[i].img); 
			var _html_icon = typeIcon.replace(/{{index}}/g,this.json[i].img);
			imgStore.push(_html_main);
			iconStore.push(_html_icon);
		}
		this.imgBox.innerHTML = imgStore.join('');
		this.iconBox.innerHTML = iconStore.join('');
	},
	g:function(type) {
		if (type.slice(0,1) == ".") {
			return document.getElementsByClassName(type.slice(1));
		}
		return document.getElementById(type);
	},
	slider:function(i) {
		
		var cur_img = this.g(this.prefix+"Img_"+i);
		var cur_icon = this.g(this.prefix+"Icon_"+i);
		
		var all_img = this.imgBox.getElementsByTagName("li");
		var all_icon = this.iconBox.getElementsByTagName("a");
		
		for (var j = 0;j < all_img.length;j++) {
			all_img[j].className = all_img[j].className.replace('img_active','');
			all_icon[j].className = all_icon[j].className.replace('icon_active','');
		}

		cur_img.className +='img_active';
		cur_icon.className +='icon_active';

	},
	setTimes:function() {
		var index = 1;
		var timer;
		var num_img = [];
		var _this = this;
		num_img = this.imgBox.getElementsByTagName("li");
		for (var i = 0;i<num_img.length;i++) {
			num_img[i].onmousemove = function() {
				clearInterval(timer);
			}
			num_img[i].onmouseout = function(){
				timer = setInterval(function() {
				_this.slider(index);
				index++;
				if ( index == num_img.length + 1){
					index = 1;
					}
				},1000);
			}
		}	
	}

}
