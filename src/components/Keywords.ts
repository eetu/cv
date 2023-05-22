import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { join } from "lit/directives/join.js";
import { map } from "lit/directives/map.js";

@customElement("cv-keywords")
export class Keywords extends LitElement {
  @property({ type: Array })
  keywords: string[] = [];

  static override styles = css`
    .keywords {
      font-weight: lighter;
    }
  `;

  override render() {
    return html`<div class="keywords">
      [${join(
        map(this.keywords, (k) => html`${k}`),
        ", "
      )}]
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-keywords": Keywords;
  }
}
