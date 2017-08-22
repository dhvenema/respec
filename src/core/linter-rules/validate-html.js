/**
 * Linter-rule "validate-html".
 * 
 * Validates the HTML syntax via https://validator.w3.org/.
 */
import LinterRule from "core/LinterRule";
import { lang as defaultLang } from "../l10n";

const name = "validate-html";
const meta = {
  en: {
    description: "HTML syntax is not correct.",
    howToFix: "Change HTML syntax errors as indicated by the validator.",
  },
  nl: {
    description: "HTML syntax is niet correct.",
    howToFix: "Wijzig de HTML syntax fouten zoals aangegeven door de validator",
  },
};

// Fall back to english, if language is missing
const lang = defaultLang in meta ? defaultLang : "en";

async function lintingFunction(conf, doc) {
  const htmlToValidate = await fetch(doc.location).then(r => r.text());
  console.log(htmlToValidate);
  /*return {
    name,
    htmlToValidate,
    occurrences: htmlToValidate.length,
    ...meta[lang],
  };*/
}

export const rule = new LinterRule(name, lintingFunction);
