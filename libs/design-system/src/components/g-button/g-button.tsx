import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'g-button',
  styleUrl: 'g-button.scss',
  shadow: false
})
export class Button {
  
  @Prop() label: string;
  @Prop() kind?: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Prop() disabled = false;

  class = 'g-button';

  componentWillRender() {
    this.class += ` g-button--${this.kind}`;
  }

  render() {
    return (
      <Host>
        <button disabled={this.disabled} class={this.class}>{this.label}</button>
         {/* + this.kind ? ' g-button--' + this.kind : '' */}
      </Host>
    );
  }
}
