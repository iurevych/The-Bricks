(function() {
function Datepicker(element) {
    this.element = element;
}

var klass = Datepicker.prototype;
var self = Datepicker;
APP.Datepicker = Datepicker;

klass.init = function() {
    this.bindEvents();
};

klass.bindEvents = function() {
    $(this.element).datepicker({
        showOtherMonths: true,
        showButtonPanel: true,
        showWeek: true,
        minDate: -20,
        maxDate: "+1M",
        dayNamesMin: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        firstDay: 1
    });
};

}());
