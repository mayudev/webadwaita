import { html } from "lit-html";
import "../components/AdwLabel.ts";

export default {
  title: "Components/Display/Label",
  component: "adw-label",
};

export const Default = () => html`<div>
  <adw-label kind="h1">Title 1</adw-label>
  <adw-label kind="h2">Title 2</adw-label>
  <adw-label kind="h3">Title 3</adw-label>
  <adw-label kind="h4">Title 4</adw-label>
  <adw-label kind="heading">Heading</adw-label>
  <adw-label>Regular text</adw-label>
</div>`;
