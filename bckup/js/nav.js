$( document ).ready(function() {
	/* var windowSize = $(window).width();
	if (windowSize <= 767) {
		alert();
	} */
	calcHeight();
	calcWidth();
	navDropdown();
	
});

$(window).resize(function(){
   windowSize = $(window).width();
})
function calcHeight(){
	var contentHeight= $('.megamenu').height();
	//console.log(contentHeight);
	var MenuHeight = $('.mm-contact').height(contentHeight).addClass('mg-padding');
}

function calcWidth(){
	var containerWidth= $('#top-navbar').innerWidth();
	//var megamenuWidth = $('.megamenu').width;
}

function navDropdown(){

 	 $('.dropdown_nav > li > a').click(function(e){
		if($(this).parent().hasClass("sub-menu")){
		$('.megamenu').hide("300");
		$('.dropdown_nav > li > a').removeClass('open');
		$('.megamenu').removeClass('active');
		if($(this).parent().children('.megamenu').is(":visible")){
			$(this).parent().children('.megamenu').stop(true,true).show().removeClass("active");
            $('.dropdown_nav > li > a').removeClass('open');
		}
		else{
			$(this).addClass('open').parent().children('.megamenu').stop(true,true).show("300").addClass("active");
            $(this).addClass('open');
		}
		}
	});
	
    $("body").click(function(e){
        //alert(e.target.className)
        if(e.target.className !== "open"){
            $(".megamenu").hide("800");
			$('.dropdown_nav > li > a').removeClass('open');
			/* if($('.main-nav').is(":visible")){
			   $('.main-nav').toggle();
			} */
			
        }
    });
}
	
