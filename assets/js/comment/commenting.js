var PU = PU || {};

PU.comment = (function ($) {
  return {
    init: function () {
			$.fn.htmlInclusive = function() { 
				return $('<div />').append($(this).clone()).html(); 
			}
			
      $(document.body).on('keypress', '.j-add-comment', function (e) {
        if (e.which == 13) {
          e.preventDefault();

          $('.j-pending-template').htmlInclusive();

          $('li:last-child .given-name').text('First');
          $('li:last-child .family-name').text('Last');
          $('li:last-child .comment-body').text($(this).val());

          $('.j-comments li:last').fadeIn(200);

          $('.j-add-comment')
            .val('')
            .fadeOut(200);

          $('.j-msg-comment').delay(280).fadeIn(200);
        }
      });

      $(document.body).on('click', '.j-delete', function (e) {
      	e.preventDefault();
      	var $this = $(this),
      			id = $this.parents('.j-comment').data('id');
      			      	
      	$('li[data-id=' + id + '] .j-delete').fadeOut(200);
      	$('li[data-id=' + id + '] .j-prompt-deletion').delay(280).fadeIn(200);
      });

      $(document.body).on('click', '.j-delete-selection', function (e) {
      	e.preventDefault();
      	var $this = $(this),
      			$delete = $this.data('delete'),
      			$parent = $this.parents('.j-comment'),
      			id = $parent.data('id'),
      			no = function() {
							$('li[data-id=' + id + '] .j-prompt-deletion').fadeOut(200);
							$('li[data-id=' + id + '] .j-delete').delay(280).fadeIn('fast');      			
      			},
      			yes = function() {
      				var noPending = function() {
										$('li.media[data-id=' + id + ']').replaceWith('<li class="media coment comment-deleted alert alert-warning">Comment deleted by user.</li><hr />');
									},
									pending = function() {
										$parent.fadeOut(200);
										
										$('li[data-id=' + id + '] .j-prompt-deletion').fadeOut(200);
										$('li[data-id=' + id + '] .j-delete').fadeIn('fast');      			

										$('.j-msg-comment').fadeOut(200);
										
										$('.j-add-comment')
											.delay(280).fadeIn(200);
									};
							
							$parent.hasClass('j-pending-template') ? pending() : noPending() ;
      			};
				
				$delete == 'no' ? no() : yes();
      });
      
      $(document.body).on('click', '.j-post-option', function (e) {
      		e.preventDefault();
      		
					var $this = $(this);
												
					$this.html( $this.hasClass('j-following') ? 'Follow' : 'Following' );
					$this.toggleClass('j-following active');
			});
			
			Hammer('.j-comment.owner').on("tap", function(e) {
					var $this = $(this),
							id = $this.data('id'),
							elm = $('li[data-id='+id+'] .media-body .post-action'),
							check = elm.css('visibility'),
							prompt = $('.j-prompt-deletion');

					console.log( check == 'visible' )

					if($(e.target).closest('button').length){
						return;
					}					
					
					if( $('html').hasClass('touch') && !prompt.is(":visible") )
						check == 'visible' ? elm.css('visibility', 'hidden') : elm.css('visibility', 'visible');
			});
		}	
	};
} (jQuery));

$(document).ready(function () {
  PU.comment.init();
});