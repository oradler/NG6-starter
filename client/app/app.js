import angular from 'angular';
import uiRouter from 'angular-ui-router';
//import ngDragDrop from 'ang-drag-drop';
import Common from './common/common';
import Components from './components/components';
//import AppDataService from './app.data.service';
import AppComponent from './app.component';
//import 'normalize.css';

// var StaticData = angular.module('staticData', []);
// StaticData.factory('staticData', function(){
//   return {
//     categories: window.catItems,
//     modifiers: window.modifiers,
//     modifierGroups: window.modifierGroups
//   }
// });

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
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