import { html } from "lit-html";
import "../controls/AdwEntry.ts";

export default {
  title: "Components/Forms/Entry",
  component: "adw-entry",
};

export const Regular = () => html`<div>
  <adw-entry placeholder="Entry"></adw-entry>
</div>`;

export const Disabled = () => html`<div>
  <adw-entry disabled></adw-entry>
</div>`;
