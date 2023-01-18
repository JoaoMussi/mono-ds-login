import { Component, Host, h, Prop } from '@stencil/core';

enum Illustrations {
  'sky-beach' = 'sky-beach',
}

@Component({
  tag: 'g-window-background',
  styleUrl: 'g-window-background.scss',
  shadow: false,
  assetsDirs: ['assets'],
})
export class WindowBackground {
  @Prop() illustration: string;

  render() {
    const imageSrc = `${Illustrations[this.illustration]}.png`;
    const srcIllustration = `./assets/${imageSrc}`;
    
    return (
      <Host>
        <div
          style={{
            'background-image': `url(${srcIllustration})`,
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
          }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
