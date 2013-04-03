function tamingselect() {

    var ts_selectclass = 'turnintodropdown'; 	// class to identify selects
    var ts_boxclass = 'dropcontainer'; 		// parent element
    var ts_triggeron = 'activetrigger'; 		// class for the active trigger link
    var ts_triggeroff = 'trigger';			// class for the inactive trigger link
    var ts_dropdownopen = 'dropdownvisible';	// open dropdown

    $('select.' + ts_selectclass).each(function(i, select) {
        var hidden = $('<input>', {
            "value": select.options[0].value,
            "name": select.name,
            "id": select.id,
            "type": "hidden"
        }).insertBefore(select);

        var trigger = $('<a>', {
            "html": select.options[0].text,
            "class": ts_triggeroff,
            "href": "#"
        })
        .click(function() {
            $(this).toggleClass(ts_triggeron).toggleClass(ts_triggeroff);
            ul.slideToggle();
            return false;
        })
        .insertBefore(select);

        var ul = $('<ul>', { "class": ts_dropdownopen }).hide();
        $(select).find('option').each(function(i, option) {
            $('<li>', {
                "html": $('<a>', { "href": "#", "html": option.text })
            })
            .click(function() {
                hidden.val(option.value).text(option.text);
                trigger.removeClass(ts_triggeron).addClass(ts_triggeroff).text(option.text);
                ul.slideUp();
                return false;
            })
            .appendTo(ul);
        });

        $('<div>', {
            "html": ul,
            "class": ts_boxclass
        })
        .insertBefore(select);

        $(select).parent().mouseleave(function() {
            trigger.removeClass(ts_triggeron).addClass(ts_triggeroff);
            ul.slideUp();
        });

        $(select).remove();
    });
}
