import mooKnobSwitchDirective from './mooKnobSwitch.js';
import './mooKnobSwitch.scss';


(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        if (typeof angular === 'undefined') {
            var angular = require('angular');
            factory(angular);
            module.exports = 'mooAngularKnobSwitch';
        } else {
            factory(angular);
            module.exports = 'mooAngularKnobSwitch';
        }
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['angular'], factory);
    } else {
        // Global Variables
        factory(root.angular);
    }
}(this, function (angular) {
  'use strict';
  // create your angular module and do stuff
  var moduleName = 'mooAngular.knobSwitch';
  var mod = angular.module(moduleName, []);

  mooKnobSwitchDirective(mod);

  return moduleName; // the name of your module
}));