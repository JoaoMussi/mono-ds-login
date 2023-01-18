import { Component, Host, h, Prop } from '@stencil/core';

enum Border {
  none = '0',
  sm = '--ds-border-sm',
  md = '--ds-border-md',
  lg = '--ds-border-lg',
  xl = '--ds-border-xl',
}

enum Padding {
  none = '0',
  sm = '--ds-spacing-1',
  md = '--ds-spacing-3',
  lg = '--ds-spacing-5',
  xl = '--ds-spacing-7',
}

@Component({
  tag: 'g-box',
  styleUrl: 'g-box.scss',
  shadow: false,
})
export class Box {
  @Prop() backgroundColor: string;
  @Prop() linearGradient: 'center' | 'light-left' | 'light-right';
  @Prop() borderRadius: string | Border = Border.none;
  @Prop() centerContent: boolean = false;
  @Prop() display: string = 'block';
  @Prop() flexDirection: 'column' | 'row' = 'row';
  @Prop() height: string;
  @Prop() padding: string | Padding = Padding.sm;
  @Prop() width: string;

  render() {
    let style: any = {
      'background-color': `var(${this.backgroundColor})`,
      'border-radius': `var(${Border[this.borderRadius]})`,
      height: this.height,
      display: this.display,
      padding: `var(${Padding[this.padding]})`,
      width: this.width,
    };

    if (this.centerContent) {
      const centeredStyle = {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
      };

      delete style.display;

      style = Object.assign({}, style, centeredStyle);
    }

    if (style.display === 'flex') {
      style = Object.assign({}, style, {
        'flex-direction': this.flexDirection,
      });
    }

    if (this.linearGradient) {
      delete style['background-color'];
      let theme;
      let position;

      if (this.linearGradient !== 'center') {
        [theme, position] = this.linearGradient.split('-');
        theme = theme === 'dark' ? 'black' : 'white'
      }

      style = Object.assign({}, style, {
        'background': `radial-gradient(at ${position} 60%, ${theme}, var(${this.backgroundColor}))`,
        // 'background': `linear-gradient(var(${this.backgroundColor}), lighten(var(${this.backgroundColor}), 50%))`,
      });
    }

    return (
      <Host class="g-box" style={style}>
        <slot></slot>
      </Host>
    );
  }
}
