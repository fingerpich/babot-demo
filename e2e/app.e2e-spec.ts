import { BabotDemoPage } from './app.po';

describe('babot-demo App', () => {
  let page: BabotDemoPage;

  beforeEach(() => {
    page = new BabotDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
