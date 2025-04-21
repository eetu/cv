/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { until } from "lit/directives/until.js";

import { ProfileData } from "../index.js";
import { allLocales } from "../locales/codes.js";
import { getLocale, setLocale } from "./localization.js";

@customElement("curriculum-vitae")
export class CurriculumVitae extends LitElement {
  static styles = css`
    .language {
      position: absolute;
      right: 8px;
      top: 8px;
      opacity: 0.5;
    }

    .language select {
      text-align: center;
      border: none;
    }

    .cv {
    }
  `;

  @state()
  private data = fetch(`/data/cv_${getLocale()}.json`).then((r) => r.json());

  private handleLanguageChange(event: any) {
    const newLocale = event.currentTarget?.value ?? "en";
    this.data = fetch(`/data/cv_${newLocale}.json`).then((r) => r.json());
    setLocale(newLocale);
  }

  render() {
    return html`
      <div class="cv">
        ${until(
          this.data.then(
            (data: ProfileData) => html`
              <div class="language">
                <select @change="${this.handleLanguageChange}">
                  ${allLocales.map(
                    (locale) =>
                      html`<option
                        value=${locale}
                        ?selected=${locale === getLocale()}
                      >
                        ${locale}
                      </option>`
                  )}
                </select>
              </div>
              <cv-profile data="${JSON.stringify(data.profile)}"></cv-profile>
              <cv-education
                data="${JSON.stringify(data.education)}"
              ></cv-education>
              <cv-certificates
                data="${JSON.stringify(data.certificates)}"
              ></cv-certificates>
              <cv-employment
                data="${JSON.stringify(data.employment)}"
              ></cv-employment>
            `
          ),
          html`<span>Loading...</span>`
        )}
        <cv-footer>Made with LIT, 2025</cv-footer>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "curriculum-vitae": CurriculumVitae;
  }
}
