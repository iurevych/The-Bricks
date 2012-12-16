(function() {
function Commutator(element) {
    this.element = element;
}

var klass = Commutator.prototype;
var self = Commutator;
APP.Commutator = Commutator;

klass.init = function() {
    this.bindEvents();
};

klass.bindEvents = function() {
    $(this.element).mousedown(function() {
        if ($(this).hasClass("is-off")) {
            $(this).removeClass("is-off").addClass("is-on");
        } else {
            $(this).addClass("is-off").removeClass("is-on");
        }
    });
};

}());
