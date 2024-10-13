import { msg } from "@lit/localize";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import { ProfileData } from "../index.js";

@customElement("cv-employment")
export class Employment extends LitElement {
  @property({ type: Object })
  data: ProfileData["employment"] = {
    status: "",
    history: [],
  };

  static styles = css`
    .employment {
    }

    .employer {
      margin: 16px 0;
    }
  `;

  render() {
    const { history } = this.data;

    return html`
      <cv-section label=${msg("Work experience")}>
        ${repeat(
          history,
          (employer) => html`
            <div class="employer">
              <cv-employer data=${JSON.stringify(employer)}></cv-employer>
            </div>
          `
        )}
      </cv-section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-employment": Employment;
  }
}
