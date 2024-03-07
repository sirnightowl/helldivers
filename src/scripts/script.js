var myup = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-up-bold</title><path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" /></svg>';
var mydown = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-down-bold</title><path d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" /></svg>';
var myleft = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-bold</title><path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" /></svg>';
var myright = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-bold</title><path d="M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z" /></svg>';
var arrow = "";

var step = 1;
var Resupply = {1: "down", 2: "down", 3: "up", 4:"right"};
 

jQuery.each(Resupply, function(index, value) {
	if(value == "up"){ arrow = myup; key="w";}
	if(value == "down"){ arrow = mydown; key="s";}
	if(value == "left"){ arrow = myleft; key="a";}
	if(value == "right"){ arrow = myright; key="d";}
	
    $('#strategem').append('<li data-step='+step+' data-key='+key+'>'+arrow+'</li>');
	step=step+1;
	
});


function game(){
	var currentstep = 1;
$('body').removeClass();
$('body').addClass('step'+currentstep);	
	
	$(document).keypress(function(e)
		{if(currentstep==1){
		$("ul").find('[data-step='+currentstep+']').addClass('current');
		
		var s = String.fromCharCode(e.which);
		var currentkey = $("ul").find('[data-step='+currentstep+']').data('key');
		if(s == currentkey){console.log('step1complete'); 
												var step = $("ul").find('[data-step='+currentstep+']');
									$(step).addClass('complete').removeClass('current');	
												currentstep=2;}
   }else if(currentstep==2){
		$("ul").find('[data-step='+currentstep+']').addClass('current');
		var s = String.fromCharCode(e.which);
		var currentkey = $("ul").find('[data-step='+currentstep+']').data('key');
		if(s == currentkey){console.log('step2complete'); 
											 var step = $("ul").find('[data-step='+currentstep+']');
									$(step).addClass('complete').removeClass('current');	
												currentstep=3;} 
		}else if(currentstep==3){
		$("ul").find('[data-step='+currentstep+']').addClass('current');
		var s = String.fromCharCode(e.which);
		var currentkey = $("ul").find('[data-step='+currentstep+']').data('key');
		if(s == currentkey){console.log('step3complete');
											  var step = $("ul").find('[data-step='+currentstep+']');
									$(step).addClass('complete').removeClass('current');
											 currentstep=4;} 
		}else if(currentstep==4){
		$("ul").find('[data-step='+currentstep+']').addClass('current');
		var s = String.fromCharCode(e.which);
		var currentkey = $("ul").find('[data-step='+currentstep+']').data('key');
		if(s == currentkey){console.log('step4complete');} 
		}
		
});
	
	
	
}

game();	




	