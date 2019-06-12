var message = `@admin ~$ \tHello . Welcome here.<br>\
			   @admin ~$ <br>\
     		   @admin ~$   echo About Me:-<br><br>\
     		   	  	          <b>  Hi there, I am a creative developer, I enjoy building beautiful and thoughtful experiences.<br>\
				  				 I like to mix code surprising visuals and pleasing interactions. Partially active Open Source contributor.<br> I take my work seriously but not myself.</b><br><br>\
     		   @admin ~$   echo Job:-<br><br>\
			  		  			<b> Currently working with good people and pushing versions at Envestnet Yodlee in beautiful city Bengaluru in India.</b><br><br>\
			   @admin ~$   echo Skills:-<br><br>\
							   <b>  Strong knowledge of HTML/CSS/JS<br>\
							     Proficient in Java,C,C++<br>\
							     Played with Eclipse IDE ,Putty, perforce, Bugzilla,Git,GitHub,Jenkins <br>\
							     Feeded the Database with SQL<br>\
							     Operated the systems with Windows,Linux<br><br>\</b>
			   @admin ~$ <br>\
			   @admin ~$   Thank you for you time. Please give feedback if you like it.<br>\
			   `;

var showText = function (target, message, index, interval) {    
    if (index <= message.length && $(target).is(':visible')) { 
        $(target).html(message.substr(0, index++)); 
        setTimeout(function () { showText(target, message, index, interval); }, interval); 
    } 
}
$(function () { 
 
  showText("#mycontent", message, 0, 100);    
 
}); 