import { html } from "lit-html";
import "../style.scss";

export default {
  title: "Components/Actions/Button",
};

export const Button = () =>
  html`<div>
    <button class="adw-button">Button</button>
    <button class="adw-button adw-button-primary">Button</button>
    <button class="adw-button adw-button-danger">Button</button>
    <button class="adw-button adw-button-flat">Button</button>
    <button class="adw-button adw-button-circular">
      <span class="material-icons">add</span>
    </button>
    <button class="adw-button adw-button-pill">Button</button>
    <button class="adw-button adw-button-primary adw-button-pill">Button</button>
  </div>`;
