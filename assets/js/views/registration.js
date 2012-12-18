;jQuery(function($) {
    $("#registration-form").validate({
        focusInvalid: false,
        errorElement: 'small',
        submitHandler: function(form) {
            $.post('content/json/registration.json', $(form).serialize(), function(res) {
                var container = $('#container');
                if (res.success) {
                    $.get('assets/mustache/confirmation.mustache', function(template) {
                        var html = Mustache.to_html(template);
                        container.html(html);
                        setTimeout(function() {
                            $.get('assets/mustache/update-popup.mustache', function(template) {
                                var html = Mustache.to_html(template);
                                container.html(html);
                            });
                        }, 5000);
                    });
                }
            })
        },
        rules: {
            Email: {
                required: true,
                email: true/*,
                //remote validation for checking if such email exists
                remote: '/path-to-script'*/
            },
            Password: {
                required: true,
                rangelength: [6, 20]
            },
            VerifyPassword: {
                equalTo: '#password'
            },
            FirstName: {
                required: true
            },
            LastName: {
                required: true
            }
        },
        messages: {
            Email: {
                required: 'email required'
            },
            Password: {
                required: 'password required',
                rangelength: 'must be between 6-20'
            },
            VerifyPassword: {
                equalTo: 'passwords do not match'
            },
            FirstName: {
                required: 'first name required'
            },
            LastName: {
                required: 'last name required'
            }
        },
        invalidHandler: function(form, validator) {
            $('#ErrorDivMsg')[validator.numberOfInvalids() ? 'removeClass' : 'addClass']('hide');
        }
    })
});
