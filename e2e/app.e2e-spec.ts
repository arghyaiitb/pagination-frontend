import { PaginationFrontendPage } from './app.po';

describe('pagination-frontend App', () => {
  let page: PaginationFrontendPage;

  beforeEach(() => {
    page = new PaginationFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
