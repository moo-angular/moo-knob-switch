import MooKnobSwitchModule from './mooKnobSwitch'
import MooKnobSwitchController from './mooKnobSwitch.controller';
import MooKnobSwitchComponent from './mooKnobSwitch.component';
import MooKnobSwitchTemplate from './mooKnobSwitch.html';

describe('MooKnobSwitch', () => {
  let $rootScope, makeController;

  beforeEach(window.module('app'));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MooKnobSwitchController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MooKnobSwitchTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MooKnobSwitchComponent();

    it('includes the intended template',() => {
      expect(component.template).to.equal(MooKnobSwitchTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MooKnobSwitchController);
    });
  });
});
