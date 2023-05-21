import { css,html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cv-section-heading")
export class SectionHeading extends LitElement {
  static override styles = css`
    .section-heading {
      font-weight: lighter;
    }
  `;

  override render() {
    return html`
      <div class="section-heading">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-section-heading": SectionHeading;
  }
}
