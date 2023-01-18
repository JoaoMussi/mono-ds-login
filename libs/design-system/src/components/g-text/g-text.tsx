import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'g-text',
  styleUrl: 'g-text.scss',
  shadow: false,
})
export class Text {
  @Prop() value: string;

  render() {
    return (
      <Host>
        <p>{this.value}</p>
      </Host>
    );
  }
}
