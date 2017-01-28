import { NgExperimentPage } from './app.po';

describe('ng-experiment App', function() {
  let page: NgExperimentPage;

  beforeEach(() => {
    page = new NgExperimentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
