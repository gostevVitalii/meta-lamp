import * as $ from 'jquery'
$(function () {
    var defaultText = '';
    $('.text-input').focus(function () {
        defaultText = $(this).val();
        $(this).val('');
    });
    $('.text-input').blur(function () {
        if ($(this).val() == "") {
            $(this).val(defaultText);
        }

    });
});