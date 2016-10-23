import template from './categories.html';
import controller from './categories.controller';
import './categories.styl';

let categoriesComponent = {
  restrict: 'E',
  bindings: {
  	categories: '<'
  },
  template,
  controller
};

export default categoriesComponent;
