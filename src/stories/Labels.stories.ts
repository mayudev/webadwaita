import { html } from "lit-html";
import "../style.scss";

export default {
  title: "Components/Display/Typography",
};

export const Typography = () => html`<div>
  <h1>Title 1</h1>
  <h2>Title 2</h2>
  <h3>Title 3</h3>
  <h4>Title 4</h4>
  <p class="adw-heading">Heading</p>
  <p class="adw-body">Regular text</p>
  <div class="adw-title-1">Title 1 (alternative)</div>
</div>`;
