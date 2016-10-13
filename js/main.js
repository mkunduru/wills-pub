$( document ).ready(function() {
    /*$('.expander').simpleexpand();*/
    $('.expander').click(function(){
    	$('#min-calendar').hide();
    	$('.content').show();
    });

    $('.close a').click(function(){
    	$('.content').hide();
    	$('#min-calendar').show();
    });
  });