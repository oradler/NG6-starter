import angular from 'angular';
import DataService from './data.service';

let dataModule = angular.module('data', [])
  
.service('DataService', DataService)

.run(function(DataService){
  "ngInject";
  DataService.init();
})

.name;

export default dataModule;