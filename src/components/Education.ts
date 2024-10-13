import { msg } from "@lit/localize";
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

  static styles = css`
    .education {
    }
  `;

  render() {
    const { name, degree, end, start } = this.data;

    return html`
      <cv-section label=${msg("Education")}>
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
