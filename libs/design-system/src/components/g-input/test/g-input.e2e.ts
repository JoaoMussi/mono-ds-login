import { newE2EPage } from '@stencil/core/testing';

describe('g-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-input></g-input>');

    const element = await page.find('g-input');
    expect(element).toHaveClass('hydrated');
  });
});
