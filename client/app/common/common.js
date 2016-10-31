import angular from 'angular';
import Navbar from './navbar/navbar';
import Data from './data/data';

let commonModule = angular.module('app.common', [
  Navbar,
  Data
])
  
.name;

export default commonModule;
