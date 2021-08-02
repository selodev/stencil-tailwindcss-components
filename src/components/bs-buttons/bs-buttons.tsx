import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'bs-buttons',
  styleUrl: 'bs-buttons.css',
  shadow: true,
})
export class BsButtons {
  @Prop() kind: string = 'primary';

  render() {
    return (
      <Host>
        <button class={{ [this.kind]: true }}>
          <slot />
        </button>
      </Host>
    );
  }
}
