$(document).ready(function() {
    $(".checkbox").each(function() {
        var wrapper = $(this);
        var checkbox = wrapper.find("input");

        var checkState = function() {
            if ( checkbox.is(":checked") ) {
                wrapper.addClass("is-checked");
            } else if ( !checkbox.is("is-checked") ) {
                wrapper.removeClass("is-checked");
            }

            if ( checkbox.is(":disabled") ) {
                wrapper.addClass("is-disabled");
            } else if ( !checkbox.is(":disabled") ) {
                wrapper.removeClass("is-disabled");
            }
        };

        checkState();

        wrapper.click(function() {
            if ( checkbox.is(":checked") ) {
                checkbox.removeAttr("checked", "");
                checkState();
            } else {
                checkbox.attr("checked", "checked");
                checkState();
            }
        });

    });
});
