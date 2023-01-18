import { newSpecPage } from '@stencil/core/testing';
import { Input } from '../g-input';

describe('g-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<g-input></g-input>`,
    });
    expect(page.root).toEqualHtml(`
      <g-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-input>
    `);
  });
});
