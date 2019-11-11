export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  constructor() {
    this.activeToInactive = 0;
    this.inactiveToActive = 0;
  }

  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log('Set to inactive: ' + this.activeToInactive);
  }

  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log('Set to active:   ' + this.inactiveToActive);
  }
}
