var DARTTag = '';
var scrolltracking = 0;
var ord = 0;
//----------------------------------------------------------------------------------------------------
function LoadDARTAds() {
    var adtrackid;
    var refreshad;
    var tempstring
    var jobboardzone;
    var jobboardzonepart;

    ord += 1;

    VerifyDARTEnv();

    jobboardzonepart = DARTTag.split('/');
    jobboardzone = jobboardzonepart[0] + '/ehealthcareers';

    //Render the DartTag to the Title for the Elsevier logo
    var LogoTitle = $('#ElsevierLogo').attr('title');
    var newtitle = LogoTitle.split('|');
    $('#ElsevierLogo').attr('title', newtitle[0] + ' | ' + DARTTag + ' | ' + $('#zoneid').val());

    $('#ads option').remove();

    var ShowAds = $("#ShowAds").val();
    ShowAds = ShowAds.toLowerCase();
    if (ShowAds == "true") {
        InitAdSlot(1, 'leaderboard', '728x90', 0, DARTTag,1);
        InitAdSlot(2, 'boombox1', '300x250,336x280', 0, DARTTag,1);
        InitAdSlot(3, 'skyscraper', '160x600,120x600', 0, DARTTag, 1);
        InitAdSlot(4, 'filmstrip1', '300x600', 0, DARTTag, 1);
        InitAdSlot(5, 'boombox2', '300x250,336x280', 0, DARTTag, 1);

        switch (parseInt($('#pageid').val())) {
            case enumPageIdExplore:
                InitAdSlot(6, 'ps3leaderboard', '728x90', 0, jobboardzone, 1);
                InitAdSlot(13, 'ps1leaderboard', '728x90', 0, jobboardzone, 1);
                InitAdSlot(14, 'ps2leaderboard', '728x90', 0, jobboardzone, 1);
                //No Break to allow flow to update
            case enumPageIdUpdate:
                InitAdSlot(7, 'jobboardbanner', '300x50', 0, jobboardzone, 1);
                InitAdSlot(8, 'jobboardfilmstrip', '300x600', 1, jobboardzone, 0);
                break;
        }

        if ($("#Environment").val() != "Prod") {
            //Dev-Staging Only
            InitAdSlot(9, 'pushdown', '970x90', 0, DARTTag, 1);
            InitAdSlot(10, 'sidekick', '300x250', 0, DARTTag, 1);
            InitAdSlot(11, 'buttontext', '120x90', 0, DARTTag, 1);
            InitAdSlot(12, 'slider', '950x90', 0, DARTTag, 1);
        }

        $('.ad-content').dfp({
            dfpID: '6053',
            enableSingleRequest: true,
            refreshExisting: true,
            afterEachAdLoaded: function (adUnit) {
                // Do something after each ad is loaded.
                if ($(adUnit).hasClass('display-none')) {
                    //Ad Not Loaded
                    $(adUnit).parent().parent().addClass('is-hidden');
                } else {
                    $(adUnit).parent().parent().removeClass('is-hidden');
                    adtrackid = parseInt($(adUnit).data('adtrackid'));
                    $('#ads').append($('<option></option>').val(adtrackid).html(adtrackid));
                    refreshad = $(adUnit).data('refreshad');
                    if (parseInt(refreshad) > 0) {
                        $(adUnit).data('refreshad', '0');
                        refreshad = refreshad * 10000;
                        setInterval(function () { googletag.pubads().refresh([$(adUnit).data('googleAdUnit')]); }, refreshad);
                    }
                }
            },
            afterAllAdsLoaded: function (adUnits) {
                AdsDoneLoading();
            }
        });
    }
}
//----------------------------------------------------------------------------------------------------
function InitAdSlot(trackid, id, dimensions, refreshad, tag, showadheader) {
    var tempstring;
    var authenticated;
    var SiteUserCountryId;
    if ($("#IsAuthenticated").val() == "1") {
        authenticated = 1;
        SiteUserCountryId = $('#SiteUserCountryId').val();
    }
    else {
        authenticated = 0;
        SiteUserCountryId = 0;
    }

    $('#' + id).empty();
    tempstring = '';
    if (showadheader) {
        tempstring += '<div class="ad-title"><span class="ad-title-text"></span></div>';
    }
    tempstring += '<div id="' + id + 'content"';
    tempstring += ' class="ad-content"';
    tempstring += ' data-adtrackid="' + trackid + '"';
    tempstring += ' data-adunit="' + tag + '"';
    tempstring += ' data-dimensions="' + dimensions + '"';
    tempstring += ' data-targeting=\'{"pos":"' + trackid + '","user":' + authenticated + ',"cid":' + SiteUserCountryId + '}\'';
    if (refreshad > 0) {
        tempstring += ' data-refreshad="' + refreshad + '"';
    }
    tempstring += '></div>';
    $('#' + id).html($(tempstring));
}
//----------------------------------------------------------------------------------------------------
function VerifyDARTEnv() {
    // if not running in Production, change the tag to use staging values
    if ($("#Environment").val() != "Prod") {
        var x = DARTTag.indexOf("staging/");
        if (x == -1) {
            var tmpDARTTag = DARTTag;
            tmpDARTTag = tmpDARTTag.replace("/", "staging/")
            DARTTag = tmpDARTTag;
        }
    }
}
//----------------------------------------------------------------------------------------------------
function AdsDoneLoading() {
    if (scrolltracking == 1) {
        $.scrollSpyReScan();
    }
    else {
        $('.ad').on('scrollSpy:enter', function () {
            var adtrackid = $(this).attr('data-adtrackid');
            if ($("#ads option[value='" + adtrackid + "']").length > 0) {
                TrackViewPortAds(adtrackid);
            }
        });

        $('.ad').scrollSpy();
        scrolltracking = 1;
    }
}
//----------------------------------------------------------------------------------------------------
function TrackViewPortAds(id) {
    if (parseInt($('#pageid').val()) == 0) {
        return;
    }
    if ($("#Environment").val() != "Prod") {
        return;
    }
    var AdTrackingData = {
        "trackingguid": $('#trackingguid').val(),
        "dartord": ord,
        "zoneid": $('#zoneid').val(),
        "pageid": $('#pageid').val(),
        "adtypeid": id,
        "siteuserid": CheckForNULL($('#SiteUserId').val())
    };

    $.ajax({
        type: "POST",
        url: '/Api/AdTracker',
        dataType: "json",
        data: JSON.stringify(AdTrackingData),
        cache: false,
        contentType: "application/json",
        success: function (response) {
            $("#ads option[value='" + id + "']").remove();
        },
        error: function (xhr, status, error) {
            if (xhr.status != 0) {
                ErrorLog('TrackViewPortAds', xhr.status + ':' + status + ':' + error);
            }
        }
    });
}
//----------------------------------------------------------------------------------------------------