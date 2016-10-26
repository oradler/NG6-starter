import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngDragDrop from 'angular-native-dragdrop';
//import ngDragDrop from 'ang-drag-drop';
import printingComponent from './printing.component';
import printingService from './printing.service';

let printingModule = angular.module('printing', [
  uiRouter,
  ngDragDrop
])

.factory('printingService', printingService)

.config($stateProvider => {
  "ngInject";

  $stateProvider
    .state('printing', {
      url: '/printing',
      component: 'printing',
      resolve: {
      	items: printingService => printingService.getItems(),
        printingOrder: printingService => printingService.getPrintingOrder()
      }
    });
})

.component('printing', printingComponent)
  
.name;

export default printingModule;
