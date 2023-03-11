import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import style from "../styles/buttons.scss?inline";

@customElement("adw-button")
export default class AdwButton extends LitElement {
  static styles = unsafeCSS(style);

  @property({ type: Boolean })
  primary: boolean = false;

  @property({ type: Boolean })
  circular: boolean = false;

  @property({ type: Boolean })
  danger: boolean = false;

  @property({ type: Boolean })
  pill: boolean = false;

  @property({ type: Boolean })
  flat: boolean = false;

  protected render() {
    const classes = {
      "adw-button": true,
      "adw-button-primary": this.primary,
      "adw-button-circular": this.circular,
      "adw-button-danger": this.danger,
      "adw-button-pill": this.pill,
      "adw-button-flat": this.flat,
    };

    return html`<button class=${classMap(classes)}>
      <slot />
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "adw-button": AdwButton;
  }
}
