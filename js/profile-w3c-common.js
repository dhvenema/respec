"use strict";
// this is only set in a build, not at all in the dev environment
require.config({
  shim: {
    shortcut: {
      exports: "shortcut"
    },
    Promise: {
      exports: "Promise"
    },
    highlight:{
      exports: "hljs"
    },
    beautify:{
      exports: "beautify"
    }
  },
  paths: {
    "beautify": "/node_modules/js-beautify/js/lib/beautify",
    "beautify-css": "/node_modules/js-beautify/js/lib/beautify-css",
    "beautify-html": "/node_modules/js-beautify/js/lib/beautify-html",
    "fetch": "/node_modules/whatwg-fetch/fetch",
    "handlebars": "/node_modules/handlebars/dist/handlebars",
    "highlight": "/node_modules/highlightjs/highlight.pack.min",
    "highlightStyles": "/node_modules/highlightjs/styles/",
    "jquery": "/node_modules/jquery/dist/jquery",
    "marked": "/node_modules/marked/lib/marked",
    "Promise": "/node_modules/promise-polyfill/promise",
    "webidl2": "/node_modules/webidl2/lib/webidl2",
  },
  deps: [
    "fetch",
    "jquery",
    "Promise",
    "core/jquery-enhanced",
    "core/respec-ready",
  ],
});

define([
    // order is significant
    "domReady",
    "core/base-runner",
    "core/ui",
    "core/include-config",
    "core/override-configuration",
    "core/default-root-attr",
    "w3c/l10n",
    "core/markdown",
    "core/style",
    "w3c/style",
    "w3c/headers",
    "w3c/abstract",
    "w3c/conformance",
    "core/data-transform",
    "core/data-include",
    "core/inlines",
    "core/dfn",
    "w3c/rfc2119",
    "core/examples",
    "core/issues-notes",
    "core/requirements",
    "core/best-practices",
    "core/figures",
    "core/biblio",
    "core/webidl-contiguous",
    "core/webidl-oldschool",
    "core/link-to-dfn",
    "core/highlight",
    "core/contrib",
    "core/fix-headers",
    "core/structure",
    "w3c/informative",
    "w3c/permalinks",
    "core/id-headers",
    "core/rdfa",
    "w3c/aria",
    "core/remove-respec",
    "core/location-hash",
    "ui/about-respec",
    "ui/dfn-list",
    "ui/save-html",
    "ui/search-specref",
  ],
  function(domReady, runner, ui) {
    var args = Array.from(arguments);
    domReady(function() {
      ui.addCommand("Save Snapshot", "ui/save-html", "Ctrl+Shift+Alt+S");
      ui.addCommand("About ReSpec", "ui/about-respec", "Ctrl+Shift+Alt+A");
      ui.addCommand("Definition List", "ui/dfn-list", "Ctrl+Shift+Alt+D");
      ui.addCommand("Search Specref DB", "ui/search-specref", "Ctrl+Shift+Alt+space");
      runner
        .runAll(args)
        .then(document.respecIsReady)
        .then(ui.show)
        .catch(function(err){
          console.error(err);
          // even if things go critically bad, we should still try to show the UI
          ui.show();
        })
    });
  }
);
