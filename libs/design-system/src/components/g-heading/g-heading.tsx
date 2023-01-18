import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'g-heading',
  styleUrl: 'g-heading.scss',
  shadow: false,
})
export class Heading {
  @Prop() type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';

  render() {
    const headingType = {
      'h1': (
        <h1>
          <slot />
        </h1>
      ),
      'h2': (
        <h2>
          <slot />
        </h2>
      ),
      'h3': (
        <h3>
          <slot />
        </h3>
      ),
      'h4': (
        <h4>
          <slot />
        </h4>
      ),
      'h5': (
        <h5>
          <slot />
        </h5>
      ),
      'h6': (
        <h6>
          <slot />
        </h6>
      ),
    };

    return <Host>{headingType[this.type]}</Host>;
  }
}
