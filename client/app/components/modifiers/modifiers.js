import angular from 'angular';
import uiRouter from 'angular-ui-router';
import modifiersComponent from './modifiers.component';
import modifiersService from './modifiers.service';

let modifiersModule = angular.module('modifiers', [
  uiRouter
])

.factory('modifiersService', modifiersService)

.config($stateProvider => {
  "ngInject";

  $stateProvider
    .state('modifiers', {
      url: '/modifiers',
      component: 'modifiers',
      resolve: {
      	modifiersGroups: modifiersService => modifiersService.getModifiersGroups()
      }
    });
})

.component('modifiers', modifiersComponent)
  
.name;

export default modifiersModule;
