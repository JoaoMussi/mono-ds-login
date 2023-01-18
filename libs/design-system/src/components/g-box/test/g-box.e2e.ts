import { newE2EPage } from '@stencil/core/testing';

describe('g-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-box></g-box>');

    const element = await page.find('g-box');
    expect(element).toHaveClass('hydrated');
  });
});
