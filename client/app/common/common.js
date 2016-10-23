import angular from 'angular';
import Navbar from './navbar/navbar';
import Data from './data/data';
//import Hero from './hero/hero';
//import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar,
  //Hero,
  //User,
  Data
])
  
.name;

export default commonModule;
