var PU = PU || {};

PU.comment = (function ($) {
    return {
        init: function () {
            if ($('html').hasClass('lt-ie8'))
                PU.comment.placeholder();

            Hammer('.j-comment.owner').on("tap", function (e) {
                var $this = $(this),
                        id = $this.attr('id'),
                        elm = $('#comment-' + id + ' .media-body .post-action'),
                        check = elm.css('visibility'),
                        prompt = $('.j-prompt-deletion');

                if ($(e.target).closest('button').length) {
                    return;
                }

                if ($('html').hasClass('touch'))
                    prompt.length != 0 ? elm.css('display', 'block') : elm.css('display', 'none');
            });
        },

        placeholder: function () {
            $(document).ready(function () {
                $("input").each(function () {
                    if ($(this).val() == "" && $(this).attr("placeholder") != "") {
                        $(this).val($(this).attr("placeholder"));

                        $(this).focus(function () {
                            if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
                        });

                        $(this).blur(function () {
                            if ($(this).val() == "")
                                $(this).val($(this).attr("placeholder"));
                        });
                    }
                });
            });
        }
    };
}(jQuery));
//-----------------------------------------------------------------------
$(document).ready(function () {
    var headers = {};
    headers['__RequestVerificationToken'] = $('input[name="__RequestVerificationToken"]').val();

    $.ajaxSetup({
        headers: headers
    });
    //-----------------------------------------------------------------------
    $("#newcomment").focus(function () {
        $('#newcommenterror').addClass('is-hidden');
    });
    //-----------------------------------------------------------------------
    $("#newcomment").keypress(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            PostComment();
        }
    });
    //-----------------------------------------------------------------------
    $('.j-post-option').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.html($this.hasClass('j-following') ? 'Follow' : 'Following');
        $this.toggleClass('j-following active');
    });
    //-----------------------------------------------------------------------
    if ($('#pendingcommentfound').val() != '0') {
        $('.j-add-comment').val('').fadeOut(200);
        $('.j-msg-comment').toggleClass('is-hidden');
    }

    PU.comment.init();
});
//-----------------------------------------------------------------------
function PostComment() {
    $('#newcomment').blur();
    var comment = $('#newcomment').val()
    comment = comment.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    if ($.trim(comment) == '') {
        $('#newcommenterror').removeClass('is-hidden');
        return;
    }

    var commentdata = {
        "contentcommentid": 0,
        "contenttypeid": $('#Type').val(),
        "contentid": $('#contentid').val(),
        "comment": comment,
        "deletedflag": 0,
        "contentcommenttracking": 1
    }
    $.ajax({
        type: "POST",
        url: '/api/comment',
        dataType: "json",
        data: JSON.stringify(commentdata),
        cache: false,
        contentType: "application/json",
        success: function (response) {
            var id = response.contentcommentid;
            $('li:last-child .given-name').text($('#FirstName').val());
            $('li:last-child .family-name').text($('#LastName').val());
            $('li:last-child .comment-body').html(comment);
            var template = $('.j-pending-template');
            template.clone().attr('id', 'comment-' + id).removeClass('j-pending-template').removeClass('is-hidden').insertBefore(template);
            $('#comment-' + id + ' .j-delete').attr('href', 'javascript:DelComment(' + id + ');');
            $('#comment-' + id + ' .j-delete-selection-yes').attr('href', 'javascript:DeleteComment(' + id + ');');
            $('#comment-' + id + ' .j-delete-selection-no').attr('href', 'javascript:CancelDeleteComment(' + id + ');');

            $('.j-add-comment').val('').fadeOut(200);
            $('.j-msg-comment').removeClass('is-hidden');
            $('#pendingcommentfound').val(id);

        },
        error: function (xhr, status, error) {
            if (xhr.status != 0) {
                ErrorLog('PostComment', xhr.status + ':' + status + ':' + error);
            }
        }
    });
}
//-----------------------------------------------------------------------
function DelComment(id) {
    $('#comment-' + id + ' .j-delete').toggleClass('is-hidden');
    $('#comment-' + id + ' .j-prompt-deletion').toggleClass('is-hidden');

    setTimeout(function () {
        $('#comment-' + id + ' .j-post-delete-action').removeClass('is-hidden');
    }, 300);
}
//-----------------------------------------------------------------------
function DeleteComment(id) {
    var commentdata = {
        "contentcommentid": id,
        "deletedflag": 1
    }
    $.ajax({
        type: "POST",
        url: '/api/comment',
        dataType: "json",
        data: JSON.stringify(commentdata),
        cache: false,
        contentType: "application/json",
        success: function (response) {
            if ($('#pendingcommentfound').val() == response.contentcommentid) {
                $('#pendingcommentfound').val('0');
                $('#comment-' + id).remove();
                $('.j-msg-comment').addClass('is-hidden');
                $('.j-add-comment').val('').fadeIn(200);
            }
            $('#comment-' + id).replaceWith("<li class='media coment comment-deleted alert alert-warning'><blockquote class='bq-default'>Comment deleted by User.</blockquote></li>");
        },
        error: function (xhr, status, error) {
            if (xhr.status != 0) {
                ErrorLog('PostComment', xhr.status + ':' + status + ':' + error);
            }
        }
    });
}
//-----------------------------------------------------------------------
function CancelDeleteComment(id) {
    $('#comment-' + id + ' .j-prompt-deletion').toggleClass('is-hidden');
    $('#comment-' + id + ' .j-delete').toggleClass('is-hidden');
    $('#comment-' + id + ' .j-post-delete-action').addClass('is-hidden');
}
//-----------------------------------------------------------------------
