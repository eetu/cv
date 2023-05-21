import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { until } from "lit/directives/until.js";

import { ProfileData } from "../index.js";

@customElement("curriculum-vitae")
export class CurriculumVitae extends LitElement {
  static override styles = css`
    color: tomato;
  `;

  @state()
  private data = fetch("/data/cv.json").then((r) => r.json());

  override render() {
    return html`
      <div>
        ${until(
          this.data.then(
            (data: ProfileData) =>
              html`
                <cv-profile data="${JSON.stringify(data.profile)}"></cv-profile>
                <cv-education
                  data="${JSON.stringify(data.education)}"
                ></cv-education>
              `
          ),
          html`<span>Loading...</span>`
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "curriculum-vitae": CurriculumVitae;
  }
}
