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

.filter('text', function() {
  return function(items, text, itemProperty, isCaseSensitive) {
    return items.filter(function(item) {
      let findIn = itemProperty ? item[itemProperty] : item;
      let text_ = isCaseSensitive ? text : text.toLowerCase();
      let target_ = isCaseSensitive ? findIn.toString() : findIn.toString().toLowerCase();
      //return target_.indexOf(text_) === 0;//for prefix search
      return target_.indexOf(text_) > -1;
    });
  };
})

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
