import { html } from "lit-html";
import "../../style.scss";

export default {
  title: "Components/Forms/Entry",
};

export const Entry = () => html`<div>
  <input type="text" class="adw-entry" placeholder="Entry" />
  <input type="text" class="adw-entry" disabled placeholder="Disabled entry" />
</div>`;
