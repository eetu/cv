import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cv-section-content")
export class SectionContent extends LitElement {
  static override styles = css`
    .section-content {
      font-weight: normal;
    }
  `;

  override render() {
    return html`
      <div class="section-content">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-section-content": SectionContent;
  }
}
