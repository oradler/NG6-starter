import angular from 'angular';
import Categories from './categories/categories';
import Modifiers from './modifiers/modifiers';

let componentModule = angular.module('app.components', [
  Categories,
  Modifiers
])
  
.name;

export default componentModule;
