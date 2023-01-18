import { newSpecPage } from '@stencil/core/testing';
import { Box } from '../g-box';

describe('g-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Box],
      html: `<g-box></g-box>`,
    });
    expect(page.root).toEqualHtml(`
      <g-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-box>
    `);
  });
});
