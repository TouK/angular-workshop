'use strict';

angular.module('link', ['ngResource']).
    factory('Link', function($resource) {
        var Link = $resource('http://localhost:8080/angular-backend/link/:verb/:id',
            {id: '@id'}, {
                query:  {method:'GET', params: {verb:'list'}, isArray: true},
                get:    {method:'GET', params: {verb:'show'} },
                save:   {method:'POST',params: {verb:'add'} },
                update: {method:'POST',params: {verb:'update'} }
            }
        );
        return Link;
    });
