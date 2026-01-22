import { msg } from "@lit/localize";
import { css, html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { join } from "lit/directives/join.js";
import { map } from "lit/directives/map.js";
import { repeat } from "lit/directives/repeat.js";

import type { ProfileData } from "../schema.js";

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
  };

  @state()
  private profileImage = "img/profile_example.png";

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

  async connectedCallback() {
    super.connectedCallback();
    
    // Try to load profile images in order: profile.png, profile.jpg, fallback to example
    const imagesToTry = ["img/profile.png", "img/profile.jpg"];
    
    for (const imageUrl of imagesToTry) {
      try {
        const response = await fetch(imageUrl, { method: "HEAD" });
        if (response.ok) {
          this.profileImage = imageUrl;
          return;
        }
      } catch (error) {
        // Continue to next image
      }
    }
    
    // If we get here, use the example image (already set as default)
  }

  render() {
    const { name, dob, home, keywords, links, languages, description } =
      this.data;

    return html`
      <section class="profile">
        <img src="${this.profileImage}" />
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
