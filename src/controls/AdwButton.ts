import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("adw-button")
export default class AdwButton extends LitElement {
  static styles = css``;

  protected render() {
    return html`<button>
      <slot />
    </button>`;
  }
}
