var hackerNews = function() {

	this.checkNetworkStatus = function() {

	}

	this.loadItems = function(feed, id) {

		$.ajax({
	    	url: feed,  
	    	success:function(data) {
	      		$('#' + id).html(data);
	    	}
	  	});

	}

}

function center(cElement) {
	var windowH = $(window).outerHeight()
	var elementH = $(cElement).outerHeight()
	var wH = windowH / 2
	var eH = elementH / 2

	var topH = (wH - eH) - 40

	$(cElement).css({marginTop: topH, position: 'fixed'});

}

function feedStart() {
	var windowH = $(window).outerHeight()
	var feedH = windowH - 70

	$('.wrapper').css({top: feedH});

	var hackerNewsClass = new hackerNews;
	hackerNewsClass.loadItems('/items-engadget', 'engadget');
	hackerNewsClass.loadItems('/items-wired', 'wired');
	hackerNewsClass.loadItems('/items', 'hacker');
}

$(document).ready( function() {
	center(headline)
	center(iterateEffects)
	
	feedStart()

	 $('body').keyup(function(event) {
        var direction = null;
        animcursor = animcursor
        // handle cursor keys
        if (event.keyCode == 37) {
            // slide left
            nextPage(animcursor);
        } else if (event.keyCode == 39) {
            // slide right
           nextPage(animcursor);
        }

        if (direction != null) {
            $('.'+ direction).click()
        }
    });


});

$(window).resize( function() {
	center(headline)
	feedStart()
});
