define(['./controller/mainCtrl', 'text!./view/mainView.html'], function(mainCtrl, mainView) {
    'use strict';

    return {
        url: '/',
        controller: mainCtrl,
        template: mainView
    };
});
