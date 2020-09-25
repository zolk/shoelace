import { Component, h } from '@stencil/core';

@Component({
  tag: 'debug-shadow-dropdown',
  shadow: true
})
export class DebugShadowDropdown {
  render() {
    return (
      <sl-dropdown>
        <sl-button slot="trigger" caret>
          Dropdown
        </sl-button>
        <div style={{ margin: '1rem' }}>
          <sl-input placeholder="Type something"></sl-input>
        </div>
      </sl-dropdown>
    );
  }
}
