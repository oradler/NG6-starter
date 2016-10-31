import template from './modifiers.html';
import controller from './modifiers.controller';
import './modifiers.styl';

let modifiersComponent = {
	restrict: 'E',
	bindings: {
	modifiersGroups: '<',
	priceLevels: '<'
  },
  template,
  controller
};

export default modifiersComponent;