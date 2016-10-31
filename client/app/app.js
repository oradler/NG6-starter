import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)

  .directive('focusOnShow', function($timeout) {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
          if ($attr.ngShow){
              $scope.$watch($attr.ngShow, function(newValue){
                if(newValue){
                    $timeout(function(){$element[0].focus(); }, 0); }
                }
              )      
          }
          if ($attr.ngHide){
              $scope.$watch($attr.ngHide, function(newValue){
                if(!newValue){$timeout(function(){$element[0].focus(); }, 0); }
              })      
          }
        }
    };
  })

  ;