export default class MooKnobSwitchController {
  constructor() {
    this.name = 'mooKnobSwitch';
    this.toggleKnobSwitchPosition = () => {
      if (this.ngModelValue === this.inputValueLeft) {
        this.ngModelValue = this.inputValueRight; 
      } else {
        this.ngModelValue = this.inputValueLeft;
      }
    };
  
    this.isLeftSelected = () => {
      return this.ngModelValue === this.inputValueLeft; 
    }
  }


}
