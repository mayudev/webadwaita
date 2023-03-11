import "../controls/AdwButton.ts";
import { html } from "lit-html";

export default {
  title: "Components/Actions/Button",
  component: "adw-button",
  argTypes: {
    primary: Boolean,
    danger: Boolean,
  },
  args: {
    primary: false,
    danger: false,
  },
};

const Template = ({ primary, danger, flat }: any) =>
  html`<div>
    <adw-button .primary=${primary} .danger=${danger} .flat=${flat}>Button</adw-button>

    <adw-button .primary=${primary} .danger=${danger} .flat=${flat} pill
      >Button</adw-button
    >

    <adw-button .primary=${primary} .danger=${danger} .flat=${flat} circular>
      <span class="material-icons">add</span>
    </adw-button>
  </div>`;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { primary: true };

export const Danger = Template.bind({});
Danger.args = { danger: true };

export const Flat = Template.bind({});
Flat.args = { flat: true };
