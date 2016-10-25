import angular from 'angular';
import uiRouter from 'angular-ui-router';
import modifiersComponent from './modifiers.component';
import modifiersService from './modifiers.service';

let modifiersModule = angular.module('modifiers', [
  uiRouter
])

.factory('modifiersService', modifiersService)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('modifiers', {
      url: '/',
      component: 'modifiers',
      resolve: {
      	modifiers: modifiersService => modifiersService.getModifiers()
      }
    });
})

.component('modifiers', modifiersComponent)
  
.name;

export default modifiersModule;
