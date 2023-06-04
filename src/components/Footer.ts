import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cv-footer")
export class Footer extends LitElement {
  static override styles = css`
    .footer {
      display: flex;
      direction: row;
      justify-content: end;
      opacity: 0.2;
      font-size: 12px;
    }
  `;

  override render() {
    return html`
      <footer class="footer">
        <slot></slot>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-footer": Footer;
  }
}
