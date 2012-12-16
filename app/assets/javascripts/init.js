APP = {};

$(function() {
    // Init custom selects
    $(".js-select").chosen();

    // Init datepicker
    var datepicker = new APP.Datepicker(".datepicker-block");
    datepicker.init();
});
