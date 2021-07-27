import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
        <header class="bg-purple-700 h-16 flex items-center shadow-md">
        <h1 class="text-white text-xl font-bold px-3">
            Hello, World! I'm
            </h1>
            </header>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
        <header class="bg-purple-700 h-16 flex items-center shadow-md">
        <h1 class="text-white text-xl font-bold px-3">
            Hello, World! I'm Stencil 'Don't call me a framework' JS
            </h1>
            </header>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
