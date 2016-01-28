import template from './mooKnobSwitch.html';
import controller from './mooKnobSwitch.controller';

let mooKnobSwitchComponent = function () {
  return {
    restrict: 'E',
    scope: {
      ngModelValue: '=ngModel',
      knobLabel: '@',
      inputLabelLeft: '@',
      inputLabelRight: '@',
      inputValueLeft: '@',
      inputValueRight: '@'
    },
    template,
    controller,
    controllerAs: 'knobSwitchCtrl',
    bindToController: true
  };
};

export default mooKnobSwitchComponent;
