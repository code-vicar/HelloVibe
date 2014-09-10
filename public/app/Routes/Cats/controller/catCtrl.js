define(function() {
    'use strict';

    var inject = ['$scope', '$http'];
    var catCtrl = function catCtrl($scope, $http) {
        this.meow = function() {
            $http({
                method: 'GET',
                url: '/api/cat/meow',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function(res) {
                alert(res.data);
            });
        };

        $scope.catCtrl = this;
    };

    inject.push(catCtrl);
    return inject;
});
