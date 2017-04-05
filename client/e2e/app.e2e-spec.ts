import { CyclingMadnessPage } from './app.po';

describe('cycling-madness App', () => {
  let page: CyclingMadnessPage;

  beforeEach(() => {
    page = new CyclingMadnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cm works!');
  });
});
