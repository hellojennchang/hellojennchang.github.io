   	
// navbar hide overlay of content

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

// A $( document ).ready() block. filtering
$( document ).ready(function() {
        
    var $btns = $('.btn').click(function(){
        if(this.id == 'all') {
            $('#basket > div').show();
        }
        else {
            var $el = $('.' + this.id).show();
            $('#basket > div').not($el).hide();
        }
    });
    });

// Close on click
$(document).click(function(e) {
	if (!$(e.target).is('.card-body')) {
    	$('.collapse').collapse('hide');	    
    }
});

$("#modalmain").on('hidden.bs.modal', function (e) {
    $("#modalmain iframe").attr("src", $("#modalmain iframe").attr("src"));
});