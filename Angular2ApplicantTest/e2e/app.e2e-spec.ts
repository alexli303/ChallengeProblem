import { TrainingTrackingToolPage } from './app.po';

describe('training-tracking-tool App', function() {
  let page: TrainingTrackingToolPage;

  beforeEach(() => {
    page = new TrainingTrackingToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
