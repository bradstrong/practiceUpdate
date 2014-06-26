var PU = PU || {};

PU.caseUpload = (function ($) {
	var FILEADDED = false;
	
  return {
    init: function () {
			$.fn.countTo = function(options) {
				options = $.extend({}, $.fn.countTo.defaults, options || {});

				var loops = Math.ceil(options.speed / options.refreshInterval),
						increment = (options.to - options.from) / loops;

				return $(this).each(function() {
					var _this = this,
							loopCount = 0,
							value = options.from,
							interval = setInterval(updateTimer, options.refreshInterval);

					function updateTimer() {
						value += increment;
						loopCount++;
						$(_this).css('width', value.toFixed(options.decimals) + '%');

						if (typeof(options.onUpdate) == 'function')
							options.onUpdate.call(_this, value);

						if (loopCount >= loops) {
							clearInterval(interval);
							value = options.to;

							if (typeof(options.onComplete) == 'function')
								options.onComplete.call(_this, value);
						}
					}
				});
			};

			$.fn.countTo.defaults = {
				from: 0,
				to: 100,
				speed: 1000,
				refreshInterval: 100,
				decimals: 0,
				onUpdate: null,
				onComplete: null,
			};
			
			function getSize() {
				var myFSO    = new ActiveXObject("Scripting.FileSystemObject"),
						filepath = document.upload.file.value,
						thefile  = myFSO.getFile(filepath),
						size     = thefile.size;

				if (size > 5242880) {
					$.growl('Filesize must be 5MB or below', {
						onGrowlClosed: function() {
								$('.j-file-upload-name').val('');
								$('.j-submit-file input').attr("disabled", true);
						},	
						ele: "#submitCase",
						position: {
								from: "bottom",
								align: "center"
						},
						type: 'danger',
						template: {
								icon_type: 'class',
								container: '<div class="col-xs-10 col-sm-10 col-md-6 alert">',
								dismiss: '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>',
								title: '<strong>',
								title_divider: '',
								message: ''
						}
					});
				} else {
					if( $.trim($('.j-title-field').val()) != '' ) 
						$('.j-submit-file input').attr("disabled", false);
						$('.j-file-upload-remove').toggleClass('is-hidden');
						FILEADDED = true;
				}
				
				alert(size + " bytes");
			}

			function fileSize(bytes) {
					var exp    = Math.log(bytes) / Math.log(1024) | 0,
						  result = (bytes / Math.pow(1024, exp)).toFixed(2);

					return result + ' ' + (exp == 0 ? 'bytes': 'KMGTPEZY'[exp - 1] + 'B');
			}
			
			$('.j-submit-file input').attr("disabled", true);

			$(document).on('keyup', '.j-textarea-field', function(e) {
				var $elm = $('.j-submit-file input');
				
				if (e.keyCode == 13 && e.shiftKey)
				 e.stopPropagation();
				
				this.value.length > 25 ? $elm.attr("disabled", false) : $elm.attr("disabled", true);
			});

			$(document).on('change', '.btn-file :file', function() {
				var input = $(this),
						numFiles = input.get(0).files ? input.get(0).files.length : 1,
						label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
				
				input.trigger('fileselect', [numFiles, label]);
			});

			$('.btn-file :file').on('fileselect', function(event, numFiles, label) {			
				var input = $(this).parents('.input-group').find(':text'),
						log   = numFiles > 1 ? numFiles + ' files selected' : label;
		
				if(input.length) {
					input.val(log);

					try {
							var ua   = window.navigator.userAgent,
									msie = ua.indexOf("MSIE ");

							if(msie > 0) {
								getSize();
							} else {
								if (this.files[0].size > 5242880) {
									$.growl('Filesize must be 5MB or below', {
										onGrowlClosed: function() {
												$('.j-file-upload-name').val('');
												$('.j-submit-file input').attr("disabled", true);
										},	
										width: "400px",
										ele: "#submitCase",
										position: {
												from: "bottom",
												align: "center"
										},
										type: 'danger',
										template: {
												icon_type: 'class',
												container: '<div class="col-xs-10 text-center col-sm-10 col-md-6 alert">',
												dismiss: '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>',
												title: '<strong>',
												title_divider: '',
												message: ''
										}
									});
								} else {
									if( $.trim($('.j-title-field').val()) != '' ) 
										$('.j-submit-file input').attr("disabled", false);
										$('.j-file-upload-remove').toggleClass('is-hidden');										
										FILEADDED = true;
								}
							}
					} catch(e) {
						alert("we can't get file size - send it to backend");
					}
				} 			
			});
			
			$(document).on('click', '.j-file-upload-name', function() {
				$('.btn-file :file').trigger('click');
			});

			$(".j-form-submit-case").submit(function(e) {
				e.preventDefault();

				$('.j-progress').toggleClass('is-hidden');
				$('.j-submit-file input').attr("disabled", true);
				
				$('.j-meter').countTo({
					from: 0,
					to: 100,
					speed: 5000,
					refreshInterval: 50,
					onComplete: function(value) {
						$('.j-progress').toggleClass('is-hidden');
						$('.j-submit-file input').attr("disabled", false);
						$('.j-meter').removeAttr('style');
				
						$.growl('Success! <br /> Thank you, we\'ve received your case and one of our editors will review it shortly. <br /> PracticeUpdate staff may contact you via email regarding questions, editing, and possible publication on http://PracticeUpdate.com', {
							onGrowlClosed: function() {
								$('.j-textarea-field, .j-file-upload-name, .j-title-field').val('');

								$.growl('Your case could not be submitted, please try again.', {
									width: "400px",
									ele: "#submitCase",
									position: {
											from: "bottom",
											align: "center"
									},
									type: 'danger',
									template: {
											icon_type: 'class',
											container: '<div class="col-xs-10 text-center success-mgs col-sm-10 col-md-6 alert">',
											dismiss: '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>',
											title: '<strong>',
											title_divider: '',
											message: ''
									}
								});
							},	
							width: "400px",
							ele: "#submitCase",
							position: {
									from: "bottom",
									align: "center"
							},
							type: 'success',
							template: {
									icon_type: 'class',
									container: '<div class="col-xs-10 text-center success-mgs col-sm-10 col-md-6 alert">',
									dismiss: '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>',
									title: '<strong>',
									title_divider: '',
									message: ''
							}
						});

					}
				});
			});
			
			$('.j-title-field').unbind('keyup change input paste').bind('keyup change input paste',function(e){
					var $this = $(this),
							val = $this.val(),
							valLength = val.length,
							maxCount = $this.attr('maxlength');
							
					if( valLength>maxCount )
						$this.val($this.val().substring(0,maxCount));
						
					if (FILEADDED)
						$('.j-submit-file input').attr("disabled", false);
			}); 
			
			$(document).on('click', '.j-file-upload-remove', function(e) {
				e.preventDefault();

				$('.j-file-upload-name').val('');
				$('.j-file-upload-remove').toggleClass('is-hidden');
				$('.j-submit-file input').attr("disabled", true);
			});
		},
	};
} (jQuery));

$(document).ready(function () {
  PU.caseUpload.init();
});