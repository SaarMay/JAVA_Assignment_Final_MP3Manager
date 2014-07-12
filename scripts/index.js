
var ifLog = false;

$(document).ready(function(){
	if (ifLog) {
		$("#loginBtn").hide();
		$("#homeBtn").show();
		$(".micBoxhBtns").show();
		$("#loginIndex").hide();
	};
})

function closeLogin() {
	$("#loginIndex").slideUp("slow");	
}

function showLogin () {
	$("#loginIndex").slideDown("slow");	
}

function Login () {
	$("#registerForm").hide()
	$("#loginForm").show();	
}

function Regist () {
	$("#loginForm").hide();
	$("#registerForm").show();	
}

function logged(){
	$("#loginIndex").hide();	
}

function registed(){
	alert("Registered.");
	$("#registerForm").hide()
	$("#loginForm").show();	
}