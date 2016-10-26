import angular from 'angular';
import Categories from './categories/categories';
import Modifiers from './modifiers/modifiers';
import Printing from './printing/printing';

let componentModule = angular.module('app.components', [
  Categories,
  Modifiers,
  Printing
])
  
.name;

export default componentModule;
