/* Tabs */

$(document).ready(function() {
		$('.nav-tabs > li > a').click(function(event){
		event.preventDefault();//stop browser to take action for clicked anchor
 
		//get displaying tab content jQuery selector
		var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');					
 
		//find actived navigation and remove 'active' css
		var actived_nav = $('.nav-tabs > li.active');
		actived_nav.removeClass('active');
 
		//add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');
 
		//hide displaying tab content
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
 
		//show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
	});
});
	  
	  
/* Investor Login */

$(document).ready(function() {
    $('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad
        $('.error').css('display', 'none'); // hide error msg

        var ValidEmail = $('#username').val() === 'admin@admin.com'; // Email validate
        var ValidPassword = $('#password').val() === 'admin'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            window.location = "home.html"; // go to home.html
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});

/* InnerFade */
$(document).ready(
				function(){
					
					$('ul#home-imgs').innerfade({
						speed: 2000,
						timeout: 6000,
						type: 'sequence',
						containerheight: '535px'
					});
					$('ul#header-imgs').innerfade({
						speed: 2000,
						timeout: 6000,
						type: 'sequence',
						containerheight: '225px'
					});

});

/* Email Protect */

$(window).load(function() {
$("#mike-email").html(function(){
var e = "mzani";
var a = "@";
var d = "phoenixstrategy";
var c = ".com";
var h = "mailto:" + e + a + d + c;
$(this).parent("a").attr("href", h);
return e + a + d + c;
});
});

$(window).load(function() {
$("#dan-email").html(function(){
var e = "dmuzquiz";
var a = "@";
var d = "phoenixstrategy";
var c = ".com";
var h = "mailto:" + e + a + d + c;
$(this).parent("a").attr("href", h);
return e + a + d + c;
});
});

$(window).load(function() {
$("#david-email").html(function(){
var e = "dschnabel";
var a = "@";
var d = "phoenixstrategy";
var c = ".com";
var h = "mailto:" + e + a + d + c;
$(this).parent("a").attr("href", h);
return e + a + d + c;
});
});

