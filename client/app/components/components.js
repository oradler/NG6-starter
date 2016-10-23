import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Categories from './categories/categories';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Categories
])
  
.name;

export default componentModule;
