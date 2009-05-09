//changes the email and phone from spam safe to working
$('.email').html("<a href='#' onclick='mailto:markus.nordin@gmail.com'>markus.nordin@gmail.com</a>");
$('.phone').html("073 923 03 63");

/*
old _pipe_entry.html.erb method
<p><span><%= link_to pipe_entry.title, pipe_entry.link %></span></p>
*/

// Checks and prepares all entries that are longer than one line (longer than x pixels)
$.extend($.expr[':'],{
  height: function(a,i,m) {
  if(!m[3]||!(/^(<|>)\d+$/).test(m[3])) {return false;}
  return m[3].substr(0,1) === '>' ? 
  	$(a).height() > m[3].substr(1) : $(a).height() < m[3].substr(1);
 }
});
$('#main span:height(>30)').addClass('breakify');

// Break up the word and resets the breakify class
$('span.breakify').each(function() {
	var numWords = $(this).html().split(' ').length;
	var strlen = Math.ceil((numWords / 2) + 1);
	wordArr = new Array();
	wordArr = $(this).html().split(' ');
	
	//checks and (kind of) makes sure that no long words will mess up the design
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
