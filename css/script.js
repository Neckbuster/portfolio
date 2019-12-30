var btns = document.getElementsByClassName("nav__item");
var selected;
for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	  var current = document.getElementsByClassName("active");
	  current[0].classList.toggle("active");
	  this.classList.toggle("active");
	  var arrlist = document.querySelectorAll(".project_sec");
	  var current__sec = document.getElementsByClassName("active_sec");
	  if(this.textContent=="Node"){
	  	current__sec[0].classList.toggle("active_sec");
	  	arrlist[0].classList.toggle("active_sec");
	  	selected = arrlist[0];
	  }
	  else if(this.textContent=="Front-end"){
	  	current__sec[0].classList.toggle("active_sec");
	  	arrlist[1].classList.toggle("active_sec");
	  	selected = arrlist[1];
	  }
	  else{
	  	current__sec[0].classList.toggle("active_sec");
	  	arrlist[2].classList.toggle("active_sec");
	  	selected = arrlist[2];
	  }
	  this.style.transition = "all .85s";
	  selected.style.transition = "all .85s";
	  });
}