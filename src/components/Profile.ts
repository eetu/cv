import { msg } from "@lit/localize";
import { css, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { join } from "lit/directives/join.js";
import { map } from "lit/directives/map.js";
import { repeat } from "lit/directives/repeat.js";

import { ProfileData } from "../index.js";

@customElement("cv-profile")
export class Profile extends LitElement {
  @property({ type: Object })
  data: ProfileData["profile"] = {
    dob: "",
    home: "",
    keywords: [],
    links: [],
    name: "",
    languages: [],
    description: null,
  };

  static styles = css`
    .profile {
      display: flex;
      flex-direction: row;
    }

    .profile > img {
      border-radius: 50%;
      height: 250px;
      width: 250px;
      object-fit: cover;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    .description {
      margin-left: 32px;
    }

    h1 {
      display: flex;
      flex-direction: row;
      font-weight: 500;
    }

    .logo {
      display: flex;
      align-items: center;
    }

    .logo:first-child {
      margin-left: 16px;
    }

    .logo > img {
      height: 32px;
      margin-left: 24px;
      filter: grayscale(0.5);
    }

    .keywords {
      font-weight: lighter;
    }
  `;

  render() {
    const { name, dob, home, keywords, links, languages, description } =
      this.data;

    return html`
      <section class="profile">
        <img src="img/default.png" />
        <div class="description">
          <h1>
            ${name}
            ${repeat(
              links,
              (link) =>
                html`<a class="logo" href="${link.url}"
                  ><img src="${link.logo}"
                /></a>`
            )}
          </h1>
          ${dob ? html`<p>${dob}</p>` : nothing}
          <p>${home}</p>

          ${languages && languages.length > 0
            ? html`
                <p>
                  ${msg("Language skills")}:
                  ${join(
                    map(
                      languages,
                      (language) =>
                        html`${language.name} (${language.description})`
                    ),
                    ", "
                  )}
                </p>
              `
            : nothing}
          ${description ? html`<p>${description}</p>` : nothing}
          ${keywords && keywords.length > 0
            ? html`<p class="keywords">[${keywords.join(", ")}]</p>`
            : nothing}
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "cv-profile": Profile;
  }
}
