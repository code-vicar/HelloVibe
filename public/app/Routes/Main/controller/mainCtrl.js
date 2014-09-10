define(function() {
    'use strict';

    var inject = ['$scope'];
    var mainCtrl = function mainCtrl($scope) {
        this.demo = 'sup';

        $scope.mainCtrl = this;
    };

    inject.push(mainCtrl);
    return inject;
});
