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
    string: (_) => token(seq(`"`, /[^"]*/, `"`)),
    int: (_) => /-?\d+/,
    float: (_) => /-?\d+(\.?\d*)/,
    bool: (_) => choice("true", "false"),

    import: ($) => seq("import", $.string),

    route: ($) => seq("route", $.string, $.method, ":", $.struct),
    method: (_) => /[A-Z]+/,
    struct: ($) => seq("{", repeat(seq($.key, ":", $.value)), "}"),
    key: ($) => choice(/\w+/, $.string),
    value: ($) => choice($.string, $.int, $.float, $.bool, $.struct),

    // Extra
    comment: (_) => seq("//", /.*/),
  },
  extras: ($) => [/\s/, $.comment],
});
