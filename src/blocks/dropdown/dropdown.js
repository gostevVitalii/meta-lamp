import $ from 'jquery';
import { transform } from 'lodash';

$(document).ready(function () {
    $('.dropdown__body').click(function () {

        $('.dropdown__content').slideToggle();

    })
})

