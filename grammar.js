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
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
