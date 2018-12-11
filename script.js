// script

window.onload = function() {
	var menu = document.getElementById('menu');
	var link = menu.getElementsByTagName('a');
	for(var i = 0; i < link.length; i++) {
		link[i].onmouseover = function() {
			this.style.color = 'red';
		}
		link[i].onmouseout = function() {
			this.style.color = 'black';
		}
	}
	var bg = document.getElementById('headerbg');
	bg.onmouseover = function() {
		this.style.background = 'url(images/img07.jpg) no-repeat left top';
		this.style.backgroundSize = '100%';
	}
}