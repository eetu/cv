import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cv-section")
export class Section extends LitElement {
  @property({ type: String })
  label = "";

  static override styles = css`
    .section {
      display: flex;
      flex-direction: row;
    }

    h2 {
      font-weight: 500;
      width: 100%;
    }

    label {
      width: 120px;
    }

    .content {
    }
  `;

  override render() {
    return html`
      <h2>${this.label}</h2>
      <section class="section">
        <div class="content">
          <slot></slot>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-section": Section;
  }
}
