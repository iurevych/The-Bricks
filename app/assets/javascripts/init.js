APP = {};

$(function() {
    // Init custom selects
    $(".js-select").chosen();

    // Init datepicker
    var datepicker = new APP.Datepicker(".datepicker-block");
    datepicker.init();

    // Init commutator
    var commutator = new APP.Commutator(".commutator");
    commutator.init();

    // Init gallery (nivoSlider)
    $(".js-gallery").nivoSlider();
});
