$(function() {
	$(window).scroll(function(){
		//window.console.log($('.nav').height());
		//window.console.log($(window).scrollTop());
		var navbar= $('.navbar-inverse');
		if($(window).scrollTop() >= navbar.height()){

			navbar.addClass('scrolled');
		}else{
			navbar.removeClass('scrolled');
		}
	});

	//Deal with tabs

	$('.tab-switch li').click(function(){

       //Add selected class To Active link
       $(this).addClass('selected').siblings().removeClass('selected');
       //Hide All Divs
       $('.tab_section .tab-content > div ').hide();
       //show Div selected
       $('.' + $(this).data('class')).show();
 
	});

});
