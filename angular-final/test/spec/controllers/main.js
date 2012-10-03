'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('yeomanApp'));

    var MainCtrl, scope, $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$httpBackend_, $controller) {

        $httpBackend = _$httpBackend_;

        $httpBackend.whenGET('http://localhost/angular-backend/link/list')
            .respond([{url:'http://devrates.com', score:5}]);

        scope = {};
        MainCtrl = $controller('MainCtrl', {$scope: scope});
    }));

    it('should attach a list of links to the scope', function() {
        $httpBackend.flush()
        expect(scope.links.length).toBe(1);
    });

    it('should add valid url', function() {
        $httpBackend.flush()
//        scope.links = [];
        $httpBackend.whenPOST('http://localhost/angular-backend/link/add')
            .respond({id: 3, url:'http://google.com', score:0});
        scope.addLink('http://google.com');
        $httpBackend.flush()
        expect(scope.links.length).toBe(2);
    });

});
