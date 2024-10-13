import { msg } from "@lit/localize";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import { ProfileData } from "../index.js";

@customElement("cv-employer")
export class Employer extends LitElement {
  @property({ type: Object })
  data: ProfileData["employment"]["history"][0] = {
    employer: "",
    end: "",
    projects: [],
    start: "",
    tasks: [],
  };

  static styles = css`
    .employer {
    }

    .project:not(:first-child) {
      margin: 16px 0;
    }

    .project p {
      margin: 8px 0;
    }

    hr {
      background-image: linear-gradient(90deg, #aaa, transparent);
      border: 0;
      height: 1px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    a {
      color: inherit;
      font-weight: lighter;
    }
  `;

  render() {
    const { employer, start, end, projects, tasks } = this.data;

    return html`
      <cv-section-item label=${employer}>
        <cv-section-heading>${start} - ${end}</cv-section-heading>
        <cv-section-content>
          <cv-keywords keywords=${JSON.stringify(tasks)}></cv-keywords>
        </cv-section-content>
      </cv-section-item>
      <cv-section-item label=${msg("Projects")}>
        ${repeat(
          projects,
          (project) => html`
            <div class="project">
              <cv-section-heading
                >${project.start} - ${project.end}</cv-section-heading
              >
              <cv-section-content>
                <p>${project.customer} - ${project.name}</p>
                <p>${project.description}</p>
                <p>
                  <cv-keywords
                    keywords=${JSON.stringify(project.tasks)}
                  ></cv-keywords>
                </p>
                <p>
                  <cv-keywords
                    keywords=${JSON.stringify(project.keywords)}
                  ></cv-keywords>
                </p>
                <p>
                  <ul>
                  ${
                    project.urls &&
                    repeat(
                      project.urls,
                      (url) => html`<li><a href=${url}>${url}</a></li>`
                    )
                  }
                  </ul>
                </p>
              </cv-section-content>
            </div>
            <hr />
          `
        )}
      </cv-section-item>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-employer": Employer;
  }
}
