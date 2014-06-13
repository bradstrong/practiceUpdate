var PU = PU || {};

PU.caseUpload = (function ($) {
  return {
    init: function () {
			function getSize() {
				var myFSO    = new ActiveXObject("Scripting.FileSystemObject"),
						filepath = document.upload.file.value,
						thefile  = myFSO.getFile(filepath),
						size     = thefile.size;

				if (size > 2621440) {
					$.growl('Filesize must be 2.5MB or below', {
						onGrowlClosed: function() {
								$('.j-file-upload-name').val('');
								$('.j-submit-file input').attr("disabled", true);
						},	
						ele: "#submitCase",
						position: {
								from: "top",
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
					$('.j-submit-file input').attr("disabled", false);
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
								if (this.files[0].size > 2621440) {
									$.growl('Filesize must be 2.5MB or below', {
										onGrowlClosed: function() {
												$('.j-file-upload-name').val('');
												$('.j-submit-file input').attr("disabled", true);
										},	
										width: "400px",
										ele: "#submitCase",
										position: {
												from: "top",
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
									$('.j-submit-file input').attr("disabled", false);
								}
							}
					} catch(e) {
						alert("we can't get file size - send it to backend");
					}
				} else {
					if(log) 
						console.log(log);
				}			
			});
			
			$(document).on('click', '.j-file-upload-name', function() {
				$('.btn-file :file').trigger('click');
			});

			$(".j-form-submit-case").submit(function(e) {
				e.preventDefault();
				
				$.growl('Success! <br /> Thank you, we\'ve received your case and one of our editors will review it shortly. <br /> PracticeUpdate staff may contact you via email regarding questions, editing, and possible publication on http://PracticeUpdate.com', {
					onGrowlClosed: function() {
						$('.j-textarea-field, .j-file-upload-name').val('');

						$.growl('Your case could not be submitted, please try again.', {
							onGrowlClosed: function() {
								$('.j-textarea-field, .j-file-upload-name').val('');
							},	
							width: "400px",
							ele: "#submitCase",
							position: {
									from: "top",
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
							from: "top",
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
			});
		},
	};
} (jQuery));

$(document).ready(function () {
  PU.caseUpload.init();
});