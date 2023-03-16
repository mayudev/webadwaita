import { html } from "lit-html";
import "../../style.scss";

export default {
  title: "Components/Display/Modifiers",
};

export const Modifiers = () => html`<div>
  <h2>Success</h2>
  <code>.adw-success</code>
  <p class="adw-body adw-success">Success paragraph</p>
  <input type="text" class="adw-entry adw-success" value="Success entry" />
  <h2>Destructive</h2>
  <code>.adw-destructive</code>
  <p class="adw-body adw-destructive">Destructive paragraph</p>
  <input type="text" class="adw-entry adw-destructive" value="Destructive entry" />
  <h2>Warning</h2>
  <code>.adw-warning</code>
  <p class="adw-body adw-warning">Warning paragraph</p>
  <input type="text" class="adw-entry adw-warning" value="Warning entry" />
</div>`;
