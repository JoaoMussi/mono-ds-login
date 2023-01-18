import { newE2EPage } from '@stencil/core/testing';

describe('g-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-button></g-button>');

    const element = await page.find('g-button');
    expect(element).toHaveClass('hydrated');
  });
});
