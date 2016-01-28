import mooKnobSwitchComponent from './mooKnobSwitch.component';

export default app => {
  app.directive('mooKnobSwitch', mooKnobSwitchComponent);

  if (ENVIRONMENT === 'test') {
    require('./mooKnobSwitch.test.js');
  }
}
