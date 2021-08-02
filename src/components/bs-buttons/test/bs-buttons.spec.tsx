import { newSpecPage } from '@stencil/core/testing';
import { BsButtons } from '../bs-buttons';

describe('bs-buttons', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BsButtons],
      html: `<bs-buttons></bs-buttons>`,
    });
    expect(page.root).toEqualHtml(`
      <bs-buttons>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bs-buttons>
    `);
  });
});
