[
  "import"
  "route"
] @keyword

(string) @string
(float) @number
(int) @number
(bool) @boolean

[
  ":"
] @punctuation.delimiter

[
  "{"
  "}"
] @punctuation.bracket

(comment) @comment

(method) @constant

(key) @property
