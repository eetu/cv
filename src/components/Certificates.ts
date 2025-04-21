import { msg } from "@lit/localize";
import { css, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import { ProfileData } from "../index.js";

@customElement("cv-certificates")
export class Certificates extends LitElement {
  @property({ type: Object })
  data: ProfileData["certificates"] = [];

  static styles = css`
    ul {
      padding: 0 0 0 20px;
      margin: 0;
      list-style-type: circle;
    }
    li > span{
      font-weight: 200
    }
    .
  `;

  render() {
    const certificates = this.data;

    if (!certificates) {
      return nothing;
    }

    return html`
      <cv-section label=${msg("Certificates")}>
        <cv-section-item label="">
          <cv-section-content>
            <div>
              ${certificates
                ? html` <ul>
                    ${repeat(
                      certificates,
                      (cert) => html`
                        <li>
                          ${cert.name}
                          ${cert.validityPeriod
                            ? html`<span>${cert.validityPeriod}</span>`
                            : nothing}
                        </li>
                      `
                    )}
                  </ul>`
                : nothing}
            </div>
          </cv-section-content>
        </cv-section-item>
      </cv-section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-certificates": Certificates;
  }
}
