import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";

import style from "../styles/entry.scss?inline";

/**
 * AdwEntry is a single line text entry widget.
 */
@customElement("adw-entry")
export default class AdwEntry extends LitElement {
  static styles = unsafeCSS(style);

  @property({ type: String })
  type: string = "text";

  @property({ type: String })
  value: string = "";

  @property({ type: String })
  placeholder: string = "";

  @property({ type: Boolean })
  disabled: boolean = false;

  private _dispatchInput(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    this.dispatchEvent(new CustomEvent("changed", { detail: target.value }));
  }

  protected render() {
    const classes = {
      "adw-entry": true,
    };

    return html`<input
      class=${classMap(classes)}
      type=${this.type}
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      .value=${this.value}
      @input=${this._dispatchInput}
    />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "adw-entry": AdwEntry;
  }
}
