import { configureLocalization } from "@lit/localize";

import { sourceLocale, targetLocales } from "../locales/codes";
import * as fi from "../locales/fi";

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: async (_locale: string) => fi,
});
