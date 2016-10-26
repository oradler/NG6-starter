import template from './printing.html';
import controller from './printing.controller';
import './printing.styl';

let printingComponent = {
  restrict: 'E',
  bindings: {
  	items: '<',
  	printingOrder: '<'
  },
  template,
  controller
};

export default printingComponent;
