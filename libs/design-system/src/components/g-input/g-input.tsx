import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'g-input',
  styleUrl: 'g-input.scss',
  shadow: false,
})
export class Input {
  @Prop({attribute: 'id'}) inputId: string;
  @Prop() label: string;
  @Prop() type: 'email' | 'password';

  @Event() valueChange: EventEmitter;

  render() {
    return (
      <Host>
        <div class="g-input">
          <label class="g-input__label">
            {this.label}
            <input class="g-input__field" id={this.inputId} type={this.type}></input>
          </label>
          </div>
      </Host>
    );
  }
}
