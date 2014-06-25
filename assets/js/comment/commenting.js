var PU = PU || {};

PU.comment = (function ($) {
  return {
    init: function () {
    	if ( $('html').hasClass('lt-ie8') )
    		PU.comment.placeholder();
    	
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

          //$('.j-comments li:last').fadeIn(200);
          $('.j-comments li:last').toggleClass('is-hidden');
          $('.j-msg-now-following').show();	
          $('.j-on-commit-follow').show();	

          $('.j-add-comment')
            .val('')
            .fadeOut(200);

          //$('.j-msg-comment').delay(280).fadeIn('slow');
          $('.j-msg-comment').toggleClass('is-hidden');
          
          $('.j-post-option').html('Unfollow');
          $('.j-post-option').prop('class', 'button small success post-option j-post-option j-following active');
        }
      });

      $(document.body).on('click', '.j-delete', function (e) {
      	e.preventDefault();
      	var $this = $(this),
      			id = $this.parents('.j-comment').data('id');
      			      	
      	//$('li[data-id=' + id + '] .j-delete').fadeOut(200);
      	//$('li[data-id=' + id + '] .j-prompt-deletion').delay(280).fadeIn(200);
      	
      	$('li[data-id=' + id + '] .j-delete').toggleClass('is-hidden');
      	$('li[data-id=' + id + '] .j-prompt-deletion').toggleClass('is-hidden');
      	      	
				setTimeout(function() {
	      	//$('li[data-id=' + id + '] .j-post-delete-action').css('display', 'block');
	      	$('li[data-id=' + id + '] .j-post-delete-action').removeClass('is-hidden');
				}, 300);
      });

      $(document.body).on('click', '.j-delete-selection', function (e) {
      	e.preventDefault();
      	var $this = $(this),
      			$delete = $this.data('delete'),
      			$parent = $this.parents('.j-comment'),
      			id = $parent.data('id'),
      			no = function() {
							//$('li[data-id=' + id + '] .j-prompt-deletion').fadeOut(200);
							//$('li[data-id=' + id + '] .j-delete').delay(280).fadeIn('fast');     
							//$('li[data-id=' + id + '] .j-post-delete-action').removeAttr('style');						 			

							$('li[data-id=' + id + '] .j-prompt-deletion').toggleClass('is-hidden');
							$('li[data-id=' + id + '] .j-delete').toggleClass('is-hidden');
							$('li[data-id=' + id + '] .j-post-delete-action').addClass('is-hidden');     
      			},
      			yes = function() {
      				var noPending = function() {
										$('li.media[data-id=' + id + ']').replaceWith("<li class='media coment comment-deleted alert alert-warning'><blockquote class='bq-default'>Comment deleted by User.</blockquote></li>");
									},
									pending = function() {
										//$parent.fadeOut(200);
										//$('.j-msg-comment').fadeOut(200);
										//$('li[data-id=' + id + '] .j-prompt-deletion').hide(1);

										$parent.toggleClass('is-hidden');
										$('.j-msg-comment').toggleClass('is-hidden');
										$('li[data-id=' + id + '] .j-prompt-deletion').toggleClass('is-hidden');
										
										//$('.j-add-comment')
										//	.delay(580).fadeIn(200);

										//$('.j-add-comment').toggleClass('is-hidden');
										$('.j-add-comment').fadeIn(200);

										//$('li[data-id=' + id + '] .j-delete').delay(600).show(1);
										$('li[data-id=' + id + '] .j-delete').toggleClass('is-hidden');
									};
							
							$parent.hasClass('j-pending-template') ? pending() : noPending() ;
      			};
				
				$delete == 'no' ? no() : yes();
      });
      
      $(document.body).on('click', '.j-post-follow', function (e) {
      		e.preventDefault();
      		
					var $this = $(this);
												
					$('.j-post-follow').html('Unfollow');
					$('.j-post-follow').prop('class', 'button small success post-option j-post-unfollow');
			});			
      
      $(document.body).on('click', '.j-post-unfollow', function (e) {
      		e.preventDefault();
      		
					var $this = $(this);
												
					$('.j-post-unfollow').html('Follow');
					$('.j-post-unfollow').prop('class', 'button small success post-option j-post-follow');


					if($this.parents('.j-on-commit-follow').length) {
						$('.j-on-commit-follow').delay(600).hide();
						$('.j-msg-now-following').delay(600).hide();									
					}
			});
						
			Hammer('.j-comment.owner').on("tap", function(e) {
					var $this = $(this),
							id = $this.data('id'),
							elm = $('li[data-id='+id+'] .media-body .post-action'),
							check = elm.css('visibility'),
							prompt = $('.j-prompt-deletion');
	
					if($(e.target).closest('button').length) {
						return;
					}					
					
					if( $('html').hasClass('touch') )
						prompt.length != 0  ? elm.css('display', 'block') : elm.css('display', 'none');
			});
		},
		
		placeholder: function() {
			$(document).ready(function() {
				$("input").each(function() {
					if($(this).val() == "" && $(this).attr("placeholder") != "") {
						$(this).val($(this).attr("placeholder"));
						
						$(this).focus(function() {
							if($(this).val()==$(this).attr("placeholder")) $(this).val("");
						});
						
						$(this).blur(function() {
							if($(this).val() == "")
								$(this).val($(this).attr("placeholder"));
						});
					}
				});
			});		
		}
	};
} (jQuery));

$(document).ready(function () {
  PU.comment.init();
});