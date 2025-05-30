import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cv-section-item")
export class SectionItem extends LitElement {
  @property({ type: String })
  label = "";

  static override styles = css`
    .section-item {
      display: flex;
      flex-direction: row;
      margin: 16px 0;
    }

    label {
      width: 140px;
      flex-shrink: 0;
    }

    .content {
    }
  `;

  override render() {
    return html`
      <div class="section-item">
        <label>${this.label}</label>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-section-item": SectionItem;
  }
}
