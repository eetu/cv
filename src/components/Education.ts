import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { ProfileData } from "../index.js";

@customElement("cv-education")
export class Education extends LitElement {
  @property({ type: Object })
  data: ProfileData["education"] = {
    degree: "",
    end: "",
    name: "",
    start: "",
  };

  static override styles = css`
    .education {
    }
  `;

  override render() {
    const { name, degree, end, start } = this.data;

    return html`
      <cv-section label="Koulutus">
        <cv-section-item label=${name}>
          <cv-section-heading>${start} - ${end}</cv-section-heading>
          <cv-section-content>${degree}</cv-section-content>
        </cv-section-item>
      </cv-section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-education": Education;
  }
}
