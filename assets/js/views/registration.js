;jQuery(function($) {
    $.get('assets/mustache/personal-info.mustache', function(template) {
        var html = Mustache.to_html(template);
        $('.personal-info').html(html);

        $('#country').change(function() {
            $('#state').parent()[this.value == 232 ? 'show' : 'hide']();
        }).change();

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
                },
                CountryId: {
                    required: true
                },
                StateId: {
                    required: {
                        depends: function() {
                            return $('#country').val() == 232;
                        }
                    }
                }
            },
            messages: {
                Email: {
                    required: 'Email required'
                },
                Password: 'Password must be 6-20 characters(letters, numbers and hyphens are accepted but not spaces)',
                VerifyPassword: {
                    equalTo: 'Passwords do not match'
                },
                FirstName: {
                    required: 'First name required'
                },
                LastName: {
                    required: 'Last name required'
                },
                CountryId: 'Country required',
                StateId: 'State required'
            }
        })
    });
});
