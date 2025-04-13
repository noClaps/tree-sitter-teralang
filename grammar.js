/**
 * @file Teralang grammar for tree-sitter
 * @author noClaps <contact@zerolimits.dev>
 * @license 0BSD
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "teralang",

  rules: {
    source_file: ($) => seq(repeat($.import), repeat($.route)),
    string: (_) => seq(`"`, /[^"]*/, `"`),
    number: (_) => /\d+/,

    import: ($) => seq("import", $.string),

    route: ($) => seq("route", $.string, $.method, ":", $.struct),
    method: ($) => /[A-Z]+/,
    struct: ($) => seq("{", repeat(seq($.key, ":", $.value)), "}"),
    key: (_) => /\w+/,
    value: ($) => choice($.string, $.number, $.struct),

    // Extra
    comment: (_) => seq("//", /.*/),
  },
  extras: ($) => [/\s/, $.comment],
});
