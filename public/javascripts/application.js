// Inserts hidden spans into the menu li:s
$('li.menutwitter a').before('<span>twitter</span>');
$('li.menutumblr a').before('<span>tumblr</span>');
$('li.menuflickr a').before('<span>flickr</span>');
$('li.menuyoutube a').before('<span>youtube</span>');

// Checks and prepares all entries that are longer than one line (longer than x pixels)
$.extend($.expr[':'],{
  height: function(a,i,m) {
  if(!m[3]||!(/^(<|>)\d+$/).test(m[3])) {return false;}
  return m[3].substr(0,1) === '>' ? 
  	$(a).height() > m[3].substr(1) : $(a).height() < m[3].substr(1);
 }
});
$('#main span:height(>35)').addClass('breakify');

// Break up the word and resets the breakify class
$('span.breakify').each(function() {
	
	var numWords = $(this).html().split(' ').length;
	var strlen = Math.ceil(numWords / 2);
	wordArr = new Array();
	wordArr = $(this).html().split(' ');
	
	// Checks and (kind of) makes sure that no long words will mess up the design
	if( wordArr[strlen-2].length > 14 ) { strlen -= 2; }
	else if( wordArr[strlen-1].length > 12 ) { strlen -=1; }
	else if( wordArr[strlen].length < 3 ) { strlen++; }
	else if( wordArr[strlen+1].length < 2 ) { strlen += 2 };
	
	var superstring = '<span>';
	for( var i = 0; i < strlen; i++ ) {
		superstring += wordArr[i] + ' ';
	}
	superstring += '</span><br/><span>';
	for( var i = strlen; i < wordArr.length; i++ ) {
		superstring += wordArr[i] + ' ';
	}
	superstring += '</span>';
	$(this).replaceWith(superstring);
});

// Hides the extra <br/> that tumblr uses for image entries
$('em.tumblrimg').each(function(){
	$(this).children('br:first').hide();
});


// Hides all the entries instantly
// For obvious reasons, this needs to be fired after all the breakify calculations
// Disabled during development mode
//$('#main > div').hide();

// Animates everything on DOM load
// Disabled during development mode
/*
$(window).load(function(){
	$('#main > div').show('1000');
});
*/

/*
Old version, much to slow and cpu consuming.
$(window).load(function(){
	$('#main > div:first-child').show('fast', function () {
		// use callee so don't have to name the function
		//$(this).next().show('fast', arguments.callee);
	});
});
*/

// Menu interaction
var displaythis = 'all';

$('#menu li a').click(function(){
	if( displaythis == $(this).siblings('span').text() ) {
		displaythis = 'all';
		$('#menu li').removeClass('selected');
		$('#main > div').show();
		$('#main').css( 'background' , 'transparent url("../images/grid_bg.gif") repeat-y 0 0' );
		return false;
	}
	displaythis = $(this).siblings('span').text();
	$('#menu li').removeClass('selected');
	$(this).parent('li').addClass('selected');
	$('#main > div').hide();
	$('div.'+displaythis+'').show();
	$('#main').css( 'background' , 'transparent url("../images/grid_'+displaythis+'.gif") repeat-y 0 0' );
	return false;
});



// Tumblr image controller
$('em.tumblrimg').each(function(){
	$(this).find('br').remove();
	var imageSrc = $(this).find('img').attr('src');
	var fullsizeUrl = $(this).find('a').attr('href');
	$(this).find('*').remove();
	$(this).after('<a href="'+fullsizeUrl+'" class="fancybox tumblrimg"><img src="'+imageSrc+'" alt="Image" /></a>');
	
});


// Animated arrows rules
// Not really sure how the interaction is supposed to be on these

$('div.desc').hover( function(){
	$(this).after('<img src="../images/arrow-down.png" alt="Arrow" class="arrow" />');
	var arrowx = 0;
	var arrowy = 0;
	
	$('img.arrow').css({
											'display' : 'block',
											'left' : arrowx+'px',
											'right' : arrowy+'px',
	},
	function(){
		('img.arrow').remove();
	}
	);
});

// Slide box and Fancy Box initializer
$(document).ready(function(){
	$('.slide-panel').slideBox();
	$('.tumblr a').fancybox();
	$('div.youtube a').fancybox({
		overlayShow: true,
		frameWidth: 560,
		frameHeight: 340
	});
});

/*
old _pipe_entry.html.erb method
<p><span><%= link_to pipe_entry.title, pipe_entry.link %></span></p>
*/