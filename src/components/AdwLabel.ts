import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import { customElement, property } from "lit/decorators.js";

import style from "../styles/typography.scss?inline";

export type LabelStyle = "h1" | "h2" | "h3" | "h4" | "heading" | "body";

@customElement("adw-label")
export default class AdwLabel extends LitElement {
  static styles = unsafeCSS(style);

  @property({ type: String })
  kind: LabelStyle = "body";

  protected render() {
    const classes = {
      "adw-label": true,
      "adw-title-1": this.kind === "h1",
      "adw-title-2": this.kind === "h2",
      "adw-title-3": this.kind === "h3",
      "adw-title-4": this.kind === "h4",
      "adw-heading": this.kind === "heading",
      "adw-body": this.kind === "body",
    };

    return html`<div class=${classMap(classes)}>
      <slot />
    </div>`;
  }
}
