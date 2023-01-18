import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../g-button';

describe('g-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<g-button></g-button>`,
    });
    expect(page.root).toEqualHtml(`
      <g-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-button>
    `);
  });
});
