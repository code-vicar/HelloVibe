define(['./controller/catCtrl', 'text!./view/catView.html'], function(catCtrl, catView) {
    'use strict';

    return {
        url: '/cats',
        controller: catCtrl,
        template: catView
    };
});
