import { AngularBatteryRangeCalculatorPage } from './app.po';

describe('angular-battery-range-calculator App', function() {
  let page: AngularBatteryRangeCalculatorPage;

  beforeEach(() => {
    page = new AngularBatteryRangeCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
