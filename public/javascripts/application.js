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
$('.twitter, .tumblr, .flickr, .youtube, .github').hide();

// Animates everything on DOM load
// Disabled during development mode
$(window).load(function(){
	$("#main > div:first-child").show('100', function () {
		// use callee so don't have to name the function
		$(this).next().show('100', arguments.callee);
	});
});

// Menu interaction
var displaythis = 'all';

$('#masthead li a').click(function(){
	if( displaythis == $(this).children().text() ) {
		displaythis = 'all';
		$('#masthead li a').removeClass('selected');
		$('#main > div').show();
		$('#main').css( 'background' , 'transparent url("../images/grid_bg.gif") repeat-y 0 0' );
		return false;
	}
	displaythis = $(this).children().text();
	$('#masthead li a').removeClass('selected');
	$(this).addClass('selected');
	$('#main > div').hide();
	$('div.'+displaythis+'').show();
	$('#main').css( 'background' , 'transparent url("../images/grid_'+displaythis+'.gif") repeat-y 0 0' );
	return false;
});


//changes the email and phone from spam safe to working
$('.email').html("<a href='#' onclick='mailto:markus.nordin@gmail.com'>markus.nordin@gmail.com</a>");
$('.phone').html("073 923 03 63");

/*
old _pipe_entry.html.erb method
<p><span><%= link_to pipe_entry.title, pipe_entry.link %></span></p>
*/