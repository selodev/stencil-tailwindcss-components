import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    // Tailwind classes on host do not work.
    return (
      <Host tabIndex={-1} class="py-2 px-4 font-semibold rounded-lg shadow-md">
        <header class="">
          <button class="btn btn-green">Button</button>
          <h1 class="text-white text-xl font-bold px-3">Hello, World! I'm {this.getText()}</h1>
        </header>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">Button</button>
      </Host>
    );
  }
}
