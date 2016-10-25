import angular from 'angular';
import uiRouter from 'angular-ui-router';
import categoriesComponent from './categories.component';
import categoriesService from './categories.service';

let categoriesModule = angular.module('categories', [
  uiRouter
])

.factory('categoriesService', categoriesService)

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('items', {
      url: '/',
      component: 'categories',
      resolve: {
      	categories: categoriesService => categoriesService.getCategories()
      }
    });
})

.component('categories', categoriesComponent)
  
.name;

export default categoriesModule;
