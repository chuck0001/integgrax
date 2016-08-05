import { InteggraxPage } from './app.po';

describe('integgrax App', function() {
  let page: InteggraxPage;

  beforeEach(() => {
    page = new InteggraxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
