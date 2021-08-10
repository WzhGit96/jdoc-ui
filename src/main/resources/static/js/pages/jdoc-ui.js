$(function() {
    console.log("welcome")

    $.ajax({
        url: '/jdoc-apis',
        dataType: 'JSON',
        method: 'get',
        success: function (e) {
            console.log(e);
        }
    })
});

function expand(id) {
    var el = $("#" + id);
    var height = $("#" + id + ">.endpoints").css('height');
    el.css("transition", "height 0.2s");
    el.css("overflow", "hidden");
    el.css("height", height);
    if (el.css("height") === "0px") {
        el.css("height", height);
    } else {
        el.css("height", 0 + "px");
    }
}