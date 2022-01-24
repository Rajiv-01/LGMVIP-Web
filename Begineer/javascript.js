function play(){
	this.play();
}
function pause(){
	this.pause();
}

// document.getElementById("video1").addEventListener("mouseover",play);
// document.getElementById("video1").addEventListener("mouseleave",pause);

var videos = document.getElementsByClassName("video");

for (element of videos ) {
	// statement
	element.addEventListener("mouseover",play);
	element.addEventListener("mouseleave",pause);
}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container_login");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
var modal = document.getElementById("myModal");
var btn = document.getElementById("joinus");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  container.style.boxShadow= "0px 0px 80px rgba(0,0,0,0.74) ";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var menu_btn=document.getElementById("menu");
var menu_container=document.getElementById("menu-container");
var close_btn=document.getElementById("closebtn");
menu_btn.onclick =function(){
  menu_container.style.right=0;
  menu_container.style.zIndex=103;
  menu_container.style.boxShadow="0 0 20px black";
  close_btn.style.opacity=1;
  close_btn.style.left="0px";
  close_btn.style.transform="rotateZ(-360deg)";
}
window.onclick = function(event) {
  if (event.target != menu_container) {
  	if(menu_container.style.right ==0){
    closeNav();
  }
}
}

function closeNav() {
  document.getElementById("menu-container").style.right = "-300px";
  document.getElementById("closebtn").style.opacity=0;
  document.getElementById("closebtn").style.left="250px";
  document.getElementById("closebtn").style.transform="rotateZ(90deg)";
  document.getElementById("menu-container").style.boxShadow="0 0 0 black"
}


const toTop = document.querySelector(".to-top");
const navbar = document.querySelector("#navbar");

window.onscroll = function(){
	scrollFunctiion()
};

function scrollFunctiion(){
	if((document.body.scrollTop >200 || document.documentElement.scrollTop >200) && (window.innerWidth >620)){
		navbar.style.height = '50px';
		navbar.style.background = 'rgba(4, 12, 24, 1)';
		toTop.style.display ='block';
		btn.style.marginTop = '10px';
		menu_btn.style.margin ='10px 15px';
	}
	else {
		navbar.style.background = 'rgba(4, 12, 24, 0.1)';
		navbar.style.height = '80px'
		toTop.style.display = 'none';
		btn.style.marginTop = '15px';
		menu_btn.style.margin ='15px';
	}
}


toTop.addEventListener("click",() =>{
	document.body.scrollTop =0;
	document.documentElement.scrollTop =0;
})